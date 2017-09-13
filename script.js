//Po każdym przeładowaniu strona ustawi się na początku
$(
    function () {
        $(this).scrollTop(0);

    });
//animacja neonu + zjazd do main
var button = document.querySelector("button");
button.addEventListener("click", function () {
    var letters = $("#neon li");
    for (var i = 0; letters.length > i; i++) {
        letters[i].classList.toggle("off");
    }
    button.classList.toggle('off');
    $('html,body').delay(1500).animate({
        scrollTop: $('main').offset().top
    }, 1500)
})

//animacja menu
$(".fa-bars")
    .mouseover(function () {
        $("#navigation").show(300);
    });
$(".fa-bars")
    .mouseleave(function () {
        $("#navigation").hide(300);
    });
//Hamburger zmiana koloru
$(window).scroll(function () {
    var height = $('header').height();
    if ($(this).scrollTop() > (height - 0.09 * height)) {
        $("header nav, nav li a").removeClass("white").addClass("black");
    } else {
        $("header nav, nav li a").removeClass("black").addClass("white");
    }
});
