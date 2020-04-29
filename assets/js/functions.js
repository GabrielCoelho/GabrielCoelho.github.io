/*
	Project Name : Majestic

	## UDF Function 
	
	
	## Document Ready
		- Set Sticky Menu
		-- Responsive Caret		
		-- Tooltip
		-- Quick Contact Form

	## Window Load
		- Site Loader
*/


(function($)
{
	"use strict" 
	
	/* -- Service  Section */
	function service() {
		var width =	$(window).width();
		var srv_img = $(".srv-img-box").height();
		var srv_content = $(".srv-content-box").height();
		var srv_content_padding = (srv_img - srv_content)/2;
		if( srv_content_padding > 0 ){
			if( width >= 768 ) {
				$(".srv-content-box").css({"padding-top": srv_content_padding, "padding-bottom": srv_content_padding});		
			} else {
				$(".srv-content-box").removeAttr("style");
			}
		} else {
			if( width >= 768 ) {
				$(".srv-content-box").css({"padding-top": "15px", "padding-bottom": "15px"});		
			} else {
				$(".srv-content-box").removeAttr("style");
			}
		}
	}
	
	/* -- Portfolio */
	function portfolio() {
		var width =	$(window).width();		
		var portfolio_list = $(".portfolio-list").height();
		var portfolio_left = $(".portfolio-left").height();
		var portfolio_content = (portfolio_list - portfolio_left)/2;
		if( portfolio_content > 0 ){
			if( width >= 768 ) {
				$(".portfolio-left").css({"padding-top": portfolio_content, "padding-bottom": portfolio_content});
			} else {
				$(".portfolio-left").removeAttr("style");
			}
		} else {
			if( width >= 768 ) {
				$(".portfolio-left").css({"padding-top": "15px", "padding-bottom": "15px"});		
			} else {
				$(".portfolio-left").removeAttr("style");
			}
		}
	}
	
	/* -- Portfolio Filter */	
	function portfolio_filter() {	
		var $container = $(".portfolio-list");
		$container.isotope({
			itemSelector: ".portfolio-box",
			gutter: 0
		});
		$('#filters a').on('click',function(){
			$('#filters a').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });		
			portfolio();
			return false;
		});
	}
	
	/* -- Features */
	function features() {
		var width =	$(window).width();
		var features_content = $(".features-detail").height();
		var features_img = $(".features-mobile").height();
		var features_img_padding = (features_content - features_img)/2;
		if( features_img_padding > 0 ){
			if( width >= 768 ) {
				$(".features-mobile").css({"padding-top": features_img_padding, "padding-bottom": features_img_padding});		
			} else {
				$(".features-mobile").removeAttr("style");
			}
		} else {
			if( width >= 768 ) {
				$(".features-mobile").css({"padding-top": "15px", "padding-bottom": "15px"});		
			} else {
				$(".features-mobile").removeAttr("style");
			}
		}
	}
	
	/* -- Why Us */
	function whyus() {
		var width =	$(window).width();
		var whyus_content = $(".why-us-details").height();
		var whyus_title = $(".section-header").height();
		var whyus_title_padding = (whyus_content - whyus_title)/2;
		if( whyus_title_padding > 0 ){
			if( width >= 768 ) {
				$(".why-us-section .section-header").css({"padding-top": whyus_title_padding, "padding-bottom": whyus_title_padding});		
			} else {
				$(".why-us-section .section-header").removeAttr("style");
			}
		} else {
			if( width >= 768 ) {
				$(".why-us-section .section-header").css({"padding-top": "15px", "padding-bottom": "15px"});		
			} else {
				$(".why-us-section .section-header").removeAttr("style");
			}
		}
		
		if( width < 768 ) {
			if($('html[dir="rtl"]').length) {
				$(".why-us-details").owlCarousel({
					autoplay: true,
					loop: true,
					dots: false,
					nav: true,
					rtl: true,
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						481:{
							items:2
						},					
					},
					margin: 0,
					stagePadding: 0,
					smartSpeed: 450
				});
			} else {
				$(".why-us-details").owlCarousel({
					autoplay: true,
					loop: true,
					dots: false,
					nav: true,
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						481:{
							items:2
						},					
					},
					margin: 0,
					stagePadding: 0,
					smartSpeed: 450
				});
			}
		} else {
			
			$('.why-us-details').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('.why-us-details').find('.owl-stage-outer').children().unwrap();
		}
	}
	
	/* -- Team */
	function team() {
		var width = $(window).width();
		var team_content = $(".team-content").height();
		var team_title = $(".team-left").height();
		var team_title_padding = (team_content - team_title)/2;
		if( team_title_padding > 0 ){
			if( width >= 768 ) {
				$(".team-left").css({"padding-top": team_title_padding, "padding-bottom": team_title_padding});		
			} else {
				$(".team-left").removeAttr("style");
			}
		} else {
			if( width >= 768 ) {
				$(".team-left").css({"padding-top": "15px", "padding-bottom": "15px"});		
			} else {
				$(".team-left").removeAttr("style");
			}
		}
	}
	
	/* -- Application Section */
	function application() {
		var width = $(window).width();
		var app_mobile = $(".app-content-mobile").height();
		if( width >= 992 ){
			$(".app-content-mobile").removeAttr("style");
			var app_content = $(".application-section").height();
			var app_mobile_margin = (app_content - app_mobile)/2;
			if( app_mobile_margin > 0 ) {
				$(".app-content-mobile").css({"margin-top": app_mobile_margin,"margin-bottom": app_mobile_margin});		
			} else {
				$(".app-content-mobile").css({"margin-top": "100px"});
			}
		} else if( width > 767 && width <= 991 ) {
			var app_content_row = $(".application-section .row").height();
			var app_mobile_row_margin = (app_content_row - app_mobile)/2;
			$(".app-content-mobile").removeAttr("style");			
			if( app_mobile_row_margin > 0 ) {
				$(".app-content-mobile").css({"margin-top": app_mobile_row_margin,"margin-bottom": app_mobile_row_margin});		
			} else {
				$(".app-content-mobile").css({"margin-top": "100px"});
			}
		} else {
			$(".app-content-mobile").removeAttr("style");
		} 
	}
	
	/* -- Blog */
	function blog() {
		var width = $(window).width();
		var blog_content = $(".blog-right").height();
		var blog_title = $(".blog-left").height();
		var blog_title_padding = (blog_content - blog_title)/2;
		if( blog_title_padding > 0 ){
			if( width >= 768 ) {
				$(".blog-left").css({"padding-top": blog_title_padding, "padding-bottom": blog_title_padding});		
			} else {
				$(".blog-left").removeAttr("style");
			}
		} else {
			if( width >= 768 ) {
				$(".blog-left").css({"padding-top": "15px", "padding-bottom": "15px"});		
			} else {
				$(".blog-left").removeAttr("style");
			}
		}
		
		if( width < 768 ) {
			if($('html[dir="rtl"]').length) {
				$(".blog-right").owlCarousel({
					autoplay: false,
					loop: true,
					dots: false,
					nav: true,
					rtl: true,
					responsive:{
						0:{
							items:1
						},
						540:{
							items:2
						}
					},
					margin: 0,
					stagePadding: 0,
					smartSpeed: 450
				});
			} else {
				$(".blog-right").owlCarousel({
					autoplay: false,
					loop: true,
					dots: false,
					nav: true,
					responsive:{
						0:{
							items:1
						},
						540:{
							items:2
						}
					},
					margin: 0,
					stagePadding: 0,
					smartSpeed: 450
				});
			}
		} else {
			
			$(".blog-right").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$(".blog-right").find('.owl-stage-outer').children().unwrap();
		}
	}
		
	/* -- Process	*/
	function process() {
		var width = $(window).width();
		var process_image = $(".process-images").height();
		var procss_detail = $(".process-detail-box").height();
		var procss_detail_padding = (process_image - procss_detail)/2;
		if( procss_detail_padding > 0 ){
			if( width >= 768 ) {
				$(".process-detail-box").css({"padding-top": procss_detail_padding, "padding-bottom": procss_detail_padding});		
			} else {
				$(".process-detail-box").removeAttr("style");
			}
		} else {
			if( width >= 768 ) {
				$(".process-detail-box").css({"padding-top": "15px", "padding-bottom": "15px"});		
			} else {
				$(".process-detail-box").removeAttr("style");
			}
		}
	}
	
	/* -- Video */
	function video_section() {
		var width =	$(window).width();
		var iframeHeight = (800 * ( width / 1440));
		$(".video-section iframe").css("height", iframeHeight);
	}
	
	/* -- Blog Post */
	function post_cover() {
		var width = $(window).width();
		var post_header = $(".entry-header").height();
		var cover_height = post_header + 100;
		if( post_header > 0 ){
			if( width < 768 ) {
				$(".entry-cover img").css("height",cover_height);		
			} else {
				$(".entry-cover img").removeAttr("style");
			}
		}
	}
	
	/* + Responsive Caret* */
	function menu_dropdown_open(){
		var width = $(window).width();
		if($(".ownavigation .nav li.ddl-active").length ) {
			if( width > 991 ) {
				$(".ownavigation .nav > li").removeClass("ddl-active");
				$(".ownavigation .nav li .dropdown-menu").removeAttr("style");
			}
		} else {
			$(".ownavigation .nav li .dropdown-menu").removeAttr("style");
		}
	}
	
	/* + Sticky Menu */
	function sticky_menu() {
		if ($(".slider-section").length) {
			var menu_scroll = $(".slider-section").offset().top + $(".slider-section").height();
			
			var scroll_top = $(window).scrollTop();
			if ( scroll_top > menu_scroll ) {
				$(".header-section").addClass("navbar-fixed-top animated fadeInDown");
			} else {
				$(".header-section").removeClass("navbar-fixed-top animated fadeInDown"); 
			}
			
		} else if ($(".page-banner").length) {
			var menu_scroll = $(".page-banner").offset().top + $(".page-banner").height();
			var scroll_top = $(window).scrollTop();
			if ( scroll_top > menu_scroll ) {
				$(".header-section").addClass("navbar-fixed-top animated fadeInDown");
			} else {
				$(".header-section").removeClass("navbar-fixed-top animated fadeInDown"); 
			}
		} else {
			var menu_scroll = $("body").offset().top;
			var scroll_top = $(window).scrollTop();
			if ( scroll_top > menu_scroll ) {
				$(".header-section").addClass("navbar-fixed-top animated fadeInDown");
			} else {
				$(".header-section").removeClass("navbar-fixed-top animated fadeInDown"); 
			}
		}
	}
	
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {

		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* - Set Sticky Menu* */
		if( $(".header-section").length ) {
			sticky_menu();
		}
		
		$('.navbar-nav li a, .logo-block a').on("click", function(event) {

			var anchor = $(this);
			
			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }

			if ( anchor.attr('href').indexOf('#') === 0 ) {

				if( $(anchor.attr('href')).length ) {
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 85}, 1500, 'easeInOutExpo' );     
				}
				event.preventDefault();
			}
		});

		/* -- Responsive Caret */
		$(".ddl-switch").on("click", function() {
			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* -- Tooltip */
		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle="tooltip"]').on('shown.bs.tooltip', function () {
			$('.tooltip').addClass('animated slideInUp');
		});
		
		/* -- Slider Section */
		function doAnimations( elems ) {
			/* Cache the animationend event in a variable */
			var animEndEv = "webkitAnimationEnd animationend";

			elems.each(function () {
				var $this = $(this),
					$animationType = $this.data("animation");
					$this.addClass($animationType).one(animEndEv, function () {
					$this.removeClass($animationType);
				});
			});
		}

		/* Variables on page load */
		var $myCarousel = $("#photo-slider"),
		$firstAnimatingElems = $myCarousel.find(".item:first").find("[data-animation ^= 'animated']");

		/* Initialize carousel */
		$myCarousel.carousel();

		/* Animate captions in first slide on page load */
		doAnimations($firstAnimatingElems);

		/* Pause carousel */
		$myCarousel.carousel("pause");

		/* Other slides to be animated on carousel slide event */
		$myCarousel.on("slide.bs.carousel", function (e) {
			var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems);
		});
		
		/* -- Service Section */
		if( $(".service-section").length ){
			service();
		}
		
		/* -- Portfolio Section */
		if( $(".portfolio-section").length ){
			portfolio();
			portfolio_filter();
			/* -- Portfolio Popup */
			$('.popup-modal').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#username',
				modal: true
			});
			$(document).on('click', '.popup-modal-dismiss', function (e) {
			  e.preventDefault();
			  $.magnificPopup.close();
			});
		}
		
		/* -- Features Section */
		features();
		
		/* -- Why Us */
		if( $(".why-us-section").length ) {
			whyus();
		}
		
		/* -- Team Section */
		if( $(".team-section").length ) {
			team();
		}
		
		/* -- Application Section */
		if( $(".application-section").length ) {
			application();
		}
		
		/* -- Blog Section */
		if( $(".blog-section").length ) {
			blog();
		}
		
		/* -- Process Section */
		process();
		
		/* -- Blog Post */
		post_cover();
		
		/* -- Video */
		video_section();
		function video_section() {
			var width =	$(window).width();
			var iframeHeight = (800 * ( width / 1920));
			$(".video-section iframe").css("height", iframeHeight);
		}
		
		/* -- Statistics Section */
		$(".statistics-section").each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{		
				var statistics_item_count = 0;
				var statistics_count = 0;					
				statistics_item_count = $( "[id*='statistics_count-']" ).length;

				for(var i=1; i<=statistics_item_count; i++)
				{
					statistics_count = $( "[id*='statistics_count-"+i+"']" ).attr( "data-statistics_percent" );
					$("[id*='statistics_count-"+i+"']").animateNumber({ number: statistics_count }, 2000);
				}				
			});
		});
		
		/* -- Contact Section */
		if( $(".contact-section").length ){
			$(".message > a").on("click", function(){
				$(".contact-detail").css({"height":"0","opacity":"0","padding":"0"});
				$(".contact-form").css({"height":"auto","opacity":"1","padding":"60px 0","overflow":"visible"});
			});
			$("#cnt-close").on("click", function(){
				$(".contact-form").css({"height":"0","opacity":"0","padding":"0","overflow":"hidden"});
				$(".contact-detail").css({"height":"auto","opacity":"1","padding":"60px 0"});
			});
		}
		
		/* -- Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");					
						$("#input_name").val("");
						$("#input_email").val("");
						$("#input_company").val("");
						$("#input_subject").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
				}
			});
			return false;
		});/* Quick Contact Form /- */
		
		/* -- Color Schem */
		$("#default").on("click", function()
		{
			$("#color").attr("href", "assets/css/color-schemes/default.css");
			return false;
		});
		
		$("#green").on("click", function()
		{
			$("#color").attr("href", "assets/css/color-schemes/green.css");			
			return false;
		});
		
		$("#blue").on("click", function()
		{
			$("#color").attr("href", "assets/css/color-schemes/blue.css");			
			return false;
		});
		
		$("#yellow").on("click", function()
		{
			$("#color" ).attr("href", "assets/css/color-schemes/yellow.css");			
			return false;
		});

		$("#light-green").on("click", function()
		{
			$("#color").attr("href", "assets/css/color-schemes/light-green.css");			
			return false;
		});

		$("#orange").on("click", function()
		{
			$("#color").attr("href", "assets/css/color-schemes/orange.css");			
			return false;
		});

		$("#pink").on("click",function()
		{
			$("#color").attr("href", "assets/css/color-schemes/pink.css");			
			return false;
		});

		$("#black").on("click",function()
		{
			$("#color").attr("href", "assets/css/color-schemes/black.css");			
			return false;
		});

		// picker buttton
		$(".picker_close").on("click",function()
		{
			$("#choose_color").toggleClass("position");
		});
		
	});/* document.ready /- */
	
	/* + Window On Scroll */
	$(window).on("scroll",function() {
		/* - Set Sticky Menu* */
		if( $(".header-section").length ) {
			sticky_menu();
		}
	});
	
	/* ## Window Resize */
	$( window ).on("resize",function() {
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* -- Service Section */
		service();
		
		/* -- Portfolio Section */
		portfolio();
		
		/* -- Features Section */ 
		features();
		
		/* -- Why Us */
		whyus();
		
		/* -- Team Section */
		team();
		
		/* -- Application Section */
		application();
		
		/* -- Blog Section */
		blog();
		
		/* -- Process Section */
		process();
		
		/* -- Video */
		video_section();
		
		/* -- Blog Post */
		post_cover();

	});
	
	/* ## Window Load - Handler for .load() called */
	$(window).on("load",function() {
		/* - Site Loader */
		if ( !$("html").is(" .ie6, .ie7, .ie8 ") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
		/* -- Service Section */
		service();
		
		/* -- Portfolio Section */
		portfolio();
		portfolio_filter();
		
		/* -- Features Section */ 
		features();
		
		/* -- Why Us */
		whyus();
		
		/* -- Team Section */
		team();
		
		/* -- Application Section */
		application();
		
		/* -- Blog Section */
		blog();
		
		/* -- Process Section */
		process();
		
		/* -- Video */
		video_section();
		
		/* -- Blog Post */
		post_cover();
		
	});
	
})(jQuery);