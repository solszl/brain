var DaoBase = require("./DaoBase");
var StaffModel = require("../models").staff;
var UserModel = require("../models").user;
var util = require("util");

var staff;
var StaffDao = function(staff) {
    this.staff = staff || {};
    DaoBase.call(this, this.staff);
}

util.inherits(StaffDao, DaoBase);

StaffDao.prototype.addStaff = async (userinfo, callback) => {
    if (!userinfo)
        return callback({ err: 'err parameter' });

    let staff = new StaffModel({
        name: userinfo.username,
        mail: userinfo.mail,
        status: userinfo.status,
        group: userinfo.group,
        phone: userinfo.phone,
        school: userinfo.school
    });

    let staffResult = await StaffModel.create(staff);
    var user;
    if (staffResult) {
        let uid = staffResult._id;
        user = new UserModel({
            username: userinfo.username,
            password: userinfo.password,
            status: userinfo.status,
            role: userinfo.role,
            phone: userinfo.phone,
            mail: userinfo.mail,
            lastLoginTime: new Date().toISOString(),
            lastLoginIP: "",
            school: userinfo.school,
            uid: uid
        });
    }
    return await UserModel.create(user);
}

StaffDao.prototype.deleteStaff = async userinfo => {
    console.log(userinfo);
    let s = await StaffModel.findOne({ "name": userinfo.username });
    console.log(s);
    let uid = s._id;

    await StaffModel.deleteOne({ "name": userinfo.username });

    return await UserModel.deleteOne({ "uid": uid });
}

module.exports = StaffDao;