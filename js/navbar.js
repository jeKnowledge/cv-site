function resetCSS(sections) {
  $.each(sections, function(key, value) {
    $(value).css({
      "border-top": "2px solid black"
    })
  })
}

$(document).scroll(function () {
  var scroll_top = $(document).scrollTop();
  var scroll_bot = $(window).scrollTop();
  var sections = { '#navigator': '#whoare', 
                   '#quem-somos': '#whoare',
                   '#traditions':'#tradicoes',
                   '#festas': '#party',
                   '#documents': '#docs',
                   '#foot': '#contact'};

  if($(window).scrollTop() + $(window).height() == $(document).height()){
    resetCSS(sections);
    $('#contact').css({
      "border-top": "2px solid white"
    });
    return;
  } else {
    $.each(sections, function (key, value) {
      if (scroll_bot > $(key).position().top) {
        resetCSS(sections);
        $(value).css({
          "border-top": "2px solid white"
        });
      }
      return;
    });
  }
})
