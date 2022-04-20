$(document).ready(function(){
    $(".category1").css({color:"#e79800"});
    $(".category2,.category3,.category4,.category5").css({color:"black"});
    $(".category1-sec").show();
    $(".category2-sec,.category3-sec,.category4-sec,.category5-sec").hide();
    $(".category1").click(()=>{
        $(".category1").css({color:"#e79800"});
        $(".category2,.category3,.category4,.category5").css({color:"black"});
        $(".category1-sec").fadeIn();
        $(".category2-sec,.category3-sec,.category4-sec,.category5-sec").hide();
    })
    $(".category2").click(()=>{
        $(".category2").css({color:"#e79800"});
        $(".category1,.category3,.category4,.category5").css({color:"black"});
        $(".category2-sec").fadeIn();
        $(".category1-sec,.category3-sec,.category4-sec,.category5-sec").hide();
    })
    $(".category3").click(()=>{
        $(".category3").css({color:"#e79800"});
        $(".category2,.category1,.category4,.category5").css({color:"black"});
        $(".category3-sec").fadeIn();
        $(".category2-sec,.category1-sec,.category4-sec,.category5-sec").hide();
    })
    $(".category4").click(()=>{
        $(".category4").css({color:"#e79800"});
        $(".category2,.category3,.category1,.category5").css({color:"black"});
        $(".category4-sec").fadeIn();
        $(".category2-sec,.category3-sec,.category1-sec,.category5-sec").hide();
    })
    $(".category5").click(()=>{
        $(".category5").css({color:"#e79800"});
        $(".category2,.category3,.category4,.category1").css({color:"black"});
        $(".category5-sec").fadeIn();
        $(".category2-sec,.category3-sec,.category4-sec,.category1                                                                  -sec").hide();
    })


    //Fancybox JS
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
    
})

//Owl 
$('#owl-carousel1,#owl-carousel2').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin: 30,
    dots: true,
    nav: true,
    items: 2,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        }
    }
})
$('#owl-carousel3').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    margin: 40,
    dots: true,
    //nav: true,
    items: 5,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
})