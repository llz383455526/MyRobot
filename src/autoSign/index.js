const got = require("got");
const CronJob = require("cron").CronJob;
const emailUtil = require('../util/emailUtil')
const token = "0r1p0u1huua04cqs2e9bm0egv6";
const token_xt = "4uea6qv3e5khb2ag22lq6hnmmo";
const host = "https://www.tokenworld.pro";
const signUrl = "/japi/signIn/signing/14";
const signStatUrl = "/japi/signIn/getStat/13";
/**
 * 
 * @param {string} label 标签 optional
 * @param {string} sid required
 */
function sign(label,sid) {
  got(host + signUrl + "?t=" + Date.now(), {
    headers: {
      json: true,
      sid: sid
    }
  }).then(response => {
    console.log(response.body);
    let html=label+"签到结果通知";
    if (response.body && response.body.status == 200) {
      emailUtil.sendMail("383455526@qq.com","自动签到测试成功",html)
    }else {
      emailUtil.sendMail("383455526@qq.com","自动签到测试失败",html)
    }
  });
}

const signJob = new CronJob({
  cronTime: "00 30 11 * * *",
  onTick: () => {
    sign("13143683782",token);
    sign("13242878816",token_xt);
  }
});

signJob.start();
console.log('job is running?--->'+signJob.running)