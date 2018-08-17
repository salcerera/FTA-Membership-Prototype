// Smooth Scroll
$(document).ready(function() {
    $('.smooth-scroll').click(function(e) {
  
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
      e.preventDefault();
  
    });
  
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 500) {
        document.getElementById("b2top").style.display = "block";
    } else {
        document.getElementById("b2top").style.display = "none";
    }
}


$(document).ready(function() {
    $('#example').DataTable();
} );

$(document).ready(function() {
    $('#affil').DataTable();
} );    

$(document).ready(function() {
    $('#encash').DataTable();
} );


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


// Initialization
$('#my-element').datepicker([options])
// Access instance of plugin
$('#my-element').data('datepicker')