const BaseCtrl=require("./base.ctrl");
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

class UserCtrl extends BaseCtrl {
    model = User;

    logIn = async (req, res, rext) => {
        try {
            if(req.body.email) {
                let user = await this.model.findOne({ "email": req.body.email });
                if(!user) return res.status(404).json({ error: "User Not Found" });
                let isMatch = await bcrypt.compare(req.body.password, user.password);
                return isMatch ? res.status(200).json(user) : res.status(400).json({ error: "Password is incorrect" })
            }
        } catch(err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = UserCtrl;