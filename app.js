'use strict';
$('.msg').click(function(t) {
    t.preventDefault();

    alert('Thank You!')

});

$('#hiddien1').click(function(t) {
    t.preventDefault();

    $('#card1').hide(900);
});

$('#hiddien2').click(function(t) {
    t.preventDefault();

    $('#card2').hide(900);
});