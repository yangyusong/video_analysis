/**
 * Created by yys on 2019/9/21.
 */

var getZoneTime = (offset)=> {
    // 取本地时间
    let localtime = new Date();
    // 取本地毫秒数
    let localmesc = localtime.getTime();
    // 取本地时区与格林尼治所在时区的偏差毫秒数
    let localOffset = localtime.getTimezoneOffset() * 60000;
    // 反推得到格林尼治时间
    let utc = localOffset + localmesc;
    // 得到指定时区时间
    let calctime = utc + (3600000 * offset);
    return new Date(calctime);
};

exports.getZoneTime = getZoneTime;

console.log(getZoneTime(-8));
