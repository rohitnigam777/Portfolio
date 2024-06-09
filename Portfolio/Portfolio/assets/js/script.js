$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }


  // ============counter===============================
  // $(".counter").each(function () {
  //   var $this = $(this),
  //     countTo = $this.attr("data-countto");
  //   countDuration = parseInt($this.attr("data-duration"));
  //   $({ counter: $this.text() }).animate(
  //     {
  //       counter: countTo
  //     },
  //     {
  //       duration: countDuration,
  //       easing: "linear",
  //       step: function () {
  //         $this.text(Math.floor(this.counter));
  //       },
  //       complete: function () {
  //         $this.text(this.counter);
  //       }
  //     }
  //   );
  // });