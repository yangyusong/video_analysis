/**
 * Created by yys on 2019/9/21.
 */

$(function(){
    $(window).on('load', function() {
        var preLoder = $(".loader-wrapper");
        preLoder.delay(700).fadeOut(500);
        $('body').addClass('loaded');
    });

    $.get("partial/video.html", function(content){
        $(".rili_video").html(content);
    });

    $.get("partial/motion_analysis.html", function(content){
        $(".motion_analysis").html(content);
    });

    $.get("partial/analysis_result.html", function(content){
        $(".analysis_result").html(content);
    });

    $('#collapse_tags').on('show.zui.collapse', function () {
        $.get("partial/rili_tag.html", function(content){
            $(".rili_tag").html(content);
        });
    });

    $('#collapse_safe').on('show.zui.collapse', function () {
        $.get("partial/safe.html", function(content){
            $("#collapse_safe").html(content);
        });
    });

    $.get("partial/safe.html", function(content){
        $("#collapse_safe").html(content);
    });

    //$('#collapse_atm').on('show.zui.collapse', function () {
    //    $.get("partial/atm.html", function(content){
    //        $("#collapse_atm").html(content);
    //    });
    //});

    //$.get("partial/rili_tag.html", function(content){
    //    $(".rili_tag").html(content);
    //});

    function showResult(){
        showAny("collapse_result");
    }

    function hideResult(){
        hideAny("collapse_result");
    }

    function showAtm(){
        showAny("collapse_atm");
    }

    function hideAtm(){
        hideAny("collapse_atm");
    }

    function showTags(){
        showAny("collapse_tags");
    }

    function hideTags(){
        hideAny("collapse_tags");
    }

    function showAny(id){
        $("#" + id).collapse('show');
    }

    function hideAny(id){
        $("#" + id).collapse('hide');
    }

    window.showAny = showAny;
    showAny("collapse_tags");
    showAny("collapse_atm");
    showAny("collapse_result");
    setTimeout(function(){
        showAny("collapse_result");
    }, 1000);
    showAny("collapse_safe");

    //$('#accordion_left').collapse({
    //    toggle: true
    //});
    //
    //$('#accordionPanels').collapse({
    //    toggle: true
    //});
    //client.get(client.devHost + "user", {}, function(result){
    //    console.log(result);
    //});

    //var $particles_js = $('#banner_bg_effect');
    //if ($particles_js.length > 0) {
    //    particlesJS('banner_bg_effect',
    //        // Update your personal code.
    //        {
    //            "particles": {
    //                "number": {
    //                    "value": 80,
    //                    "density": {
    //                        "enable": true,
    //                        "value_area": 800
    //                    }
    //                },
    //                "color": {
    //                    "value": "#ffffff"
    //                },
    //                "shape": {
    //                    "type": "circle",
    //                    "stroke": {
    //                        "width": 0,
    //                        "color": "#ffffff"
    //                    },
    //                    "polygon": {
    //                        "nb_sides": 5
    //                    },
    //                    "image": {
    //                        "src": "img/github.svg",
    //                        "width": 100,
    //                        "height": 100
    //                    }
    //                },
    //                "opacity": {
    //                    "value": 0.4,
    //                    "random": false,
    //                    "anim": {
    //                        "enable": false,
    //                        "speed": 1,
    //                        "opacity_min": 0.5,
    //                        "sync": false
    //                    }
    //                },
    //                "size": {
    //                    "value": 3,
    //                    "random": true,
    //                    "anim": {
    //                        "enable": false,
    //                        "speed": 20,
    //                        "size_min": 0.2,
    //                        "sync": false
    //                    }
    //                },
    //                "line_linked": {
    //                    "enable": true,
    //                    "distance": 150,
    //                    "color": "#ffffff",
    //                    "opacity": 0.20,
    //                    "width": 1
    //                },
    //                "move": {
    //                    "enable": true,
    //                    "speed": 6,
    //                    "direction": "none",
    //                    "random": false,
    //                    "straight": false,
    //                    "out_mode": "out",
    //                    "bounce": false,
    //                    "attract": {
    //                        "enable": false,
    //                        "rotateX": 600,
    //                        "rotateY": 1200
    //                    }
    //                }
    //            },
    //            "interactivity": {
    //                "detect_on": "canvas",
    //                "events": {
    //                    "onhover": {
    //                        "enable": true,
    //                        "mode": "repulse"
    //                    },
    //                    "onclick": {
    //                        "enable": true,
    //                        "mode": "push"
    //                    },
    //                    "resize": true
    //                },
    //                "modes": {
    //                    "grab": {
    //                        "distance": 400,
    //                        "line_linked": {
    //                            "opacity": 1
    //                        }
    //                    },
    //                    "bubble": {
    //                        "distance": 400,
    //                        "size": 20,
    //                        "duration": 2,
    //                        "opacity": 1,
    //                        "speed": 3
    //                    },
    //                    "repulse": {
    //                        "distance": 200,
    //                        "duration": 0.4
    //                    },
    //                    "push": {
    //                        "particles_nb": 4
    //                    },
    //                    "remove": {
    //                        "particles_nb": 2
    //                    }
    //                }
    //            },
    //            "retina_detect": true
    //        }
    //
    //    );
    //}

});


