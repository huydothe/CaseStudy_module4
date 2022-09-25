import mongoose, { Schema, model } from "mongoose";
import {IUser} from "../interface/IUser";

const userSchema = new Schema<IUser>({
    username: {
        type:String,
        unique : true,
        required : true
    },
    email: String,
    password: {
        type:String,
        required : true
    },
    facebook_id: String,
    google_id: String,
    role: {
        type : Schema.Types.ObjectId,
        ref : 'Role'
    },
});

const UserModel = mongoose.model<IUser>("user", userSchema);
export { UserModel };
