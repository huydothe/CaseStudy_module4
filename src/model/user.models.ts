import mongoose, { Schema, model } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  facebook_id: string;
  google_id: string;
  role: string;
}

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
        type:String,
        required : true
    },
});

const UserModel = mongoose.model<IUser>("user", userSchema);
export { UserModel };
