document.addEventListener('DOMContentLoaded', function() {
  //sidenav
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
  //tabs
  var el = document.querySelectorAll('.tabs');
  var instance = M.Tabs.init(el, {});
  
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('.tabs');
  var instances = M.Tabs.init(elems, options);
});