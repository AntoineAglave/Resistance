$(window).on('load', function(){
	
	$(".loader").fadeOut("fast");	
	
	var loader = new TimelineMax()

	
loader.from('.arrow', 1, {ease: Power2.easeOut,y: -200, autoAlpha:0});
loader.from('.background',1, {y:40,scale: 1.2, ease: Power2.easeOut},'-=1');	
loader.from('.Homme',1, {y:30,scale: 1.3, ease: Power2.easeOut},'-=1');
loader.from('.Femme',1, {y:20,scale: 1.4, ease: Power2.easeOut},'-=1');
loader.to('.arrow', 1, {ease: Power2.easeOut,y: -20, repeat:-1,yoyo: true});
	
	});

$(document).ready(function(){
	
	var cookie = Cookies.get('accept');
	
	if(cookie === undefined){
		
		console.log("empty");
		
		$("body").append('<div class="banniere fixed-bottom"><div class="container"><div class="row"><div class="col-9"><p class="p-3 m-0">Acceptez-vous toutes les conditions sur les cookies?</p></div><div class="col"><button type="button" class="btn btn-primary ok m-3">Oui</button></div></div></div></div>');
		
	}
		else{
			console.log("exists");
	}
	
	$( ".ok" ).click(function() {
	  		
		Cookies.set('accept', 'truc', {expires: 395});
		//Cookies.set('nom', 'valeur cookie', {expires: nombre de jours)
		console.log(cookie);
		
		$( ".banniere" ).fadeOut();
		
	});
	
});//cookie


$(document).ready(function(){	

var controller = new ScrollMagic.Controller();
	
	var tl = new TimelineMax()
	
	var rule = CSSRulePlugin.getRule("#h2:after");
	tl.set(rule,{
		cssRule:{
			width:0,
		}
	});

		
tl.to('#h1', 3, {scale: 1.2,autoAlpha: 0,ease: Power0.easeNone},'-=4');
tl.to('.background',3, {y:40,scale: 1.2, ease: Power0.easeNone},'-=4');	
tl.to('.Homme',3, {y:30,scale: 1.3, ease: Power0.easeNone},'-=4');
tl.to('.Femme',3, {y:20,scale: 1.4, ease: Power0.easeNone},'-=4');
tl.to('.full-height',3, {autoAlpha: 0, ease: Power0.easeNone},'-=3.5');	
tl.from('.trigger', 1, {autoAlpha:0},'-=2');
tl.from('.navbar',3,{autoAlpha:0, y:-100},'-=1');	
tl.from('#intro-image', 3, {y:400, autoAlpha:0});	
tl.from('#intro', 3, {y:400, autoAlpha:0});		
tl.to(rule, 3, {cssRule:{
	width: '100%', ease: Power3.easeOut,
}
				  });		


var scene = new ScrollMagic.Scene({
  triggerElement: ".full-height",
            triggerHook: 0	,
            duration: "100%"
})
  .setTween(tl)
  .addTo(controller);
	
	
	
	
var controller1 = new ScrollMagic.Controller();
	
/*	var rule = CSSRulePlugin.getRule("#h2:after");
	tl1.set(rule,{
		cssRule:{
			width:0,
		}
	});*/
	
	var tl1 = new TimelineMax()
	
	
/*tl1.from('#intro', 0.5, {y: 200, opacity:0});	*/
	
/*	var rule = CSSRulePlugin.getRule("#h2:after");
	tl1.set(rule,{
		cssRule:{
			width:0,
		}
	});*/
	


var scene1 = new ScrollMagic.Scene({
  triggerElement: ".trigger",
            triggerHook: 0.3	,
           
})
  .setTween(tl1)
  .addTo(controller);
	
	
	
var controller2 = new ScrollMagic.Controller();
	
	var tl2 = new TimelineMax()

	
tl2.from('#animation', 1, {x: -200, autoAlpha:0});	
tl2.from('#animation1', 1, {x: -200, autoAlpha:0});	
tl2.from('#animation2', 1, {x: -200, autoAlpha:0});	
tl2.from('#animation3', 1, {x: -200, autoAlpha:0});
tl2.from('#animation4', 1, {x: -200, autoAlpha:0});	
		


var scene2 = new ScrollMagic.Scene({
  triggerElement: "#photo",
            triggerHook: 0.6	,
	duration: "90%"
           
})
  .setTween(tl2)
  .addTo(controller);	
	
	
var controller3 = new ScrollMagic.Controller();
	

	
	var tl3 = new TimelineMax()
	
	var rule1 = CSSRulePlugin.getRule("#h3:before");
	tl3.set(rule1,{
		cssRule:{
			width:0,ease: Power3.easeOut,
		}
	});


	
tl3.from('#expo-image', 1, {x: -200, autoAlpha:0});	
tl3.from('#expo', 1, {x: -200, autoAlpha:0});	
	
tl3.to(rule1, 1, {cssRule:{
	width: '100%',
}
				  });	
	
	
		


var scene3 = new ScrollMagic.Scene({
  triggerElement: "#expo-image",
    triggerHook: 0.9	,
	duration: "90%"
           
})
  .setTween(tl3)
  .addTo(controller);
	
	
	
	
var cta = new ScrollMagic.Controller();
	
	var cta = new TimelineMax()
	
		
cta.from('#cta', 1, {y: 600, autoAlpha:0});	
cta.from('#h4', 1, {y: 400, autoAlpha:0});
cta.from('#button-cta', 1, {y: 200, autoAlpha:0});	



var cta = new ScrollMagic.Scene({
  triggerElement: "#formanchor",
    triggerHook: 0.8,
	duration:"55%"
           
})
  .setTween(cta)
  .addTo(controller);		
	
	
	
/*var controller4 = new ScrollMagic.Controller();
	
	var tl4 = new TimelineMax()

	
tl4.to('#formanchor', 1, {y: -200, opacity:0});
tl4.from('#center', 1, {y: 200, opacity:0});


		


var scene4 = new ScrollMagic.Scene({
  triggerElement: "#formanchor",
    triggerHook: 0.4	,
	duration: "70%"
           
})
  .setTween(tl4)
  .addTo(controller);		
*/
	
}); //scroll magic





//smoothscroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});










