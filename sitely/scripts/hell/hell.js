// script.js
window.onload = function() {
    const referrer = document.referrer;
    const pageName = referrer.split('/').pop().split('.')[0].replace(/\//g, ''); 
    let storedItems = localStorage.getItem('pagesVisited');

    if (!storedItems) {
        localStorage.setItem('pagesVisited', pageName);
    } else {
        const pagesArray = storedItems.split(',');
        if (!pagesArray.includes(pageName)) {
            pagesArray.push(pageName);
            localStorage.setItem('pagesVisited', pagesArray.join(','));
        }
    }

    // Fetching JSON data and displaying reasons on hell.html
    if (window.location.pathname.includes('hell.html')) {
        const storedItems = localStorage.getItem('pagesVisited');
        const itemsArray = storedItems ? storedItems.split(',') : [];
        const reasons = {};

        fetch('/sitely/scripts/hell/hell.json')
            .then(response => response.json())
            .then(data => {
                itemsArray.forEach(item => {
                    if (data[item]) {
                        reasons[item] = data[item];
                    }
                });

                const displayText = Object.values(reasons).map(reason => reason.reason).join(', ') + 
                                    (Object.values(reasons).length > 1 ? ' and ' : '') + 
                                    Object.values(reasons).map(reason => reason.reason2).join(', ') + 
                                    (Object.values(reasons).length > 1 ? ' and ' : '') + 
                                    Object.values(reasons).map(reason => reason.reason3).join(', ');

                document.getElementById('hell').innerText = displayText;
            });
    }
};
