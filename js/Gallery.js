$(document).ready(function() {

/* Every time the window is scrolled ... */
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.fadeup').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){

            $(this).addClass('animated fadeInUp').animate({'opacity':1},500);

        }    
    }); 
}); 
});


$(document).ready(function() {

/* Every time the window is scrolled ... */
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.respon').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){

            $(this).addClass('animated bounceInUp').animate({'opacity':1},500);

        }    
    }); 
}); 
});



//======== hover============//

$(document).ready(function(){
    $(".overlay1").hover(function(){
        $(this).addClass('animated zoomIn') })
});

$(document).ready(function(){
    $(".ul3 img").mouseenter(function(){
        $(this).addClass('animated zoomIn') });
    
});


/*==========animate for bar=============*/
$(document).ready(function() { $('.progress-bar').waypoint(function() { $('.progress-bar').css({ animation: "animate-positive 2s", opacity: "1" }); }, { offset: '75%' })});



/*============scrolling ========*/

$("[data-target=nav]").click(function() {

  $('html, body').stop().animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);

});


/*=================btn scroll========*/

$("#go-to-top").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
 
  
