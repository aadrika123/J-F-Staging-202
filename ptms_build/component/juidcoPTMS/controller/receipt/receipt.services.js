"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const receipt_dao_1 = __importDefault(require("../../dao/receipt/receipt.dao"));
const commonResponse_1 = __importDefault(require("../../../../util/helper/commonResponse"));
const common_1 = require("../../../../util/common");
const receipt_validator_1 = require("../../validators/receipt/receipt.validator");
class ReceiptServices {
    receiptDao;
    initMsg;
    constructor() {
        this.receiptDao = new receipt_dao_1.default();
        this.initMsg = "Receipt";
    }
    get = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.receiptDao.get(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND((0, common_1.resMessage)(this.initMsg).NOT_FOUND, data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
    post = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        console.log(req.body.data, "body data receipt========>>");
        try {
            const setTime = req.body.data.time.replace(":", "").padStart(4, "0");
            req.body.data.receipt_no = "123445";
            // req.body.data.date = new Date();
            req.body.data.time = setTime;
            // const receipt_No =
            //   "T" +
            //   new Date(req.body.data.date).toString() +
            //   "-" +
            //   Math.random().toString(36);
            // console.log(receipt_No);
            await receipt_validator_1.receiptValidationSchema.validate(req.body.data);
            const data = await this.receiptDao.post(req);
            // if (!data) {
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
    passenger_status = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.receiptDao.passenger_status(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND((0, common_1.resMessage)(this.initMsg).NOT_FOUND, data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS((0, common_1.resMessage)(this.initMsg).FOUND, data, resObj, res);
        }
        catch (error) {
            return commonResponse_1.default.SERVER_ERROR(error, resObj, res);
        }
    };
}
exports.default = ReceiptServices;
