document.getElementById('logoutButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    
    // Correct redirect path (choose one option below)
    
    // Option 1: If login.html is in the same directory
    window.location.href = 'login.html';
    
    // Option 2: If using a framework like Express with routes
    // window.location.href = '/login';
    
    // Option 3: If in a subdirectory structure
    // window.location.href = '../login.html';
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