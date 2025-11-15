function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const correctUsername1 = "fatphobicdaigo@coolsite.net";
    const correctUsername2 = "ak1yamer";
    const correctPassword = "suckiyama2012";

    if ((username === correctUsername1 || username === correctUsername2) && password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        const incorrectMessage = document.getElementById('incorrect');
        incorrectMessage.style.display = 'block';
    }
}

document.getElementById('midGoromiLogout').onclick = function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}
