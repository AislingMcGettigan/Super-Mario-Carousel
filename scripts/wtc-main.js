    $(document).ready(function(){
    $("#story").mouseover(function(){
    $("#story .carousel-control").show();
    });
    $("#story").mouseleave(function(){
    $("#story .carousel-control").hide();
    });
    
    
    $("#thumbCarousel .thumb").on("click", function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active"); 
    });
    
    
    $('#story').on('slid.bs.carousel', function(){
    var index = $('.carousel-inner .item.active').index();
    var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="'+index+'"]');
    thumbnailActive.addClass('active');
    $(thumbnailActive).siblings().removeClass("active");
    });
    });