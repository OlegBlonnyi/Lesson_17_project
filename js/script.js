document.addEventListener('DOMContentLoaded', function() {
  //sidenav
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'left'
  });
//sidenav

//tabs and card tabs
$(document).ready(function(){
  $('.tabs').tabs();
});
//tabs and card tabs

//Autocomplete
$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250',
      "IBM" : 'https://picsum.photos/200/300?random=1',
    },
  });
});
//Autocomplete

//data picker
$(document).ready(function(){
  $('.datepicker').datepicker();
});
});
//data picker

