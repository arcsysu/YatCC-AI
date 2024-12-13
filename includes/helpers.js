/**********************************************************

 ISCA Conference Template
 HELPERS.JS
 
 Author:       Saugata Ghose (ghose at illinois dot edu)
 Maintainer:   Mark Jeffrey (mcj at ece dot utoronto dot ca)
 Last Updated: October 21, 2021

 **********************************************************/

 window.addEventListener("load", function(){
    window.cookieconsent.initialise(json)
});

function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    var $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
}

window.onscroll = function() {scrollFunction()};
window.addEventListener('resize', scrollFunction)

function scrollFunction() {
  if(findBootstrapEnvironment() != 'xs') {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("navCont").classList.add('nav-scroll-down');
    }
    else {
      document.getElementById("navCont").classList.remove('nav-scroll-down');
    }
  }
  else {
    document.getElementById("navCont").classList.remove('nav-scroll-down');
  }
}

function expandSessionsOnDesktop() {
  if(findBootstrapEnvironment() != 'xs') {
    jQuery('div .panel-paper').collapse('show');
  }
}

function collapseSessionsOnMobile() {
  if(findBootstrapEnvironment() == 'xs') {
    jQuery('div .panel-paper').collapse('hide');
  }
}