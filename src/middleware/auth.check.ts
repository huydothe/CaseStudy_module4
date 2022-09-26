export class AuthCheck {

    checkLogin(req: any, res: any, next: any) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    }

}

