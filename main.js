
const progress=document.querySelector(".progress");
const progressBarValue = document.querySelector(".progress-value-container");
const welcomeScreen = document.querySelector(".welcome-screen");
const progressBar = document.querySelector(".progress-bar");
const guessRulesPage=document.querySelector(".rules-img")


// welcome screen 
let progressValue = 0;
let progressEndValue = 100;
let speed = 80;


function loader()
{
    progressValue++;
    progress.style.width = `${progressValue}%`
    progressBarValue.textContent = `${progressValue}%`;

    if (progressValue === progressEndValue)
    {
        clearInterval(loading);
        welcomeScreen.style.display = "none";
        progressBarValue.style.display = "none";
        progressBar.style.display = "none"
        location.replace('guessrules.html')
    }
}

const loading = setInterval(loader, speed)
// end of welcome screen






