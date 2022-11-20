const info = document.getElementById("info");
const cookie = document.getElementById("cookie");
const cookie2 = document.getElementById("cookie2");
const cookie3 = document.getElementById("cookie3");
const cookie4 = document.getElementById("cookie4");
const counter = document.getElementById("counter");
const cookieClickMultiplier = document.getElementById("cookieClickMultiplier");
const autoClickerButton = document.getElementById("autoClickerButton");
const time = document.getElementById("time");
const aboutmusic = document.getElementById("aboutmusic");
const show = document.getElementById("box-show");
const changeBackground = document.getElementById("changeBackground");
const setBackground = document.getElementById("setBackground");
const headline = document.getElementById("headline");


const timer = time.onclick = () => {
    document.getElementById("time").innerHTML = Date();
    
}
setInterval(() => {
    timer();
}, 1000);

const randomNumber = (minimum, maximum) => {
    const myNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return myNum;
}
console.log(randomNumber(0, 255));
const changeColor = () => {
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

changeBackground.onclick = () => {
    changeColor();
    document.body.style.backgroundImage = "none";
    changeBackground.style.display = "none";
    setBackground.style.display = "block";
    headline.style.color = "black";
    headline.style.animation = "none";
    headline.style.textShadow = "2px 2px 0px white";
}
setBackground.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/background.jpg)";
    document.body.style.backgroundColor = "white";
    clearInterval(changeInterval);
    headline.style.animation = "textShadow .5s infinite alternate linear";
    headline.style.textShadow = "none";
    headline.style.color = "#b9f2ff";
    setBackground.style.display = "none";
    changeBackground.style.display = "block";
}
const changeInterval = setInterval(() => {
    changeColor();
}, 1000);



let numberOfCookies = 0;
let cookieIncrease = 1;
let autoClickerPrice = 100;
let autoClickerIncrease = 0;

cookie.onclick = () => {
    numberOfCookies += cookieIncrease;
    counter.innerHTML = `Stones: ` + numberOfCookies;
    counter.style.boxShadow = "0px 5px 1px #B7B09C";
    counter.style.textShadow = "0px 2px 1px #B7B09C";
    if (numberOfCookies == 150) {
        cookie.style.display = "none";
        cookie2.style.display = "block";
    }
    if (numberOfCookies == 1) {
        show.style.display = "none";
        aboutmusic.style.display = "none";

    }
    if(numberOfCookies>=50){
        info.style.display = "table";
        info.innerHTML = `Hurry up, you can buy an upgrade!`;
        info.style.color = "red";
    } 


}
cookie2.onclick = () => {
    numberOfCookies += cookieIncrease;
    counter.innerHTML = `Irons: ` + numberOfCookies;
    counter.style.boxShadow = "0px 5px 1px #a19d94";
    counter.style.textShadow = "0px 2px 1px #a19d94";
    if (numberOfCookies == 250) {
        cookie2.style.display = "none";
        cookie3.style.display = "block";
    }
    if(numberOfCookies>=50){
        info.style.display = "table";
        info.innerHTML = `Hurry up, you can buy an upgrade!`;
        info.style.color = "red";
    } 
}
cookie3.onclick = () => {
    numberOfCookies += cookieIncrease;
    counter.innerHTML = `Diamonds: ` + numberOfCookies;
    counter.style.boxShadow = "0px 5px 1px #b9f2ff";
    counter.style.textShadow = "0px 2px 1px #b9f2ff";
    if (numberOfCookies == 350) {
        cookie3.style.display = "none";
        cookie4.style.display = "block";
    }
    if(numberOfCookies>=50){
        info.style.display = "table";
        info.innerHTML = `Hurry up, you can buy an upgrade!`;
        info.style.color = "red";
    } 

}
cookie4.onclick = () => {
    numberOfCookies += cookieIncrease;
    counter.innerHTML = `Raw materials: ` + numberOfCookies;
    counter.style.boxShadow = "0px 5px 1px gold";
    counter.style.textShadow = "0px 2px 1px gold";
    if(numberOfCookies>=50){
        info.style.display = "table";
        info.innerHTML = `Hurry up, you can buy an upgrade!`;
        info.style.color = "red";
    } 
}



cookieClickMultiplier.onclick = () => {
    if (numberOfCookies >= 50) {
        numberOfCookies -= 50; // numberOfCookies = numberOfCookies - 50;
        cookieIncrease++;
        counter.innerHTML = `Raw materials: ` + numberOfCookies;
        let t = cookieIncrease - 1;
        info.innerHTML = `You bought a new upgrade with turbo ${t}x`;
        info.style.color = "#b9f2ff";
        info.style.display = "table"; 
       
    } 
     
   
     
}

autoClickerButton.onclick = () => {
    if (numberOfCookies >= autoClickerPrice) {
        numberOfCookies -= autoClickerPrice;
        counter.innerHTML = `Raw materials: ` + numberOfCookies;
        info.style.display = "table"; 
        autoClickerPrice *= 2;
        autoClickerButton.innerHTML = `Buy Auto Clicker: ${autoClickerPrice}`;
        if (autoClickerIncrease == 0) {
            setInterval(() => {
                numberOfCookies += autoClickerIncrease;
                counter.innerHTML = `Raw materials: ` + numberOfCookies;
            }, 1000);
        }
        autoClickerIncrease++;

    }
    if(numberOfCookies>=50){
        info.innerHTML = `You bought a new upgrade with turbo ${t}x`;
        info.style.color = "#b9f2ff";
        info.style.display = "table"; 
    } 
}