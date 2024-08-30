"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commonResponse_1 = __importDefault(require("../../../../util/helper/commonResponse"));
const report_dao_1 = __importDefault(require("../../dao/report/report.dao"));
const common_1 = require("../../../../util/common");
class ReportController {
    reportDao;
    initMsg;
    constructor() {
        this.reportDao = new report_dao_1.default();
        this.initMsg = "Report";
    }
    get = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.reportDao.generateReport(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND((0, common_1.resMessage)(this.initMsg).NOT_FOUND, data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
    getTotalAmount = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.reportDao.getTotalAmount(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND((0, common_1.resMessage)(this.initMsg).NOT_FOUND, data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
    getRealTimeCollection = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.reportDao.getRealTimeCollection();
            if (data === "null") {
                return commonResponse_1.default.NOT_FOUND((0, common_1.resMessage)(this.initMsg).NOT_FOUND, data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
    generateAllReports = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            const data = await this.reportDao.generateAllReports(req);
            if (data === "null") {
                return commonResponse_1.default.NOT_FOUND((0, common_1.resMessage)(this.initMsg).NOT_FOUND, data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
    demographicCount = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            const data = await this.reportDao.demographicCount(req);
            if (data === "null") {
                return commonResponse_1.default.NOT_FOUND((0, common_1.resMessage)(this.initMsg).NOT_FOUND, data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
    getUlbData = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            const data = await this.reportDao.getUlbData(req);
            res.json(data?.data[0]);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
    getHourlyRealtimeData = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "POST",
            version: "1.0",
        };
        try {
            const data = await this.reportDao.getHourlyRealtimeData();
            // if (data === "null") {
            //   return CommonRes.NOT_FOUND(
            //     resMessage(this.initMsg).NOT_FOUND,
            //     data,
            //     resObj,
            //     res
            //   );
            // }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
}
exports.default = ReportController;
