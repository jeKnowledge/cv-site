function resetCSS(sections) {
  $.each(sections, function(key, value) {
    $(value).css({
      "border-top": "2px solid black"
    })
  })
}

$(document).scroll(function () {
  var scroll_top = $(document).scrollTop();
  var scroll_bot = $(window).scrollTop() + $(window).height();
  var sections = { '#quem-somos': '#whoare',
                   '#traditions':'#tradicoes',
                   '#festas': '#party',
                   '#documents': '#docs',
                   '#foot': '#contact'};

  console.log(scroll_bot);

  $.each(sections, function (key, value) {
    console.log($(key).position().top);
    if (scroll_bot > $(key).position().top) {
      resetCSS(sections);
      $(value).css({
        "border-top": "2px solid white"
      });
      
  }
    return;
  });
})
