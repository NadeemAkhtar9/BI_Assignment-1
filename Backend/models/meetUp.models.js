const mongoose = require("mongoose");

const meetUpSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String, 
        required: true,
    },
    typeOfEvent: {
        type: String,
        enum: ["Online", "Offline"],
        required: true,
    },
    tags: { 
        type: [String], 
        default: [],
    },
    imageUrl: {
        type: String,
        default: "https://placehold.co/200",
    },
}, { timestamps: true });

const MeetUp = mongoose.model("MeetUp", meetUpSchema);
module.exports = MeetUp;
