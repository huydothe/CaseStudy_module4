import passport from "passport";
import crypto from 'crypto';
import { Strategy as LocalStrategy } from 'passport-local';
import {UserModel} from "../model/user.models";

passport.serializeUser(function(user:any, cb) {
    process.nextTick(function() {
        cb(null, { id: user._id, username: user.username });
    });
});

passport.deserializeUser(function(user : any, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

passport.use(new LocalStrategy(async function verify(username : any, password : any, cb : any){
    console.log('check')
    let userLogin = await UserModel.findOne({
        username : username,
        password : password
    });

    if(!userLogin){
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    return cb(null, userLogin);

}));

export default passport

