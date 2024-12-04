import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

const reviewSchema = new Schema<TReview> (
    {
        email: {type: String, required: true}, 
        rating: { type: Number, required: true}, 
        comment: {type: String, required: true}
    }
)
const movieSchema = new Schema<TMovie>({
    title: { type: String, required: [true, "Title is required"], trim: true },
    description: { type: String, required: [true, "Description is required"], trim: true },
    releaseDate: { type: Date, required: [true, "Release date is required"] }, 
    genre: { type: String, required: [true, "Genre is required"], trim: true },
    isDeleted: { type: Boolean, required: true, default: false },
    viewCount: { type: Number, required: true, default: 0 },
    reviews: { type: [reviewSchema], default: [] }, // An array of reviews
  }, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  });

  export const Movie = model<TMovie>("Movie", movieSchema)