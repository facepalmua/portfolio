$(document).ready(function() {

    var s = $(".stn-services").offset();
    var p = $(".stn-portfolio").offset();
    var c = $(".stn-contact").offset();
    $(window).scroll(function() {
        // 200px от верха
        if ($(window).scrollTop() < s.top) {
            $('#Home-top').addClass("active");
            $('#Services-top').removeClass("active");
        }
        if (($(window).scrollTop() >= s.top) && (($(window).scrollTop() < p.top))) {
            $('#Services-top').addClass("active");
            $('#Portfolio-top').removeClass("active");
            $('#Home-top').removeClass("active");
        }
        // 400px от верха
        if (($(window).scrollTop() >= p.top) && (($(window).scrollTop() < c.top))) {
            $('#Services-top').removeClass("active");
            $('#Portfolio-top').addClass("active");
            $('#Contact-top').removeClass("active");
        }
        // низ активного окна...
        if ($(window).scrollTop() >= c.top) {
            $('#Portfolio-top').removeClass("active");
            $('#Contact-top').addClass("active");
        }
    });

});
