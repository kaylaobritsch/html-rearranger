var $veggies = $('li');
var $below = $('<ul>');
var $above = $('<ul>');

$('body').append('<h2>Below ground veggies</h2>');
$('body').append($below);
$('body').append('<h2>Above ground veggies</h2>');
$('body').append($above);

$veggies.each(function () {
  if ($(this).hasClass('below')) {
    $below.append($(this));
  } else {
    $above.append($(this));
  }
});
