(function() {
  'use strict';
  window.onload=function() {
    
    // add css
    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', './css/_main.css');
    document.getElementsByTagName('head')[0].appendChild(fileref);
    
    //add html
    var h = '<div class="banner"><p>Made with<a href="http://madeinthehague.nl" target="_blank"><span class="icon-reigah"></span></a>in The Hague</p></div>';
    document.getElementById('example-widget-container').innerHTML = h;
  };
    
})();