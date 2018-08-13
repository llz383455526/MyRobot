const nodemailer = require("nodemailer");
const config = {
  email: {
    user: "helloJavis@163.com",
    authCode: "code321168"    //授权码
  }
};

var transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  secureConnection: true,
  port: 465,
  auth: {
    user: config.email.user,
    pass: config.email.authCode
  }
});

/**
 * @param {String} recipient 收件人,若果有多个则按分号分割
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function(recipients, subject, html) {
  var option = {
    from: config.email.user,
    to: recipients,
    subject: subject,
    html: html
  };
  transporter.sendMail(option, function(error, response) {
    console.log("email to " + recipients + "result--->" + response.message);
  });
};
module.exports = {
  sendMail
}
