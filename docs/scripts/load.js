document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#tabList button');
    const contentFrame = document.getElementById('tabContent');
    const tabTitle = document.getElementById('tab');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const resourceUrl = this.getAttribute('data-src');
            contentFrame.src = resourceUrl;
            tabTitle.textContent = this.title;

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Load the first button's content on initial load
    if (buttons.length > 0) {
        buttons[0].click();
    }
});
