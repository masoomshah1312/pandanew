// Toggle download links visibility with animation
const downloadButton = document.getElementById('download-button');
const downloadLinks = document.getElementById('download-links');

downloadButton.addEventListener('click', () => {
    if (downloadLinks.classList.contains('show')) {
        downloadLinks.classList.remove('show'); // Hide the links
        downloadButton.innerHTML = '<i class="fas fa-arrow-down"></i> Show Downloads'; // Change button text
    } else {
        downloadLinks.classList.add('show'); // Show the links
        downloadButton.innerHTML = '<i class="fas fa-arrow-up"></i> Hide Downloads'; // Change button text
    }
});