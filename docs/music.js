/**
 * Created by yys on 2019/9/22.
 */

var play_yourname = false;
//��ȡ�������Ӳ�����dom��
var audio_yourname = null;
audio_yourname = document.getElementById("audio_yourname");
audio_yourname.addEventListener("canplay", function(){
    console.log("canplay");
    setTimeout(function(){
        clicks_yourname();
    }, 1000);
});

//�������/��ͣ
function clicks_yourname() {
    console.log(audio_yourname);
    if(play_yourname)
    {
        play_yourname = false;
        audio_yourname.pause();
    }
    else{
        try{
            audio_yourname.play();
            play_yourname = true;
        }catch(e){
            setTimeout(function(){
                clicks_yourname();
            }, 1000);
        }
    }
}
