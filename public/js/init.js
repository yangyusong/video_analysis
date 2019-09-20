/**
 * Created by yys on 2019/9/21.
 */

$(function(){
    $.get("partial/video.html", function(content){
        $(".rili_video").html(content);
    });

    $.get("partial/motion_analysis.html", function(content){
        $(".motion_analysis").html(content);
    });

    $.get("partial/analysis_result.html", function(content){
        $(".analysis_result").html(content);
    });

    $.get("partial/rili_tag.html", function(content){
        $(".rili_tag").html(content);
    });

    client.get(client.devHost + "user", {}, function(result){
        console.log(result);
    });

});


