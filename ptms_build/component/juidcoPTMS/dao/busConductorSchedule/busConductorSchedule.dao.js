"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const generateRes_1 = require("../../../../util/generateRes");
const prisma = new client_1.PrismaClient();
class BusConductorScheduleDao {
    createScheduleBusConductor = async (req) => {
        const { bus_no, conductor_id, date, from_time, to_time, is_scheduled } = req.body;
        const setDate = new Date(date).toISOString();
        const setFromTime = Number(from_time.replace(":", "").padStart(4, "0"));
        const setToTime = Number(to_time.replace(":", "").padStart(4, "0"));
        try {
            const isExistingSchedule = await prisma.$queryRawUnsafe(`
    select * from scheduler where
    not ((${setFromTime} <= from_time and ${setToTime} <= from_time)
    or  (${setFromTime} >= to_time and ${setToTime} >= to_time)) 
    and bus_id = '${bus_no}' or conductor_id = '${conductor_id}'
    `);
            if (isExistingSchedule) {
                return (0, generateRes_1.generateRes)({
                    error_type: "VALIDATION",
                    id: isExistingSchedule[0].id,
                    validation_error: "Already Exist",
                });
            }
        }
        catch (err) {
            console.log(err);
        }
        const createNewSchedule = await prisma.scheduler.create({
            data: {
                bus_id: bus_no,
                conductor_id: conductor_id,
                date: setDate,
                from_time: setFromTime,
                to_time: setToTime,
            },
        });
        if (createNewSchedule && is_scheduled) {
            await prisma.bus_master.update({
                data: {
                    status: is_scheduled,
                },
                where: {
                    register_no: bus_no,
                },
            });
        }
        return (0, generateRes_1.generateRes)(createNewSchedule);
    };
    getScheduleBusConductor = async (req) => {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        const search = String(req.query.search);
        const bus_no = String(req.query.bus_no);
        const conductor_id = String(req.query.conductor_id);
        const conductor_name = String(req.query.conductor_name);
        const from_date = String(req.query.from_date);
        const to_date = String(req.query.to_date);
        const query = {
            skip: (page - 1) * limit,
            take: limit,
            select: {
                id: true,
                date: true,
                from_time: true,
                to_time: true,
                bus: {
                    select: {
                        id: true,
                        register_no: true,
                        vin_no: true,
                    },
                },
                conductor: {
                    select: {
                        first_name: true,
                        middle_name: true,
                        last_name: true,
                        age: true,
                        blood_grp: true,
                        mobile_no: true,
                        emergency_mob_no: true,
                        email_id: true,
                        cunique_id: true,
                        adhar_no: true,
                    },
                },
            },
        };
        if (search !== "" && typeof search === "string" && search !== "undefined") {
            query.where = {
                OR: [
                    {
                        bus: {
                            register_no: { contains: search, mode: "insensitive" },
                        },
                    },
                    {
                        bus: {
                            vin_no: { contains: search, mode: "insensitive" },
                        },
                    },
                ],
            };
        }
        if (bus_no !== "" && typeof bus_no === "string" && bus_no !== "undefined") {
            query.where = {
                OR: [
                    {
                        bus: {
                            register_no: { equals: bus_no, mode: "insensitive" },
                        },
                    },
                ],
            };
        }
        if (bus_no !== "" &&
            typeof bus_no === "string" &&
            bus_no !== "undefined" &&
            from_date !== "" &&
            typeof from_date === "string" &&
            from_date !== "undefined" &&
            to_date !== "" &&
            typeof to_date === "string" &&
            to_date !== "undefined") {
            query.where = {
                OR: [
                    {
                        bus: {
                            register_no: { equals: bus_no, mode: "insensitive" },
                        },
                        date: {
                            gte: new Date(from_date),
                            lte: new Date(to_date),
                        },
                    },
                ],
            };
        }
        if (conductor_id !== "" &&
            typeof bus_no === "string" &&
            conductor_id !== "undefined") {
            query.where = {
                OR: [
                    {
                        conductor: {
                            cunique_id: { equals: conductor_id, mode: "insensitive" },
                        },
                    },
                ],
            };
        }
        if (conductor_name !== "" &&
            typeof conductor_name === "string" &&
            conductor_name !== "undefined") {
            query.where = {
                OR: [
                    {
                        conductor: {
                            first_name: { equals: conductor_name, mode: "insensitive" },
                        },
                    },
                ],
            };
        }
        const [data, count] = await prisma.$transaction([
            prisma.scheduler.findMany(query),
            prisma.scheduler.count({ where: query.where }),
        ]);
        return (0, generateRes_1.generateRes)({ data, count, page, limit });
    };
    updateScheduleBusConductor = async (req) => {
        const { id, bus_no, conductor_id, date, from_time, to_time, is_scheduled } = req.body;
        const setDate = new Date(date).toISOString();
        const setFromTime = Number(from_time.replace(":", "").padStart(4, "0"));
        const setToTime = Number(to_time.replace(":", "").padStart(4, "0"));
        console.log(id, conductor_id, bus_no, "ll");
        const query = {
            data: {
                bus_id: bus_no,
                conductor_id: conductor_id,
                date: setDate,
                from_time: setFromTime,
                to_time: setToTime,
            },
            where: {
                id: parseInt(id),
            },
        };
        const data = await prisma.scheduler.update(query);
        if (data && is_scheduled) {
            await prisma.bus_master.update({
                data: {
                    status: is_scheduled,
                },
                where: {
                    register_no: bus_no,
                },
            });
        }
        return (0, generateRes_1.generateRes)(data);
    };
    deleteScheduleBusConductor = async (req) => {
        const id = Number(req.body.id);
        const data = await prisma.scheduler.delete({
            where: {
                id: id,
            },
        });
        return (0, generateRes_1.generateRes)(data);
    };
    todaySchedulesBuses = async (req) => {
        const curr_date = String(req.body.curr_date);
        const data = await prisma.$queryRawUnsafe(`
      SELECT 
        COUNT(DISTINCT sche.bus_id)::INT AS scheduled_buses,
        COUNT(DISTINCT bm.register_no)::INT - COUNT(DISTINCT sche.bus_id)::INT AS absent_buses
      FROM bus_master AS bm
      LEFT JOIN scheduler AS sche ON bm.register_no = sche.bus_id AND sche.date = '${curr_date}';
    `);
        return (0, generateRes_1.generateRes)(data);
    };
    getBusScheduleConductor = async (req) => {
        const { conductor_id, date, from_time, to_time } = req.body;
        const query = `
	    select conductor_id, bus_id, created_at, updated_at, from_time, to_time from scheduler
    	where conductor_id = '${conductor_id}' AND date = '${date}' and from_time <= '${from_time}' and '${to_time}' <= to_time;
    `;
        const data = await prisma.$queryRawUnsafe(query);
        console.log(data);
        return (0, generateRes_1.generateRes)(data);
    };
}
exports.default = BusConductorScheduleDao;
