var mongoose = require("mongoose");
var crypto = require("crypto");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    gender: String,
    firstName: String,
    secondName: String,
    status: String,
    validateTime: Date,
    articleLevel: Array
}, { timestamps: true });

studentSchema.virtual("password").set(function (password) {
    console.log("Model ==> virtual method");
    this.hash_password = encryptoPassword(password);
});

function encryptoPassword(password) {
    return crypto.createHash("md5").update(password).digest("base64");
}

//http://mongoosejs.com/docs/guide.html 设置schema 的函数列表的时候， 不可以用箭头函数定义
studentSchema.static("authenticate", function (dbPassword, userPassword) {
    return encryptoPassword(userPassword) === dbPassword;
});

mongoose.model('student', studentSchema, 'student');