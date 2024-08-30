"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../../util/common");
const onBoardingBus_services_1 = __importDefault(require("../../controller/onBoardingBus/onBoardingBus.services"));
class OnBoardingBusRoute {
    constructor(app) {
        const onBoardingBusServices = new onBoardingBus_services_1.default();
        this.init(app, onBoardingBusServices);
    }
    init(app, onBoardingBusServices) {
        app
            .route(`${common_1.baseUrl}/onBoardingBus`)
            .post((req, res) => onBoardingBusServices.onBoardingNewBus(req, res, "0201"));
        app
            .route(`${common_1.baseUrl}/getAllBusList`)
            .get((req, res) => onBoardingBusServices.getAllBusList(req, res, "0202"));
        app
            .route(`${common_1.baseUrl}/bus/update`)
            .post((req, res) => onBoardingBusServices.updateBusDetails(req, res, "0203"));
        app
            .route(`${common_1.baseUrl}/bus/delete`)
            .post((req, res) => onBoardingBusServices.deleteBus(req, res, "0204"));
    }
}
exports.default = OnBoardingBusRoute;
