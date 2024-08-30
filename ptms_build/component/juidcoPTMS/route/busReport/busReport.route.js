"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../../util/common");
// import BusGenerateReportServices from "../../controller/reportGeneration/busReport.services";
const report_controller_1 = __importDefault(require("../../controller/report/report.controller"));
class BusReportRoute {
    constructor(app) {
        // const busGenerateReportServices = new BusGenerateReportServices();
        const reportController = new report_controller_1.default();
        // this.init(app, busGenerateReportServices);
        this.init(app, reportController);
    }
    init(app, 
    // busGenerateReportServices: BusGenerateReportServices
    reportGeneration) {
        app
            .route(`${common_1.baseUrl}/report/bus-daywise`)
            .post((req, res) => reportGeneration.get(req, res, "0501"));
        app
            .route(`${common_1.baseUrl}/report/bus-daywise/total`)
            .post((req, res) => reportGeneration.getTotalAmount(req, res, "0502"));
        app
            .route(`${common_1.baseUrl}/report/real-time`)
            .get((req, res) => reportGeneration.getRealTimeCollection(req, res, "0503"));
        app
            .route(`${common_1.baseUrl}/report/all`)
            .post((req, res) => reportGeneration.generateAllReports(req, res, "0504"));
        app
            .route(`${common_1.baseUrl}/report/demographic`)
            .post((req, res) => reportGeneration.demographicCount(req, res, "0505"));
        app
            .route(`${common_1.baseUrl}/report/get-ulb`)
            .get((req, res) => reportGeneration.getUlbData(req, res, "0506"));
        app
            .route(`${common_1.baseUrl}/report/hourly-real-time`)
            .get((req, res) => reportGeneration.getHourlyRealtimeData(req, res, "0507"));
    }
}
exports.default = BusReportRoute;
