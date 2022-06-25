// Selectors
const checkboxMale = document.querySelector("#m");
const checkboxFemale = document.querySelector("#f");
const genderRadios = document.getElementsByName("gender");
const calculateButton = document.querySelector(".calculate");
const inputWeight = document.querySelector("#inp-w");
const inputHeight = document.querySelector("#inp-h");
const resultDiv = document.querySelector(".result");
const genderImg = document.querySelector(".gender-img")

// Constants
const none = 1.2;
const light = 1.375;
const moderate = 1.55;
const strong = 1.725;
const veryStrong = 1.9;

// Images
const imgF = "./images/sleek.svg"
const imgM = "./images/groovy.svg"

// Change of image with radio buttons
genderRadios.forEach(radio => {
    radio.addEventListener("click", () => {
        if (radio.getAttribute("id") == "m") {
            genderImg.innerHTML = `<img id="gender-picture" src=${imgM} alt="">`
        } else {
        const genderPicture = document.querySelector("#gender-picture")
         genderImg.removeChild(genderPicture);
         genderImg.innerHTML = `<img id="gender-picture" src=${imgF} alt="">`
        }
    })
})

// calculate IMC und Calorias by clicking the button
calculateButton.addEventListener("click", () => {
    a = document.querySelector("#inp-a").value;
    w = document.querySelector("#inp-w").value;
    h = document.querySelector("#inp-h").value;
    r = Math.round(w / (h/100)**2).toFixed(2);
    if (checkboxFemale.checked) {
        tmb = (10 * w) + (6.25 * h) - (5 * a) - 161;
    } else {
        tmb = (10 * w) + (6.25 * h) - (5 * a) + 5;
    }
    document.querySelector(".result").innerHTML = `
    <div class="imc">Su IMC es de: ${r}</div>
    <div class="metabolismo">Su metabolismo basal es de: ${tmb} calorias</div>
    `
})

