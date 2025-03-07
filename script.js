document.getElementById('toggleDownloads').addEventListener('click', function() {
    const downloadContainer = document.querySelector('.download-container');
    const downloadList = document.getElementById('downloadList');
    if (downloadContainer.classList.contains('show')) {
        downloadContainer.classList.remove('show');
        downloadList.classList.remove('show');
        this.textContent = 'Show Downloads';
    } else {
        downloadContainer.classList.add('show');
        downloadList.classList.add('show');
        this.textContent = 'Hide Downloads';
    }
}); 