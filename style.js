console.log("WElcome to the era of digital Marketiong")
/*this is the css for cahnging colors text in alert*/
changingcolors = document.querySelector("#changingcolors")
changingcolors.style.color = "red"
/*vibgyor*/
function vibgyor() {

    for (let i = 0; i < 7; i++) {

        if (i == 1) {
            
            changingcolors = document.querySelector("#changingcolors");
            changingcolors.style.color = "blue"
            setTimeout(() => {
                console.log(i)
            }, 10);
        }
        else if (i == 2) {
            console.log(i);
            changingcolors = document.querySelector("#changingcolors");
            changingcolors.style.color = "blue"
             setTimeout(() => {
                console.log(i)
            }, 1000);
        }
        else if (i == 3) {
            console.log(i);
            changingcolors = document.querySelector("#changingcolors");
            changingcolors.style.color = "blue"
             setTimeout(() => {
                console.log(i)
            }, 1000);
        }
        else if (i == 4) {
            console.log(i);
            changingcolors = document.querySelector("#changingcolors");
            changingcolors.style.color = "green"
             setTimeout(() => {
                console.log(i)
            }, 1000);
        }
        else if (i == 5) {
            console.log(i);
            changingcolors = document.querySelector("#changingcolors");
            changingcolors.style.color = "yellow"
             setTimeout(() => {
                console.log(i)
            }, 1000);
        }
        else if (i == 6) {
            console.log(i);
            changingcolors = document.querySelector("#changingcolors");
            changingcolors.style.color = "orange"
             setTimeout(() => {
                console.log(i)
            }, 1000);
        }
        else {
            console.log(i);
            changingcolors = document.querySelector("#changingcolors");
            changingcolors.style.color = "red"
            setTimeout(() => {
                console.log(i)
            }, 1000);
        }



    }

}
vibgyor();


let savings = 757;
let photos = 454;
rockets = 650;
globes = 334;

/*savingscounter*/
var timer = setInterval(() => {
    console.log("saving counter is running")
    savings++;
    let savingsCounter = document.getElementById("savingsCounter");
    savingsCounter.innerHTML = `${savings}+`;
    if (savings <= 1287) {
        console.log("hhh")

    } else {
        clearInterval(timer);

    }


}, 40);
/*photoscounter*/
var timer1 = setInterval(() => {
    console.log("photos counter is running")
    photos++;
    let photosCounter = document.getElementById("photosCounter");
    photosCounter.innerHTML = `${photos}+`;
    if (photos <= 8457) {

        console.log("hhh")

    } else {
        clearInterval(timer1);

    }


}, 10);
/*photoscounter*/
var timer2 = setInterval(() => {
    console.log("rockets counter is running")
    rockets++;
    let rocketsCounter = document.getElementById("rocketsCounter");
    rocketsCounter.innerHTML = `${rockets}+`;
    if (rockets <= 1403) {

        console.log("hhh")

    } else {
        clearInterval(timer2);

    }


}, 40);
/*globescounter*/
var timer3 = setInterval(() => {
    console.log("globes counter is running")
    globes++;
    let globesCounter = document.getElementById("globesCounter");
    globesCounter.innerHTML = `${globes}+`;
    if (globes <= 12001) {

        console.log("hhh")

    } else {
        clearInterval(timer3);

    }


}, 10);


/*js for socialmediasection*/
console.log("ggg")
var socialmediasectiona = document.querySelector(`.socialmediasection`)
socialmediasectiona.addEventListener(`click`,()=>{
    console.log("socialmediasection clicked")
    document.querySelector(`.connectme`).style.display = "block";
})







