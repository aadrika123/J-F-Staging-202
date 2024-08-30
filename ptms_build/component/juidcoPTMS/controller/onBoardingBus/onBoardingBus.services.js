"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const commonResponse_1 = __importDefault(require("../../../../util/helper/commonResponse"));
const onboardBus_dao_1 = __importDefault(require("../../dao/onBoardBus/onboardBus.dao"));
class OnBoardingBusServices {
    initMsg;
    prisma = new client_1.PrismaClient();
    busOnboarding;
    constructor() {
        this.initMsg = "On Boarding of bus";
        this.busOnboarding = new onboardBus_dao_1.default();
    }
    onBoardingNewBus = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        const { registration_no, vin_no, taxCopy_cert, registration_cert, pollution_cert, } = req.body;
        try {
            // ---------------------------- VALIDATION --------------------------------------------//
            //validation of request body with files and json
            if (!registration_no) {
                return commonResponse_1.default.VALIDATION_ERROR("Registration Number is required", resObj, res);
            }
            if (!vin_no || vin_no == "") {
                return commonResponse_1.default.VALIDATION_ERROR("VIN Number is required", resObj, res);
            }
            if (!Object.keys(taxCopy_cert).length) {
                return commonResponse_1.default.VALIDATION_ERROR("TaxCopy document is required", resObj, res);
            }
            if (!Object.keys(registration_cert).length) {
                return commonResponse_1.default.VALIDATION_ERROR("Registration certificate document is required", resObj, res);
            }
            if (!Object.keys(pollution_cert).length) {
                return commonResponse_1.default.VALIDATION_ERROR("Pollution certificate document is required", resObj, res);
            }
            // ---------------------------- VALIDATION --------------------------------------------//
            const data = await this.busOnboarding.onBoardingNewBus(req);
            console.log(data, "data");
            if (data.error_type === "VALIDATION") {
                return res.json({
                    status: "Error",
                    message: "Vehicle Already Exist",
                });
            }
            return commonResponse_1.default.SUCCESS("Successfully added the bus", data, resObj, res);
        }
        catch (err) {
            console.log(err, "error in onboarding new bus");
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    getAllBusList = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.busOnboarding.getAllBusList(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Vehicle Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Successfully added the bus", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    updateBusDetails = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.busOnboarding.updateBusDetails(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Vehicle Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Successfully updated the bus", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    deleteBus = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.busOnboarding.deleteBus(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Vehicle Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Successfully deleted the bus", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
}
exports.default = OnBoardingBusServices;
