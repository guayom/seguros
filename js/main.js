function test() {
  alert('test');
}

function setActivePrice(thisObj) {
  var cobertura = thisObj.data('cobertura');

  //reset active
  $(".precios td").removeClass('active');
  $(".botones td").removeClass('active');
  $(".coberturas-table td").removeClass('visible');

  //select active
  $(".precios").find(`td[data-cobertura='`+cobertura+`']`).addClass('active');
  $(".botones").find(`td[data-cobertura='`+cobertura+`']`).addClass('active');
  $(".coberturas-table").find(`[data-cobertura='`+cobertura+`']`).addClass('visible');

}

$("#sidebar > ul > li > a").click(function(e) {
    // Prevent a page reload when a link is pressed
  e.preventDefault();
    // Call the scroll function
  goToByScroll(this.id);
});

$(document).ready(function (){
  $('.precios td').click(function(){
    setActivePrice($(this));
  });
  $('.cobertura_titles th').click(function(){
    setActivePrice($(this));
  });

  //Mostrar u ocultar las tablas de items
  $('.coberturas-table th').click(function(){
    var targetTable = $(this).closest('table');
    targetTable.toggleClass('open');
    ga('send', 'event', 'Viajero', 'Más información', 'Tablas');
  });

  //scroll a las coberturas
  $('#coberturas tr td, #coberturas tr th').click(function (){
    $('html,body').animate({
        scrollTop: $("#coberturas").offset().top},
        'slow');

    ga('send', 'event', 'Viajero', 'Más información', 'Top');
  });
});
