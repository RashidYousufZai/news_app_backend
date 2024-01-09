import mongoose from "mongoose";

const PhotoGalerySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    images: {
        type: [String], 
        required: true,
    },
});

const PhotogalerySchemas = mongoose.model("Photogalery", PhotoGalerySchema);
export { PhotogalerySchemas };
