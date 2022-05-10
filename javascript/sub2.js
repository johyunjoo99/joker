$(function () {
    $("img[src$='img/sub2/thum1.jpg']").hover(function () {
        $("#show1").show();
        $("#show2").hide();
        $("#show3").hide();
        $("#show4").hide();
        $("#show5").hide();
        $("#show7").hide();
    });
    $("img[src$='img/sub2/thum2.jpg']").hover(function () {
        $("#show1").hide();
        $("#show2").show();
        $("#show3").hide();
        $("#show4").hide();
        $("#show5").hide();
        $("#show7").hide();
    });
    $("img[src$='img/sub2/thum3.jpg']").hover(function () {
        $("#show1").hide();
        $("#show2").hide();
        $("#show3").show();
        $("#show4").hide();
        $("#show5").hide();
        $("#show7").hide();
    });
    $("img[src$='img/sub2/thum4.jpg']").hover(function () {
        $("#show1").hide();
        $("#show2").hide();
        $("#show3").hide();
        $("#show4").show();
        $("#show5").hide();
        $("#show7").hide();
    });
    $("img[src$='img/sub2/thum5.jpg']").hover(function () {
        $("#show1").hide();
        $("#show2").hide();
        $("#show3").hide();
        $("#show4").hide();
        $("#show5").show();
        $("#show7").hide();
    });
    $("img[src$='img/sub2/thum7.jpg']").hover(function () {
        $("#show1").hide();
        $("#show2").hide();
        $("#show3").hide();
        $("#show4").hide();
        $("#show5").hide();
        $("#show7").show();
    });
});

$(document).ready(function(){
    $('.title').each(function(){
        var txt = $(this).find('.tp');
        var ttxt = txt.text();
        var thtml = txt.html();
        var stxt = ttxt.substring(0,75)+"...";
        var btn = $('<a href="javascript:void(0)" class="more">[더보기]</a>');
        
        $(this).append(btn);
        
        if(ttxt.length >= 75){
            txt.html(stxt)
        }else{
            btn.hide()
        }
        
        btn.click(toggle_content);
        function toggle_content(){
            if($(this).hasClass('sh')){
                $(this).html('[더보기]');
                txt.html(stxt)
                $(this).removeClass('sh');
            }else{
                $(this).html('[접기]');
                txt.html(thtml);
                $(this).addClass('sh');
            }
        }
    });
});

$(document).ready(function(){
    $('.title2').each(function(){
        var txt = $(this).find('.tp2');
        var ttxt = txt.text();
        var thtml = txt.html();
        var stxt = ttxt.substring(0,48)+"...";
        var btn = $('<a href="javascript:void(0)" class="more2">[더보기]</a>');
        
        $(this).append(btn);
        
        if(ttxt.length >= 48){
            txt.html(stxt)
        }else{
            btn.hide()
        }
        
        btn.click(toggle_content);
        function toggle_content(){
            if($(this).hasClass('sh')){
                $(this).html('[더보기]');
                txt.html(stxt)
                $(this).removeClass('sh');
            }else{
                $(this).html('[접기]');
                txt.html(thtml);
                $(this).addClass('sh');
            }
        }
    });
});

function draw(target) {
    document.querySelector(`.st span`).style.width = `${target.value * 10}%`;
};