const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Toggle menu visibility on click
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Select all video elements
const videos = document.querySelectorAll('video');

// Hide play button initially and manage controls on play/pause
videos.forEach(video => {
  // Hide play button initially
  video.controls = false;

  video.addEventListener('click', () => {
    // Show controls when the video starts playing
    video.controls = true;
  });

  video.addEventListener('pause', () => {
    // Hide controls when the video is paused
    video.controls = false;
  });

  // Optional: Hide controls again when the video ends
  video.addEventListener('ended', () => {
    video.controls = false;
  });
});


