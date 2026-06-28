const themeBtn = document.getElementById("themeToggle");

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

});
topBtn?.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target/100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }
        else{

            counter.innerText = target;

        }
    };

    updateCounter();
});
const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle?.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
const modal =
document.getElementById("offerModal");

const offerBtn =
document.getElementById("offerBtn");

const closeBtn =
document.querySelector(".close");

offerBtn?.addEventListener("click",()=>{

    modal.style.display="flex";

});

closeBtn?.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});
const images = [

"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

"https://images.unsplash.com/photo-1506744038136-46273834b3fb",

"https://images.unsplash.com/photo-1469474968028-56623f02e42e",

"https://images.unsplash.com/photo-1470770841072-f978cf4d019e"

];

let currentIndex = 0;

const sliderImage =
document.getElementById("sliderImage");

function showImage(index){

    if (!sliderImage) return;

    sliderImage.src = images[index];

}

document.getElementById("nextBtn")
?.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

});

document.getElementById("prevBtn")
?.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex =
        images.length - 1;
    }

    showImage(currentIndex);

});

if (sliderImage) {

    setInterval(() => {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage(currentIndex);

    }, 3000);

}
const nameInput =
document.getElementById("name");

const emailInput =
document.getElementById("email");

const phoneInput =
document.getElementById("phone");

const nameError =
document.getElementById("nameError");

const emailError =
document.getElementById("emailError");

const phoneError =
document.getElementById("phoneError");
nameInput?.addEventListener("keyup",()=>{

    if(nameInput.value.length < 3){

        nameError.innerText =
        "Name must contain at least 3 characters";

    }
    else{

        nameError.innerText = "";

    }

});
emailInput?.addEventListener("keyup",()=>{

    const pattern =
    /^\S+@\S+\.\S+$/;

    if(!pattern.test(emailInput.value)){

        emailError.innerText =
        "Enter a valid email";

    }
    else{

        emailError.innerText = "";

    }

});
phoneInput?.addEventListener("keyup",()=>{

    const pattern =
    /^[0-9]{10}$/;

    if(!pattern.test(phoneInput.value)){

        phoneError.innerText =
        "Enter a valid 10 digit number";

    }
    else{

        phoneError.innerText = "";

    }

});
const form =
document.getElementById("contactForm");

form?.addEventListener("submit",(e)=>{

    if(
        nameError.innerText ||
        emailError.innerText ||
        phoneError.innerText
    ){

        e.preventDefault();

        alert(
        "Please fix the errors before submitting"
        );

    }

});