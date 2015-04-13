function mcvnameChange() {
  var $window = $(window);
  var $title = $('#title');

  function checkWidth() {
    var windowSize = $window.width();
    if(windowSize < 940) {
      $title.text("mcv");
    } else {
      $('#title').text("magnum consilium veteranorum");
    }
  }

  checkWidth();

  $(window).resize(checkWidth);
}


