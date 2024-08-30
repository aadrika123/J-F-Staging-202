"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const commonResponse_1 = __importDefault(require("../../../../util/helper/commonResponse"));
const conductorReportValidator_1 = require("../../validators/conductorReportGen/conductorReportValidator");
class BusGenerateReportServices {
    prisma = new client_1.PrismaClient();
    constructor() { }
    getDayCollection = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            const { currentDate, bus_id } = req.body;
            //validation
            await conductorReportValidator_1.ConductorReportValidationSchema.validate(req.body);
            const setDate = new Date(currentDate);
            // const dailyCollectionReport = await this.prisma.$queryRaw<any[]>`
            // SELECT bus_id, SUM(amount)::INTEGER AS "Total Amount"
            // FROM receipts
            // WHERE conductor_id = ${intConductorId} and date::date = ${setDate}::date
            // GROUP BY bus_id
            // left join scheduler
            // WHERE conductor_id = ${intConductorId} and date::date = ${setDate}::date
            // `;
            const dailyCollectionReport = await this.prisma.$queryRaw `
      select rr.bus_id, rr.total_amount, ss.from_time, ss.to_time from (
      (SELECT r.bus_id, SUM(r.amount)::INTEGER AS "total_amount"
      FROM receipts r 
      WHERE r.bus_id = ${bus_id}
      AND r.date::date = ${setDate}::date
      GROUP BY r.bus_id) rr
      
      left join 
      
      (select * from scheduler s
      where s.date::date = ${setDate}::date and s.bus_id = ${bus_id}) ss 
      
      on rr.bus_id = ss.bus_id);
     `;
            console.log(bus_id);
            console.log(dailyCollectionReport, "dailyCollectionReport=========>>");
            // const dailyCollectionReportss = await this.prisma.$queryRaw`
            // SELECT from_time to_time
            // FROM scheduler
            // WHERE conductor_id = ${intConductorId} and date::date = ${setDate}::date and bus_id= ${dailyCollectionReport.bus_id}
            // GROUP BY from_time to_time;
            // `;
            // checking if conductor already exist
            // const getDailyReport = await this.prisma.receipts.aggregate({
            //   where: { conductor_id: intConductorId, date: setDate },
            //   _sum: {
            //     amount: true,
            //   },
            // });
            // const getDailyData = await this.prisma.receipts.findMany({
            //   where: { conductor_id: intConductorId, date: setDate },
            // });
            // const newData = {
            //   total_amount: getDailyReport._sum.amount,
            //   data: getDailyData,
            // };
            // console.log(getDailyReport, "getDailyReport==========>>>");
            return commonResponse_1.default.SUCCESS("Daily collection generated successfully", dailyCollectionReport, resObj, res);
        }
        catch (err) {
            console.log(err, "error in generating daily collection");
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    getMonthlyCollection = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            const { time, bus_id } = req.body;
            //validation
            await conductorReportValidator_1.ConductorReportMonthlyValidationSchema.validate(req.body);
            const onlyMonth = time.split("-")[1];
            const onlyYear = time.split("-")[0];
            if (!onlyMonth || !onlyYear)
                return commonResponse_1.default.VALIDATION_ERROR("month and year not found", resObj, res);
            const query = await this.prisma.$queryRaw `SELECT *
        from 
        receipts
        where bus_id = ${bus_id} and EXTRACT(MONTH FROM date) = ${Number(onlyMonth)} and EXTRACT(YEAR FROM date) = ${Number(onlyYear)}
        `;
            console.log("first", query);
            const totalAmount = query.reduce((total, item) => total + item.amount, 0);
            const newRes = { data: query, totalAmount };
            return commonResponse_1.default.SUCCESS("Monthly collection generated successfully", newRes, resObj, res);
        }
        catch (err) {
            console.log(err, "error in generating monthly collection");
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
}
exports.default = BusGenerateReportServices;
