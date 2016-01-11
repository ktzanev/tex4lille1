'use strict';

(function () {
  if (!/^http:\/\/ktzanev.github.io/.test(window.location.href))
    return;
  var addslash = (window.location.href === "http://ktzanev.github.io/tex4lille1") ? '/' : '';
  window.location.href = "https" + window.location.href.substring(4) + addslash;
})();
