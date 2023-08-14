import { Document, Model, Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserDoc extends IUser, Document {}
interface IUserModel extends Model<IUserDoc> {
  buildUser(args: IUser): IUserDoc;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name missing !!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email missing !!"],
      unique:true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password missing !!"],
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: false,
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
UserSchema.statics.buildUser = (args: IUser) => {
  return new User(args);
};
const User = model<IUserDoc, IUserModel>("User", UserSchema);
export default User;
