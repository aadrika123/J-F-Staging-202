"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commonResponse_1 = __importDefault(require("../../../../util/helper/commonResponse"));
const client_1 = require("@prisma/client");
const scheduleBusConductor_validator_1 = require("../../validators/scheduleBusConductor/scheduleBusConductor.validator");
const busConductorSchedule_dao_1 = __importDefault(require("../../dao/busConductorSchedule/busConductorSchedule.dao"));
const sendResponse_1 = require("../../../../util/sendResponse");
class BusConductorScheduleServices {
    prisma = new client_1.PrismaClient();
    busConductorSchedule;
    constructor() {
        this.busConductorSchedule = new busConductorSchedule_dao_1.default();
    }
    getScheduleBusConductorStatus = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const { bus_no, conductor_id, date, from_time, to_time } = req.body;
            //validation error
            const isValidated = await scheduleBusConductor_validator_1.ScheduleBusConductorValidationSchema.validate(req.body);
            const setDate = new Date(date).toISOString();
            //   const setTime = time.split(":").join(",");
            const setFromTime = Number(from_time.replace(":", "").padStart(4, "0"));
            const setToTime = Number(to_time.replace(":", "").padStart(4, "0"));
            if (!Object.keys(isValidated).length) {
                return commonResponse_1.default.VALIDATION_ERROR("Validation error", resObj, res);
            }
            //checking if schedule already exist
            const isExistingSchedule = await this.prisma.scheduler.findMany({
                where: {
                    bus_id: bus_no,
                    conductor_id,
                    date: setDate,
                    from_time: setFromTime,
                    to_time: setToTime,
                },
            });
            console.log(isExistingSchedule, "isexistingsche=============>>");
            if (isExistingSchedule.length > 0) {
                return commonResponse_1.default.SUCCESS("Schedule already exists", isExistingSchedule, resObj, res);
            }
            return commonResponse_1.default.NOT_FOUND("Schedule not found", isExistingSchedule, resObj, res);
        }
        catch (err) {
            console.log(err, "error in getting scheduled driver to bus");
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    createScheduleBusConductor = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            // ---------------------- VALIDATION --------------------------------
            const isValidated = await scheduleBusConductor_validator_1.ScheduleBusConductorValidationSchema.validate(req.body);
            if (!Object.keys(isValidated).length) {
                return commonResponse_1.default.VALIDATION_ERROR("Validation error", resObj, res);
            }
            const data = await this.busConductorSchedule.createScheduleBusConductor(req);
            console.log(data.error_type, "data");
            if (data.error_type === "VALIDATION") {
                console.log(data);
                return (0, sendResponse_1.sendResponse)(true, false, { data: data }, 200, resObj.action, resObj.apiId, resObj.version, res);
            }
            // ---------------------- VALIDATION --------------------------------
            return commonResponse_1.default.SUCCESS("Successfully Scheduled the bus and conductor", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    getScheduleBusConductor = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.busConductorSchedule.getScheduleBusConductor(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Schedule Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Successfully updated Schedule", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    updateScheduleBusConductor = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            //validation error
            console.log(true);
            const isValidated = await scheduleBusConductor_validator_1.ScheduleBusConductorValidationSchema.validate(req.body);
            if (!Object.keys(isValidated).length) {
                return commonResponse_1.default.VALIDATION_ERROR("Validation error", resObj, res);
            }
            const data = await this.busConductorSchedule.updateScheduleBusConductor(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Schedule Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Successfully updated Schedule", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    deleteScheduleBusConductor = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.busConductorSchedule.deleteScheduleBusConductor(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Schedule Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Successfully updated Schedule", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    todaySchedulesBuses = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.busConductorSchedule.todaySchedulesBuses(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Schedule Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Successfully found Schedule", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    getBusScheduleConductor = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            const data = await this.busConductorSchedule.getBusScheduleConductor(req);
            return commonResponse_1.default.SUCCESS("Successfully found Schedule", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
}
exports.default = BusConductorScheduleServices;
