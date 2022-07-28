  AOS.init();
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  var stick=$(".star-statistic .stick-container");
  var jumlah=[242,161,50,26,7,242,161,50,26,7];
  var max=Math.max.apply(null,jumlah);

  for (var i = 0; i < stick.length; i++) {
    var persen=(jumlah[i]/max*100);
    $(stick[i]).html(`<div class="row">
        <div class="col-10 p-0">
        <div class="stick bg-danger" style="width:`+persen+`%; height: 100%;"></div>
        </div>
        <div class="col-2 p-0">`+jumlah[i]+`</div>
        </div>
        `);
}