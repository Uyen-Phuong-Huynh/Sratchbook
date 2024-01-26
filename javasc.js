
function login() {
    var password = document.getElementById("password").value;
    // Replace this with your actual password or hash
    var correctPassword = "260105";

    if (password) {
        if (password === correctPassword) {
            document.getElementById("message").innerHTML = "Got it";
            window.location.href = "page01.html";
        } else {
            document.getElementById("message").innerHTML = "NOT ME??";
        }
    } else {
        document.getElementById("message").innerHTML = "NOT ME??";
    }
}

function handleKeyPress(event) {
    if ((event.key === "Enter") || (event.key === "Return") || (event.key ===" ")){
        event.preventDefault()
        login();
        }
    else if (event.key === "z"){
        window.location.href = "page01.html";
        }
    }

document.getElementById("password").addEventListener("keypress", handleKeyPress);

let currentIndex = 0;

function changeSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const slideWidth = slides[0].clientWidth;

    currentIndex = index;
    const translateValue = -currentIndex * slideWidth;

    // Remove 'active' class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add 'active' class to the current slide
    slides[currentIndex].classList.add('active');

    slider.style.transform = `translateX(${translateValue}px)`;
}
