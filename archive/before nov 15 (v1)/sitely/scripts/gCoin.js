function updateGreetings() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    const greetingGoromiElement = document.getElementById('greetingGoromi');

    if (hour < 12) {
        greetingElement.textContent = "Good morning";
        greetingGoromiElement.textContent = "'Mornin,";
    } else if (hour < 18) {
        greetingElement.textContent = "Good afternoon";
        greetingGoromiElement.textContent = "'Afternoon!";
    } else {
        greetingElement.textContent = "Good evening";
        greetingGoromiElement.textContent = "Evenin'!";
    }
}

updateGreetings();

document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        "Yeah man i dont know either. but really you just have to pretend that you know whats happening.",
        "if you see a guy named akiyama tell him i said fuck you. hopefully he doesnt have an account on here.",
        "Nice weather we\'re having today, yeah?",
        "Ughhh im so tired bro i spent hours doing my makeuo",
        "maji love love love!",
        "GoromiCoin... my best creation, no?",
        "saejimo saejimo saejimo",
    ];

    function displayRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        document.getElementById("yap").innerText = phrases[randomIndex];
    }

    displayRandomPhrase();
});

function redirectUser() {
    var select = document.getElementById("select");
    var value = select.value;
    if (value === "daimedane") {
        window.location.href = "damedane.html";
    }
    if (value === "majilove") {
        window.location.href = "https://youtu.be/F9UPGM4oY6w?si=_nY3s-VLk6fCp4Q7";
    }

}
function withdrawError() {
  alert("Please enter the correct pin.");
}