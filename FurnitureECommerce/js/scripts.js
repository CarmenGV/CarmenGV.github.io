$(document).ready(function (){
    /*$("#header-carousel").carousel('pause');
    $(".carousel-control-prev").click(function(){
        $("#header-carousel").carousel("prev");
        $("#header-carousel").carousel('pause');
    });
    $(".carousel-control-next").click(function(){
        $("#header-carousel").carousel("next");
        $("#header-carousel").carousel('pause');
    });*/
});

/* Menu Functions */
function menuOpen(){
    //menu.style.display = "block";
    $("#navbar-links").slideDown();
}
function menuClose(){
    //menu.style.display = "none";
    $("#navbar-links").slideUp();
}

/* Carousel Next | Prev Buttons */
function nextSlide(nextBtn){
    let currentCard = nextBtn.parentElement.parentElement.parentElement;
    let nextCard;
    if(currentCard.classList.contains("item1") || currentCard.classList.contains("item2")){
        nextCard = currentCard.nextElementSibling;
    } else{
        nextCard = currentCard.previousElementSibling.previousElementSibling;
    } 
    currentCard.classList.add("header-item-left");
    nextCard.classList.add("header-item-next");
    setTimeout(function(){
        currentCard.classList.remove("header-item-left", "center");
        nextCard.classList.remove("header-item-next");
        nextCard.classList.add("center");
    }, 700);
}

function prevSlide(prevBtn){
    let currentCard = prevBtn.parentElement.parentElement.parentElement;
    let prevCard;
    if(currentCard.classList.contains("item2") || currentCard.classList.contains("item3")){
        prevCard = currentCard.previousElementSibling;
    } else {
        prevCard = currentCard.nextElementSibling.nextElementSibling;
    }
    currentCard.classList.add("header-item-right");
    prevCard.classList.add("header-item-next");
    setTimeout(function(){
        currentCard.classList.remove("header-item-right", "center");
        prevCard.classList.remove("header-item-next");
        prevCard.classList.add("center");
    }, 700);
}

function demoMessage(){
    $("#demoMessage").slideToggle();
}
function closeModal(){
    $("#demoMessage").slideToggle();
}