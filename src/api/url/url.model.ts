import { Document, Model, Schema, model } from "mongoose";
export type UrlStatus = "Pending" | "Loading" | "On" | "Off" | "Error";
export interface Url {
  userId:Schema.Types.ObjectId;
  name: string;
  url: string;
  status: UrlStatus;
  error?: Error;
}
export interface UrlDoc extends Url, Document {}
interface UrlModel extends Model<UrlDoc> {
  buildUser(args: Url): UrlDoc;
}
const urlStatus = ["Pending","Loading", "On", "Off", "Error"];

const urlSchema: Schema<UrlDoc> = new Schema(
  {
    userId:{
      type:Schema.Types.ObjectId,
      required: [true, "userId missing!"],
      ref:"User"
    },
    name: {
      type: String,
      required: [true, "name missing!"],
      unique: true,
      trim: true,
    },
    url: {
      type: String,
      required: [true, "url address missing"],
      unique: true,
      trim: true,
    },
    status: {
      type: String,
      required: [true, "status missing"],
      enum:urlStatus,
      // enum: Object.values(Url_status),
    },
    error: Schema.Types.Mixed,
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
urlSchema.statics.buildUser = (args: Url) => {
  return new Url(args);
};
const Url = model<UrlDoc, UrlModel>("Url", urlSchema);
export default Url;
