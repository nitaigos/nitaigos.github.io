// Typing effect for hero section
const heroText = document.querySelector('#hero h1');
const text = "BASIS Independent Silicon Valley Hackathon 2025";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 75); // Adjust the speed here
    }
}

window.onload = typeEffect;

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to toggle FAQ answers and arrow direction
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;

        // Toggle the 'active' class on both the question and the answer
        answer.classList.toggle('active');
        item.classList.toggle('active');

        // Smooth toggle effect for the answer
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
