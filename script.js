// Open Envelope with Animation
function openEnvelope() {
    const envelope = document.querySelector(".envelop");
    const letter = document.getElementById("letter");

    envelope.classList.add("opened"); // Envelope grows & opens
    setTimeout(() => {
        letter.classList.add("show"); // Letter slides out
    }, 500);
}


// Move "No" Button Away (Runaway Button)
function moveNoButton() {
    const noBtn = document.querySelector(".no-btn");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Accept Proposal (Play music & show big YES screen)
function acceptProposal() {
    document.getElementById("loveMusic").play();
    document.getElementById("yes-screen").style.display = "block";

    // Show messages one by one
    setTimeout(() => { document.getElementById("message1").style.opacity = "1"; }, 1000);
    setTimeout(() => { document.getElementById("message2").style.opacity = "1"; }, 3000);
    setTimeout(() => { document.getElementById("message3").style.opacity = "1"; }, 5000);

    // Generate Floating Hearts
    const heartContainer = document.querySelector(".hearts-container");
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);
    }
}
