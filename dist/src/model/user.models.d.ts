import mongoose from "mongoose";
import { IUser } from "../interface/IUser";
declare const UserModel: mongoose.Model<IUser, {}, {}, {}, any>;
export { UserModel };
