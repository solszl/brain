import ClassDao from "../dao/DaoClass";

var ClassModel = require("../models").class;

var classDao = new ClassDao(ClassModel);

const Create = async (ctx) => {
    let info = ctx.request.body;
    let message = {};
    console.log("创建班级，班级信息为：", info);
    let existClass = await ClassModel.findOne({ name: info.name });

    if (existClass) {
        message.status = 400;
        message.message = "班级名称已经存在，重新录入";
        ctx.body = message;
        return;
    }

    let originStaffInfo = info.staff;
    let staffInfo = {
        id: originStaffInfo._id,
        name: originStaffInfo.name
    }
    info.staff = staffInfo;
    let result = await ClassModel.create(info);;

    if (result) {
        ctx.body = { status: 200 };
    }
};
const Update = async (ctx) => {
    let info = ctx.request.body;

    let message = {};
    if (!info) {
        message.status = 400;
        message.message = "参数信息不正确";
        return;
    }

    console.log("更新班级，班级信息为：", info);
    if (info.staff) {
        let staff = { id: info.staff.id, name: info.staff.name };
        info.staff = staff;
    }
    let result = await classDao.updateClassInfo(info);

    if (result) {
        message.status = 200;
    } else {
        message.status = 400;
    }

    ctx.body = message;
};
const Delete = async (ctx) => {
    let info = ctx.request.body;
    if (!info)
        return;
    let result = await classDao.delete({ _id: `${info._id}` }, (err, data) => {
        if (err)
            console.log(err);
    })

    if (result)
        ctx.body = { status: 200 };
};
const GetClass = async (ctx) => {
    let info = ctx.request.body;
    let message = {};

    console.log(info);
    let query;
    if (info.school == "") {
        query = {};
    } else {
        query = { school: info.school };
    }

    let result = await classDao.getClassList(query);

    if (!result) {
        message.status = 400;
        message.message = "查询班级失败";
        ctx.body = message;
        return;
    }

    message.status = 200;
    message.class = result;
    ctx.body = message;
};

const GetFuzzyGroups = async ctx => {
    let message = {};
    let info = ctx.request.body;
    console.log("aaaa", info);
    if (!info) {
        message.status = 400;
        message.message = "参数错误";
        ctx.body = message;
        return;
    }

    let result = await ClassModel.find({ "name": { $regex: info.name, $options: 'i' } });

    message.status = 200;
    message.group = result ? result : [];
    ctx.body = message;
}

module.exports = {
    Create,
    Update,
    Delete,
    GetClass,
    GetFuzzyGroups
};