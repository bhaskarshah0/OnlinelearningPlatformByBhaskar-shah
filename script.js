document.getElementById('logoutButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    
    // Redirect to login page
    window.location.href = 'login.html';
});

// Get the "Get Started" button
const getStartedBtn = document.getElementById('get-started-btn');

// Add click event listener to the button
getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Add a class to the button for animation
    getStartedBtn.classList.add('clicked');

    // Scroll to the bottom of the page smoothly
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom
        behavior: 'smooth' // Smooth scroll
    });

    // Remove the animation class after the animation ends
    setTimeout(() => {
        getStartedBtn.classList.remove('clicked');
    }, 500); // Match the duration of the animation
});

// Gamification logic
let points = 1200;
let badges = 5;
let level = 3;

function updateGamificationStats() {
    document.getElementById('points').textContent = points;
    document.getElementById('badges').textContent = badges;
    document.getElementById('level').textContent = level;
}

// Example: Increment points and update stats
function completeLesson() {
    points += 100;
    if (points % 500 === 0) {
        badges += 1;
    }
    if (points % 1000 === 0) {
        level += 1;
    }
    updateGamificationStats();
}

// Call this function to initialize stats on page load
updateGamificationStats();

