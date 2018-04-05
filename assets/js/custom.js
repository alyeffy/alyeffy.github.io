(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	 /* ---------------------------------------------- */

	 $(window).load(function() {
	 	$('#status').fadeOut();
	 	$('#preloader').delay(500).fadeOut('slow');
	 });

	/* ---------------------------------------------- /*
	 * Modals
	/* ---------------------------------------------- */


	 $(document).ready(function(){
		$("#proj1").click(function(){
		    $("#modal1").modal();
		});
		$("#proj2").click(function(){
		    $("#modal2").modal();
		});
		$("#proj3").click(function(){
		    $("#modal3").modal();
		});
		$("#proj4").click(function(){
		    $("#modal4").modal();
		});
		$("#proj5").click(function(){
		    $("#modal5").modal();
		});
		$("#proj6").click(function(){
		    $("#modal6").modal();
		});
		$("#p7").click(function(){
		    $("#modal7").modal();
		});
		$("#p8").click(function(){
		    $("#modal8").modal();
		});
		$("#p9").click(function(){
		    $("#modal9").modal();
		});
	});

   	/* ---------------------------------------------- /*
	 * Typewriter
	 /* ---------------------------------------------- */

	 $(document).ready(function() {

	 	var TxtType = function(el, toRotate, period) {
	 		this.toRotate = toRotate;
	 		this.el = el;
	 		this.loopNum = 0;
	 		this.period = parseInt(period, 10) || 2000;
	 		this.txt = '';
	 		this.tick();
	 		this.isDeleting = false;
	 	};

	 	TxtType.prototype.tick = function() {
	 		var i = this.loopNum % this.toRotate.length;
	 		var fullTxt = this.toRotate[i];

	 		if (this.isDeleting) {
	 			this.txt = fullTxt.substring(0, this.txt.length - 1);
	 		} else {
	 			this.txt = fullTxt.substring(0, this.txt.length + 1);
	 		}

	 		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	 		var that = this;
	 		var delta = 200 - Math.random() * 100;

	 		if (this.isDeleting) { delta /= 2; }

	 		if (!this.isDeleting && this.txt === fullTxt) {
	 			delta = this.period;
	 			this.isDeleting = true;
	 		} else if (this.isDeleting && this.txt === '') {
	 			this.isDeleting = false;
	 			this.loopNum++;
	 			delta = 500;
	 		}

	 		setTimeout(function() {
	 			that.tick();
	 		}, delta);
	 	};

	 	window.onload = function() {
	 		var elements = document.getElementsByClassName('typewrite');
	 		for (var i=0; i<elements.length; i++) {
	 			var toRotate = elements[i].getAttribute('data-type');
	 			var period = elements[i].getAttribute('data-period');
	 			if (toRotate) {
	 				new TxtType(elements[i], JSON.parse(toRotate), period);
	 			}
	 		}
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

	/* ---------------------------------------------- /*
	 * Smooth scroll / Scroll To Top
	 /* ---------------------------------------------- */

	 $('a[href*=#]').bind("click", function(e){

	 	var anchor = $(this);
	 	$('html, body').stop().animate({
	 		scrollTop: $(anchor.attr('href')).offset().top
	 	}, 1000);
	 	e.preventDefault();
	 });

	 $(window).scroll(function() {
	 	if ($(this).scrollTop() > 100) {
	 		$('.scroll-up').fadeIn();
	 	} else {
	 		$('.scroll-up').fadeOut();
	 	}
	 });

	/* ---------------------------------------------- /*
	 * Navbar
	 /* ---------------------------------------------- */

	 $('.header').sticky({
	 	topSpacing: 0
	 });

	 $('body').scrollspy({
	 	target: '.navbar-custom',
	 	offset: 70
	 })

	/* ---------------------------------------------- /*
	 * Owl Carousel
	 /* ---------------------------------------------- */

	 $('.owl-carousel').owlCarousel({
	 	margin: 10,
	 	singleItem: true,
	 	loop: true,
	 	dots: true,
	 	nav: true,
	 	navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
	 	pagination: true,
	 	paginationSpeed: 400,
	 	slideSpeed: 300,
	 	autoplay: true,
	 	autoplayHoverPause:true
	 });

    /* ---------------------------------------------- /*
	 * Pie Charts (Skills)
	 /* ---------------------------------------------- */    

	 $('.percentage').easyPieChart({
	 	animate: 1000,
	 	lineWidth: 4,
	 	onStep: function(value) {
	 		this.$el.find('span').text(Math.round(value));
	 	},
	 	onStop: function(value, to) {
	 		this.$el.find('span').text(Math.round(to));
	 	}
	 });

	/* ---------------------------------------------- /*
	 * Home BG
	 /* ---------------------------------------------- */

	 $(".screen-height").height($(window).height());

	 $(window).resize(function(){
	 	$(".screen-height").height($(window).height());
	 });

	 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	 	$('#home').css({'background-attachment': 'scroll'});
	 } else {
	 	$('#home').parallax('50%', 0.1);
	 }


	/* ---------------------------------------------- /*
	 * WOW Animation When You Scroll
	 /* ---------------------------------------------- */

	 wow = new WOW({
	 	mobile: false
	 });
	 wow.init();


	/* ---------------------------------------------- /*
	 * E-mail validation
	 /* ---------------------------------------------- */

	 /*

	 function isValidEmailAddress(emailAddress) {
	 	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	 	return pattern.test(emailAddress);
	 };

	 */

	/* ---------------------------------------------- /*
	 * Contact form ajax
	 /* ---------------------------------------------- */

	 /*

	 $('#contact-form').submit(function(e) {

	 	e.preventDefault();

	 	window.verifyRecaptchaCallback = function (response) {
        	$('input[data-recaptcha]').val(response).trigger('change')
    	}

    	window.expiredRecaptchaCallback = function () {
        	$('input[data-recaptcha]').val("").trigger('change')
    	}

	 	var c_name = $('#c_name').val();
	 	var c_email = $('#c_email').val();
	 	var c_message = $('#c_message').val();
	 	var c_subject = $('#c_subject').val();
	 	var response = $('#contact-form .ajax-response');

	 	var formData = {
	 		'name'       : c_name,
	 		'email'      : c_email,
	 		'subject'	 : c_subject,
	 		'message'    : c_message
	 	};

	 	if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
	 		response.fadeIn(500);
	 		response.html('<i class="fa fa-warning"></i> Please fix the errors and try again. All fields are required.');
	 	}

	 	else {
	 		$.ajax({
						type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
						url         : 'assets/php/contact.php', // the url where we want to POST
						data        : formData, // our data object
						dataType    : 'json', // what type of data do we expect back from the server
						encode      : true,
						success		: function(res){
							var ret = $.parseJSON(JSON.stringify(res));
							response.html(ret.message).fadeIn(500);
						}
					});
	 	}           
	 	return false;
	 });

	 */

	});

})(jQuery);