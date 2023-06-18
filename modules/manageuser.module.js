
const { Schema, model } = require("mongoose")

const manageSchema = new Schema({
    name: String,
    email: String,
    contact: String,
    check: String





})

const manageschema = model("managedata", manageSchema)

module.exports = { manageschema }