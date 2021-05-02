const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    },
);

export default model("Note", NoteSchema);