const music = document.getElementById("bgMusic");
        const musicBtn = document.getElementById("musicBtn");
        let isPlaying = true;

        musicBtn.addEventListener("click", () => {
            if (isPlaying) {
                music.pause();
                musicBtn.textContent = "Play 🎵";
            } else {
                music.play();
                musicBtn.textContent = "Pause ⏸️";
            }
            isPlaying = !isPlaying;
        });