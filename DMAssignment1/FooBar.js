var FooBar = function(i) {
for (var j=1;j<=i;j++){
    if (j%3==0 && j%5==0){
        console.log("FooBar");
    }
    else{
        if (j%3==0){
        console.log("Foo");
        }
        if (j%5==0){
            console.log("Bar");
        }
        if (j%3!=0 && j%5!=0){
            console.log(j);
        }
    }
}
}

FooBar(20);
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}