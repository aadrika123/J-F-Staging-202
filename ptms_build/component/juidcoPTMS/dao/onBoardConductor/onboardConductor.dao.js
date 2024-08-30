"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const generateRes_1 = require("../../../../util/generateRes");
const generateUniqueNo_1 = __importDefault(require("../../../../util/helper/generateUniqueNo"));
const prisma = new client_1.PrismaClient();
class ConductorOnBoarding {
    onBoardingNewConductor = async (req) => {
        const { firstName, middleName, lastName, age, bloodGrp, mobileNo, emailId, emergencyMobNo, adhar_doc, adhar_no, fitness_doc, } = req.body;
        const isExistingConductor = await prisma.conductor_master.findUnique({
            where: { adhar_no },
        });
        const isExistingConductorEmail = await prisma.conductor_master.findUnique({
            where: { email_id: emailId },
        });
        if (isExistingConductor) {
            return (0, generateRes_1.generateRes)({
                error_type: "VALIDATION",
                validation_error: "Already Exist",
            });
        }
        else if (isExistingConductorEmail) {
            return (0, generateRes_1.generateRes)({
                error_type: "VALIDATION",
                validation_error: "Email Already Exist",
            });
        }
        const cUniqueId = (0, generateUniqueNo_1.default)("PTM");
        const query = {
            data: {
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
                age: age,
                blood_grp: bloodGrp,
                mobile_no: mobileNo,
                email_id: emailId,
                emergency_mob_no: emergencyMobNo,
                adhar_doc: adhar_doc,
                adhar_no: adhar_no,
                fitness_doc: fitness_doc,
                cunique_id: cUniqueId,
            },
        };
        const data = await prisma.conductor_master.create(query);
        return (0, generateRes_1.generateRes)(data);
    };
    getAllConductorList = async (req) => {
        const id = String(req.query.id);
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        const search = String(req.query.search);
        const from_date = String(req.query.from_date);
        const to_date = String(req.query.to_date);
        const query = {
            skip: (page - 1) * limit,
            take: limit,
            select: {
                first_name: true,
                middle_name: true,
                last_name: true,
                age: true,
                blood_grp: true,
                mobile_no: true,
                email_id: true,
                emergency_mob_no: true,
                adhar_no: true,
                cunique_id: true,
            },
        };
        if (id !== "" && id !== "undefined") {
            query.where = {
                cunique_id: id,
            };
        }
        if (search !== "" && typeof search === "string" && search !== "undefined") {
            query.where = {
                OR: [
                    {
                        cunique_id: { contains: search, mode: "insensitive" },
                    },
                    {
                        first_name: { contains: search, mode: "insensitive" },
                    },
                ],
            };
        }
        const [data, count] = await prisma.$transaction([
            prisma.conductor_master.findMany(query),
            prisma.conductor_master.count(),
        ]);
        await Promise.all(data.map(async (item) => {
            const busData = await prisma.$queryRawUnsafe(`
          select bus_id, sum(amount)::INT as total_collection ,date, bm.status ,receipts.conductor_id 
          from receipts 
          LEFT JOIN bus_master as bm ON receipts.bus_id = bm.register_no
          LEFT JOIN conductor_master as cm ON receipts.conductor_id = cm.cunique_id
          where conductor_id = '${item?.cunique_id}'
          and date between '${from_date}' and '${to_date}'
          group by bus_id, date, bm.status, receipts.conductor_id 
          order by date ASC
        `);
            await Promise.all(busData.map(async (bus) => {
                const date = new Date(bus?.date);
                const formattedDate = date.toISOString().split('T')[0];
                const receiptBreakup = await prisma.$queryRawUnsafe(`
              select bus_id,amount::INT, count(amount)::INT, sum(amount)::INT,date::DATE from receipts
              WHERE bus_id = '${bus?.bus_id}' 
              and conductor_id = '${item?.cunique_id}' 
              AND date = '${formattedDate}'
              group by bus_id, amount, date
              ORDER BY date ASC
            `);
                bus.breakup = receiptBreakup;
            }));
            const receiptData = await prisma.$queryRawUnsafe(`
          select sum(amount)::INT as total_bus_collection from receipts
          where conductor_id = '${item?.cunique_id}'
          and date between '${from_date}' and '${to_date}'
        `);
            item.bus_data = busData;
            item.receipt_data = receiptData[0];
        }));
        return (0, generateRes_1.generateRes)({ data, count, page, limit });
    };
    getConductorStatus = async () => {
        const date = new Date().toISOString().split("T")[0];
        const qr_total_conductor = "SELECT COUNT(id)::INT FROM conductor_master;";
        const qr_conductor_status = `
       SELECT 
	    COUNT(DISTINCT sche.conductor_id)::INT AS scheduled_conductor,
	    COUNT(DISTINCT cm.cunique_id)::INT - COUNT(DISTINCT sche.conductor_id)::INT AS absent_conductor
	        FROM conductor_master AS cm
	    LEFT JOIN scheduler AS sche ON cm.cunique_id = sche.conductor_id  
      `;
        const [total_conductor, conductor_status] = await prisma.$transaction([
            prisma.$queryRawUnsafe(`${qr_total_conductor}`),
            prisma.$queryRawUnsafe(`${qr_conductor_status}AND sche.date = '${date}'`),
        ]);
        return (0, generateRes_1.generateRes)({ total_conductor, conductor_status });
    };
    // !----------------------------- CHECK EMPLOYEE ID EXIST OR NOT ------------------------------//
    validate_aadhar = async (req) => {
        const adhar_no = req.body.adhar_no;
        const exist = await prisma.$queryRaw `
        SELECT EXISTS (SELECT 1 FROM conductor_master WHERE adhar_no = ${adhar_no});
      `;
        console.log(exist);
        return (0, generateRes_1.generateRes)(exist);
    };
}
exports.default = ConductorOnBoarding;
