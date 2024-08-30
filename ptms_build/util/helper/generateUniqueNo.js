"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReceiptNumber = exports.generateUnique = void 0;
const uuid_1 = require("uuid");
const generateUnique = (initialString) => {
    const uniqueId = (0, uuid_1.v4)();
    console.log(uniqueId, "uniqueIdfucntion res=========>>");
    // Extract the first 8 characters from the UUID
    const unqId = uniqueId.substring(0, 6);
    return initialString ? initialString + unqId : unqId;
};
exports.generateUnique = generateUnique;
const generateReceiptNumber = (id) => {
    let increementNumber = 500000;
    const fixedDigits = "T00";
    increementNumber = increementNumber + Number(id);
    const receiptNumber = fixedDigits + increementNumber;
    return receiptNumber;
};
exports.generateReceiptNumber = generateReceiptNumber;
function generateUniqueId(unique) {
    const length = 8;
    const possibleDigits = "0123456789"; // All possible digits
    for (let i = 0; i < length; i++) {
        // Select a random digit from possibleDigits and append it to the id
        unique += possibleDigits.charAt(Math.floor(Math.random() * possibleDigits.length));
    }
    return unique;
}
exports.default = generateUniqueId;
