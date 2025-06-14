import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
    code:{
        type: String,
        required: true,
        unique: true
    },
    purchase_datetime: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true,
    },
    purchaser:{
        type: String,
        required: true
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"carts"
    }

});

export const ticketModel = new mongoose.model("tickets", TicketSchema);
