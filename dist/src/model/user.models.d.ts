import mongoose from "mongoose";
interface IUser {
    username: string;
    email: string;
    password: string;
    facebook_id: string;
    google_id: string;
    role: string;
}
declare const UserModel: mongoose.Model<IUser, {}, {}, {}, any>;
export { UserModel };
