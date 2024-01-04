import mongoose from "mongoose";

const storySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Use an array to store multiple image URLs
        required: true,
    },
});

const Story = mongoose.model("Story", storySchema);
export { Story };
