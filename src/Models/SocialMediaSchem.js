import mongoose from "mongoose";

const SocialMediaSchem = mongoose.Schema(
  {
    link: {
      type: String,
      required: false,
    },
    platform: {
        type: String,
        required: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchem);
export { SocialMedia };
