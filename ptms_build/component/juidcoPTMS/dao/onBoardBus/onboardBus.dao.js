"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const generateRes_1 = require("../../../../util/generateRes");
const prisma = new client_1.PrismaClient();
class BusOnboarding {
    onBoardingNewBus = async (req) => {
        const { registration_no, vin_no, taxCopy_cert, registration_cert, pollution_cert, } = req.body;
        const isExistingBus = await prisma.bus_master.findUnique({
            where: { vin_no: vin_no },
        });
        if (isExistingBus) {
            return (0, generateRes_1.generateRes)({
                error_type: "VALIDATION",
                validation_error: "Already Exist",
            });
        }
        const query = {
            data: {
                pollution_doc: pollution_cert,
                registrationCert_doc: registration_cert,
                register_no: registration_no,
                taxCopy_doc: taxCopy_cert,
                vin_no: vin_no,
            },
        };
        const newOnboardedBus = await prisma.bus_master.create(query);
        return (0, generateRes_1.generateRes)(newOnboardedBus);
    };
    getAllBusList = async (req) => {
        const id = String(req.query.id);
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        const search = String(req.query.search);
        const query = {
            skip: (page - 1) * limit,
            take: limit,
            select: {
                id: true,
                register_no: true,
                vin_no: true,
            },
        };
        if (id !== "" && id !== "undefined") {
            query.where = {
                register_no: id,
            };
        }
        if (search !== "" && typeof search === "string" && search !== "undefined") {
            query.where = {
                OR: [
                    {
                        register_no: { contains: search, mode: "insensitive" },
                    },
                    {
                        vin_no: { contains: search, mode: "insensitive" },
                    },
                ],
            };
        }
        // const data = await prisma.bus_master.findMany(query);
        const [data, count] = await prisma.$transaction([
            prisma.bus_master.findMany(query),
            prisma.bus_master.count(),
        ]);
        return (0, generateRes_1.generateRes)({ data, count, page, limit });
    };
    updateBusDetails = async (req) => {
        const { id, registration_no, vin_no, taxCopy_cert, registration_cert, pollution_cert, } = req.body;
        const query = {
            data: {
                pollution_doc: pollution_cert,
                registrationCert_doc: registration_cert,
                register_no: registration_no,
                taxCopy_doc: taxCopy_cert,
                vin_no: vin_no,
            },
            where: {
                id: id,
            },
        };
        const data = await prisma.bus_master.updateMany(query);
        return (0, generateRes_1.generateRes)(data);
    };
    deleteBus = async (req) => {
        const { id } = req.body;
        const data = await prisma.bus_master.delete({
            where: {
                id: id,
            },
        });
        return (0, generateRes_1.generateRes)(data);
    };
}
exports.default = BusOnboarding;
