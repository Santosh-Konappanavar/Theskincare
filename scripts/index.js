
let count = 0;

let slide = document.querySelectorAll('#slide>div');
console.log(slide);

function startSlide() {
    slide[count].style.display = 'block'


}

export {startSlide}
startSlide()
let btnRight = document.getElementById('right');



setInterval(() => {

    if (count == slide.length - 1) {

        slide[count].style.display = 'none'
        count = 0;
        slide[count].style.display = 'block'


    }
    else {

        slide[count].style.display = 'none'

        count++
        slide[count].style.display = 'block'
    }

}, 4000);

let buy=document.getElementById("featurebox");
buy.onclick=()=>{
    window.location.href="product.html"
}