// script.js

// Function to show the loading animation
function showLoading() {
    document.getElementById('loading-animation').style.display = 'flex';
}

// Function to hide the loading animation
function hideLoading() {
    document.getElementById('loading-animation').style.display = 'none';
}

// Handle page load
window.addEventListener('DOMContentLoaded', () => {
    showLoading();
    window.addEventListener('load', hideLoading);
});

// Handle offline and online events
function handleOffline() {
    showLoading();
    // document.getElementById('status-message').textContent = 'It looks like you are offline. Please check your internet connection.';
}

function handleOnline() {
    hideLoading();
    // document.getElementById('status-message').textContent = 'You are now online.';
}

// Add event listeners for online and offline events
window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);

// Initial check for internet connection on page load
window.addEventListener('DOMContentLoaded', () => {
    if (!navigator.onLine) {
        handleOffline();
    } else {
        handleOnline();
    }
});
