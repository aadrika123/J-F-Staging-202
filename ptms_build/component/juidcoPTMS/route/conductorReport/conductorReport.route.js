"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../../util/common");
const conductorReport_services_1 = __importDefault(require("../../controller/reportGeneration/conductorReport.services"));
class ConductorReportRoute {
    constructor(app) {
        const conductorGenerateReportServices = new conductorReport_services_1.default();
        this.init(app, conductorGenerateReportServices);
    }
    init(app, conductorGenerateReportServices) {
        app
            .route(`${common_1.baseUrl}/report/conductor-daywise`)
            .post((req, res) => conductorGenerateReportServices.getDayCollection(req, res, "051P"));
        app
            .route(`${common_1.baseUrl}/report/conductor-monthwise`)
            .post((req, res) => conductorGenerateReportServices.getMonthlyCollection(req, res, "051G"));
    }
}
exports.default = ConductorReportRoute;
