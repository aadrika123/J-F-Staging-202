"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const commonResponse_1 = __importDefault(require("../../../../util/helper/commonResponse"));
const onBoardingConductor_validator_1 = require("../../validators/onBoardingConductor/onBoardingConductor.validator");
const onboardConductor_dao_1 = __importDefault(require("../../dao/onBoardConductor/onboardConductor.dao"));
class OnBoardingConductorServices {
    initMsg;
    prisma = new client_1.PrismaClient();
    constructorOnboarding;
    constructor() {
        this.initMsg = "Conductor";
        this.constructorOnboarding = new onboardConductor_dao_1.default();
    }
    onBoardingNewConductor = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const { adhar_doc, fitness_doc } = req.body;
            // ---------------------------- VALIDATION --------------------------------------------//
            //validation of request body with files and json
            const isValidated = await onBoardingConductor_validator_1.OnBoardingConductorDataValidationSchema.validate(req.body);
            if (!Object.keys(isValidated).length) {
                return commonResponse_1.default.VALIDATION_ERROR("Validation error", resObj, res);
            }
            if (!Object.keys(fitness_doc).length) {
                return commonResponse_1.default.VALIDATION_ERROR("fitness_doc is required", resObj, res);
            }
            if (!Object.keys(adhar_doc).length) {
                return commonResponse_1.default.VALIDATION_ERROR("adhar_doc is required", resObj, res);
            }
            const data = await this.constructorOnboarding.onBoardingNewConductor(req);
            if (data.error_type === "VALIDATION") {
                return commonResponse_1.default.VALIDATION_ERROR("Conductor Already Registered", resObj, res);
            }
            // ---------------------------- VALIDATION --------------------------------------------//
            return commonResponse_1.default.SUCCESS("Successfully registered the conductor", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    getAllConductorList = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.constructorOnboarding.getAllConductorList(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Conductor Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Conductors Found Successfully!", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    getConductorStatus = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.constructorOnboarding.getConductorStatus();
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Conductor Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Conductors Found Successfully!", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
    validate_aadhar = async (req, res, apiId) => {
        const resObj = {
            apiId,
            action: "GET",
            version: "1.0",
        };
        try {
            const data = await this.constructorOnboarding.validate_aadhar(req);
            if (!data) {
                return commonResponse_1.default.NOT_FOUND("Aadhar Not Found", data, resObj, res);
            }
            return commonResponse_1.default.SUCCESS("Aadhar Found Successfully!", data, resObj, res);
        }
        catch (err) {
            return commonResponse_1.default.SERVER_ERROR(err, resObj, res);
        }
    };
}
exports.default = OnBoardingConductorServices;
