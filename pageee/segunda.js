const startDate = new Date('2024-10-07T18:49:12');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);    

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}


setInterval(() => {
    updateTimer();
    createMiniHeart();
}, 1000);

function createMiniHeart() {
    const heart=
    document.createElement('div');
    heart.className = 'mini-heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';

    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

document.getElementById('nextScreen').addEventListener('click', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = 'tercera.html';
    }, 800);
});

const name = 'VALERY';
const container = document.getElementById('nameHearts');

    const letterHearts ={
        V:[[0,0],[1,1],[2,2],[3,3],[4,4],[2,3],[1,4]],
        A: [[2,0],[1,1],[3,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4]],
        L: [[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[3,4],[4,4]],
        E: [[0,0],[1,0],[2,0],[3,0],[4,0],[0,2],[1,2],[2,2],[3,2],[4,2],[0,4],[1,4],[2,4],[3,4],[4,4]],
        R: [[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[1,2],[2,2],[3,2],[0,3],[3,3],[0,4],[4,4]],
        Y: [[0,0],[4,0],[1,1],[3,1],[2,2],[2,3],[2,4]]
    };

    function drawName() {
        name.split('').forEach((char, index) => {
            const letter = document.createElement("div");
            letter.className = "letter";
            letter.style.width= "60px";
            letter.style.height= "70px";

            letterHearts[char].forEach(([x, y], i) => {
                const heart = document.createElement("span");
                heart.textContent = "❤️";
                heart.style.left = x * 14 + "px";
                heart.style.top = y * 14 + "px";
                heart.style.animationDelay = (i * 0.1) + "s";
                letter.appendChild(heart);
            });

            letter.style.opacity =0;
            container.appendChild(letter);

            setTimeout(() => {
                letter.style.opacity =1;
            }, index * 400);
        });
    }

    drawName();