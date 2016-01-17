// eye blinking
TO_interval =1000;
Slider_TO =10000;

// preloader time
$(".loader").delay(2000).fadeOut("slow");
$(".loader_inner").delay(2000).fadeOut("slow");


/*
 		*************************** TEMPLATE PART *******************************
 */

$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");


	$(".animation_3").animated("fadeInRight", "fadeOutDown");
//	$(".service_item_svg").animated("fadeInLeft", "fadeOutDown");
//	$(".service_item_svg").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});



	$("input, select, textarea").jqBootstrapValidation();

	$("a[href*='#']").mPageScroll2id();

    if ( $(window).width()<1000){
        $(".Family_doc").html('<use xlink:href="img/fonts_SVG.svg#icon-GrandHoteltworow"></use>')
    }

});


/*
* ********************************* IZV part *********************************
 */

// Use one row and 2 rows(small screens) h1 of
$(window).resize(function(){
    if ( $(window).width()<1000){
        $(".Family_doc").html('<use xlink:href="img/fonts_SVG.svg#icon-GrandHoteltworow"></use>')
        }
    else{
        $(".Family_doc").html('<use xlink:href="img/fonts_SVG.svg#icon-GrandHotel"></use>')
    }
    }

)
/*$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(600).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); */


/*
			Dog's eye claping
 */
function  OpenEye(){
	if ($('#eye').css("opacity")=='0'){

		$('#eye').css("opacity",1)
		 TO_interval=500
		clearInterval(timeoutHandle);
		timeoutHandle = setInterval(OpenEye, TO_interval);

			}
	else{
		$('#eye').css("opacity",0)
		TO_interval=2000
		clearInterval(timeoutHandle);
		timeoutHandle = setInterval(OpenEye, TO_interval);

	}

}
timeoutHandle = setInterval(OpenEye, TO_interval);




$(".service_item_svg").click(function() {
	target_id = "#svg_" + (event.currentTarget.id);
	$(".col-md-3 a").mPageScroll2id({
		onComplete: function () {

			$(target_id).addClass("flashit");
			$(target_id).removeClass("animated");

			$(target_id).bind('oanimationend animationend webkitAnimationEnd', function() {


				$(target_id).removeClass("flashit")
				//$(target_id).addClass("animated");

			});
		}


	})
})

if (window.innerWidth >768){
	$(".serv_link").attr("href","#dog_nice")

	//$(".main_head.main_color_bg").attr(".data-image-src", "img/firstpage_background_hd.jpg");
}
else{$(".serv_link").attr("href","#services")
	//$(".main_head.main_color_bg").attr(".data-image-src", "img/firstpage_background.jpg")
	}

$(window).resize(function(){
	if (window.innerWidth >768){
		$(".serv_link").attr("href","#dog_nice")
	}
	else{$(".serv_link").attr("href","#services")}
});

//set color and remove cover of svg img
//$(".A_left").animated("fadeInLeft", "fadeOutDown");
$(".container.allservices").animated("fadeInUp", "fadeOutDown");
//$(".A_rigth").animated("fadeInRight", "fadeOutDown");
//rigth appear when scroll
$("#doctor").animated("fadeInRight", "fadeOutDown");
$(".dog_svg").animated("fadeInDownBig", "fadeOutDown");
//$(".icon").animated("fadeInRight","fadeOutDown");


var items = ["img/firstpage_background_hd.jpg", "img/1.jpg","img/2.jpg", "img/3.jpg",
	 "img/4.jpg","img/5.jpg","img/6.jpg"]


var currentIndex = 0, itemAmt = items.length, prevIndex =0;

var autoSlide = setInterval(function() {
	currentIndex += 1;
	if (currentIndex > itemAmt - 1) {
		currentIndex = 0;
		prevIndex=itemAmt-1;
	}

	// $(items[prevIndex]).css("opacity", "0")
	// $(items[currentIndex]).css("opacity", "1")
	$(".parallax-mirror img").fadeOut("slow", function(){$(".parallax-mirror img").attr("src",items[currentIndex])})

	$(".parallax-mirror img").fadeIn("slow")

	prevIndex = currentIndex;
}, Slider_TO);


