/* global $ */
'use strict';

function preReveal(codelang) {
  var el, elhtml;

  // wrap all <h1> and <h2> in <section>
  el = $('div.slides');
  elhtml = el
    .html()
    .replace(/(<h1[^>]*>)/g, '@slide@$1')
    .split('@slide@')
    .map(function (hs) {
      var ahs = hs
        .replace(/(<h2[^>]*>)/g, '@slide@$1')
        .split('@slide@');
      return (ahs.length > 1 ? '<section>\n' : '')
        + ahs.join('</section>\n<section>\n')
        + (ahs.length > 1 ? '</section>\n' : '');
    })
    .join('</section>\n<section>\n')
    + '</section>\n';
  el.html(elhtml);

  // make all <li> as fragments
  $('li').addClass('fragment');

  // make all non fist <p> as fragments
  $('p:not(:first-child):not(.nofragment)').addClass('fragment');

  // split <p> and <li> to fragments, stop = !!
  $('p:contains(!!), li:contains(!!):not(:has(p))')
    .each(function () {
      elhtml = $(this).html().split('!!');
      elhtml = elhtml.splice(0, 1)[0]
                + '<span class="fragment">'
                + elhtml.join('</span><span class="fragment">')
                + '</span>';
      $(this).html(elhtml);
    });

  // set the default class for highlight.js
  $(':not(pre)>code, pre:has(code)').each(function () {
    var el = $(this);
    if (!el.attr('class')) {
      el.addClass(codelang);
    }
  });

  // pre and blockquote are also fragments
  $('pre, blockquote').addClass('fragment');
}
