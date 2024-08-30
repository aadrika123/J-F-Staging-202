"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeFields = void 0;
const excludeFields = (arr, excludedFields) => {
    return arr.map((obj) => {
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
            if (!excludedFields.includes(key)) {
                newObj[key] = value;
            }
        }
        return newObj;
    });
};
exports.excludeFields = excludeFields;
