// Full Screen button functionality
document.getElementById('fullScreenButton').addEventListener('click', () => {
    const iframe = document.getElementById('gameIframe');
    
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});

// Refresh button functionality
document.getElementById('refreshButton').addEventListener('click', () => {
    document.getElementById('gameIframe').contentWindow.location.reload(); // Reload the iframe
});
