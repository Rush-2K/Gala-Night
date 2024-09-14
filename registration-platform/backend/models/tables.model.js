const mongoose = require('mongoose');

const TableSelectionSchema = mongoose.Schema(
    {
        table_no: {
            type: Number,
        },
        quantity: {
            type: Number, 
            required: true,
        },
        check: {
            type: Boolean,
            required: true
        }
    }
)

const Tables = mongoose.model("Table",TableSelectionSchema)

module.exports = Tables;