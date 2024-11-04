import { model, Schema } from 'mongoose';

const linkSchema = new Schema(
  {
    orignal: {
      type: String,
      required: true,
      unique: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    expirationDate: {
      type: Date,
      default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  },
  { timestamps: true },
);

const linkModel = model('Link', linkSchema);
export default linkModel;
