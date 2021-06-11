
let start = document.querySelector('#start');
let Stop = document.querySelector("#stop");
let star = document.querySelector(".star");
let anim;
var degre = 0 , zoom = 1 , zoom_c = 1, click_counter = 0;
start.addEventListener("click" ,() => {
    starter = 0;
    click_counter++;
    if (click_counter == 1){
    anim = requestAnimationFrame( rotate );
    }
})
Stop.addEventListener("click" ,() => {
    console.log("stop")
    starter = 1;
    click_counter = 0;
})
function rotate() {
    // console.log(zoom);
    star.style.transform = 'rotate('+degre+'deg) scale('+zoom+')';
    
    if (zoom == 1.5004999999999449 || zoom < 1 ){
        zoom_c++;
    }
    if (zoom_c%2 == 1){
        zoom += 0.0005 
        degre++; 
    }
    if (zoom_c%2 == 0){
        zoom -= 0.0005 ;
        degre--; 
    }

    if (starter == 0 ){
    requestAnimationFrame( rotate );
    }
}