import mongoose from "mongoose";

const VideogalerySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    images: {
        type: [String], 
        required: true,
    },
});

const Videogalery = mongoose.model("Videogalery", VideogalerySchema);
export { Videogalery };
