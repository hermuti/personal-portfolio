// This file can be used for any interactive JavaScript functionality.
// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme switcher functionality
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;
const lightIcon = document.querySelector('.theme-switcher .light-icon');
const darkIcon = document.querySelector('.theme-switcher .dark-icon');

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    } else {
        body.classList.remove('light-mode');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    }
}

themeSwitcher.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
    applyTheme(savedTheme);
});

// Certificate image modal functionality
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.certificate-image').forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.dataset.fullsrc;
        captionText.innerHTML = this.alt;
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside the image
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});