/**
 * Created by yys on 2019/9/21.
 */

var getZoneTime = (offset)=> {
    // ȡ����ʱ��
    let localtime = new Date();
    // ȡ���غ�����
    let localmesc = localtime.getTime();
    // ȡ����ʱ���������������ʱ����ƫ�������
    let localOffset = localtime.getTimezoneOffset() * 60000;
    // ���Ƶõ���������ʱ��
    let utc = localOffset + localmesc;
    // �õ�ָ��ʱ��ʱ��
    let calctime = utc + (3600000 * offset);
    return new Date(calctime);
};

exports.getZoneTime = getZoneTime;

console.log(getZoneTime(-8));
