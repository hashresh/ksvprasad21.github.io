$( document ).ready(function() {

	
    $("ul a").click(function() {

        $("ul a").removeClass('current');
        $("ul #firstnav").removeClass('current');
        $(this).addClass('current');
    });
});

