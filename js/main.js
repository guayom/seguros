function test() {
  alert('test');
}

function setActivePrice(thisObj) {
  var cobertura = thisObj.data('cobertura');

  //reset active
  $(".precios td").removeClass('active');
  $(".botones td").removeClass('active');
  //hide all the information
  $('.cobertura-contenido').removeClass('active');

  //select active
  $(".precios").find(`td[data-cobertura='`+cobertura+`']`).addClass('active');
  $(".botones").find(`td[data-cobertura='`+cobertura+`']`).addClass('active');

  //display corresponding information
  $(".informacion").find(`div[data-cobertura='`+cobertura+`']`).addClass('active');

}

$(document).ready(function (){
  $('.precios td').click(function(){
    setActivePrice($(this));
  });
  $('.cobertura_titles th').click(function(){
    setActivePrice($(this));
  });

  //Mostrar u ocultar las tablas de items
  $('.show_coverage_items').click(function(){
    var targetTable = $(this).closest('table');
    targetTable.toggleClass('open');
  });
});
