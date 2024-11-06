// Play Now button functionality
document.getElementById('playButton').addEventListener('click', () => {
    // Simply reload the page to restart the game
    location.reload();
});

// Full Screen button functionality
document.getElementById('fullScreenButton').addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) { // Firefox
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari, Opera
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { // IE/Edge
        canvas.msRequestFullscreen();
    }
});

// Refresh button functionality
document.getElementById('refreshButton').addEventListener('click', () => {
    location.reload();  // Reload the page to restart the game
});
