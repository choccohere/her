// --- TIMER LOGIC ---
// Remember to set your actual relationship start date here!
const relationshipStart = new Date('2024-08-26T20:00:00'); 
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const diff = now - relationshipStart;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const displayHours = hours.toString().padStart(2, '0');
    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');

    timerElement.innerHTML = `
        <span>${days}<span class="label">Days</span></span>
        <span>${displayHours}<span class="label">Hours</span></span>
        <span>${displayMinutes}<span class="label">Mins</span></span>
        <span>${displaySeconds}<span class="label">Secs</span></span>
    `;
}

setInterval(updateTimer, 1000);
updateTimer();

// --- MUSIC PLAYER LOGIC ---
const playButton = document.getElementById('play-button');
const song = document.getElementById('our-song');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        song.pause();
        playButton.innerHTML = '▶ Play Our Song';
    } else {
        song.play();
        playButton.innerHTML = '❚❚ Pause Song';
    }
    isPlaying = !isPlaying;
});