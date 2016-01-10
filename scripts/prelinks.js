(function(){
  var overleaf = 'https://www.overleaf.com/docs?splash=none&snip_uri=',
      gist = 'https://gist.githubusercontent.com/ktzanev/',
      dabblet = 'http://dabblet.com/gist/',
      exemples = 'https://ktzanev.github.io/tex4lille1/exemples/',
      gitexemples = 'https://github.com/ktzanev/tex4lille1/blob/gh-pages/exemples/';

  //make all <a href='http://...'> external
  $('a[href^=http]').attr('target','external').addClass('external');

  //make all <a href='gist://...'> to links
  $('a[href^=gist]').each(function(){
    var a = $(this), ah = a.attr('href') , raw;
    if (/tex$/.test(ah)) {
      raw = gist + ah.split('/').slice(2).join('/raw/'),
      a.attr('href',overleaf + raw).html('').attr('target','external').addClass('overleaf edit');
      // or download it
      $('<a>').attr('href',raw).attr('download','').addClass('download').insertAfter(a);
    }
    else {
      raw =  ah.split('/').slice(2).join('/');
      a.attr('href', dabblet + raw).html('').attr('target', 'external').addClass('dabblet edit');
    }
  });

  //make all <a href='exemple://...'> to links
  $('a[href^=exemple]').each(function(){
    var a = $(this), ah = a.attr('href').split('/').slice(2).join('/'), raw;

    raw  = exemples + ah;
    // edit tex in overleaf
    a.attr('href', overleaf + raw).html('').attr('target', 'external').addClass('overleaf edit');
    // or download it
    a = $('<a>').attr('href',raw).attr('download','').addClass('download').insertAfter(a);
    // or see it on github
    raw  = gitexemples + ah;
    a = $('<a>').attr('href',raw).attr('target', 'external').addClass('github').insertAfter(a);
  });
})();


