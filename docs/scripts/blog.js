let currentIndex = urls.length - 1;

function updateIframe() {
    const iframe = document.getElementById('iframe');
    iframe.src = `https://goromi.bearblog.dev/${urls[currentIndex]}`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % urls.length; 
    updateIframe();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + urls.length) % urls.length; 
    updateIframe();
});

// Initial load
updateIframe();
