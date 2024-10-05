// Display current date
const currentDate = new Date().toLocaleDateString();
document.getElementById('current-date').innerText = `Today's Date: ${currentDate}`;

// Lazy loading images
const lazyLoadImages = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

lazyLoadImages.forEach((img) => {
    observer.observe(img);
});

// Handle welcome messages based on visit history
const lastVisitKey = 'lastVisit';
const now = new Date();

if (localStorage.getItem(lastVisitKey) === null) {
    // First visit
    document.getElementById('welcome-message').innerText = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisit = new Date(localStorage.getItem(lastVisitKey));
    const timeDiff = now - lastVisit; // difference in milliseconds
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (daysDiff < 1) {
        // Less than 1 day
        document.getElementById('welcome-message').innerText = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        // Exactly 1 day
        document.getElementById('welcome-message').innerText = "You last visited 1 day ago.";
    } else {
        // More than 1 day
        document.getElementById('welcome-message').innerText = `You last visited ${daysDiff} days ago.`;
    }
}

// Update the last visit date in local storage
localStorage.setItem(lastVisitKey, now.toISOString());