"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../../util/common");
const busConductorSchedule_services_1 = __importDefault(require("../../controller/busConductorSchedule/busConductorSchedule.services"));
class BusConductorScheduleRoute {
    constructor(app) {
        const busConductorScheduleServices = new busConductorSchedule_services_1.default();
        this.init(app, busConductorScheduleServices);
    }
    init(app, busConductorScheduleServices) {
        app
            .route(`${common_1.baseUrl}/schedule/create-new-schedule`)
            .post((req, res) => busConductorScheduleServices.createScheduleBusConductor(req, res, "041P"));
        app
            .route(`${common_1.baseUrl}/schedule/get-scheduleStatus`)
            .post((req, res) => busConductorScheduleServices.getScheduleBusConductorStatus(req, res, "041G"));
        app
            .route(`${common_1.baseUrl}/schedule/update-schedule`)
            .post((req, res) => busConductorScheduleServices.updateScheduleBusConductor(req, res, "042P"));
        app
            .route(`${common_1.baseUrl}/schedule/getAll`)
            .get((req, res) => busConductorScheduleServices.getScheduleBusConductor(req, res, "042P"));
        app
            .route(`${common_1.baseUrl}/schedule/delete`)
            .post((req, res) => busConductorScheduleServices.deleteScheduleBusConductor(req, res, "042P"));
        app
            .route(`${common_1.baseUrl}/schedule/present`)
            .post((req, res) => busConductorScheduleServices.todaySchedulesBuses(req, res, "042P"));
        app
            .route(`${common_1.baseUrl}/getScheduledConductor`)
            .post((req, res) => busConductorScheduleServices.getBusScheduleConductor(req, res, "042P"));
    }
}
exports.default = BusConductorScheduleRoute;
