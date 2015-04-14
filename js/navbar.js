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
  var sections = { '#quem-somos': '#navigator',
                   '#traditions':'#tradicoes',
                   '#festas': '#party',
                   '#documents': '#docs',
                   '#foot': '#contact'};

  $.each(sections, function (key, value) {
    if (scroll_bot > $(key).position().top) {
      resetCSS(sections);
      $(value).css({
        "border-top": "2px solid white"
      });
      
  }
    return;
  });
})
