(function() {
  'use strict';

  window.onload=function() {
    
    // add css
    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', 'http://madeinthehague.urbanlink.nl/embed/mith.css');
    document.getElementsByTagName('head')[0].appendChild(fileref);
    
    //add html
    var h = '<div class="banner"><p>Made with<a href="http://madeinthehague.urbanlink.nl" target="_blank"><span class="icon-reigah"></span></a>in The Hague</p></div>';
    document.getElementById('madeinthehague').innerHTML = h;
  };
    
})();