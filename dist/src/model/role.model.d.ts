import mongoose from "mongoose";
declare const Role: mongoose.Model<{
    name?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
}>>;
export default Role;
