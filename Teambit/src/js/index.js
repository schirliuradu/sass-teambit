import $ from 'jquery'; 

$(document).ready(function() {

    $('.spaghetti').click(function() {

        $('.phone-menu').fadeToggle(300);
        $('.spaghetti').toggleClass('spaghetti--cooked');
        $('.overlay').toggleClass('overlay--active'); 

    }); 

});