        const tracks = [
            { title: "Let's Produce a No.1 Hostess!", cover: "/sitely/ass/index/mb-y3.png", audio: "https://file.garden/Zhc8cm4ERUKAhsSo/goromiclub/Lets%20Produce%20a%20Number%20One%20Hostess.mp3" },
        ];

        let currentTrackIndex = 0;
        const tabsTitle = document.getElementById('tabsTitle');
        const tabsCover = document.getElementById('tabsCover');
        const tabsTrack = document.getElementById('tabsTrack');

        function loadTrack(index) {
            const track = tracks[index];
            tabsTitle.textContent = track.title;
            tabsCover.style.backgroundImage = `url(${track.cover})`;
            tabsTrack.src = track.audio;
            tabsTrack.load();
        }

        function playTrack() {
            tabsTrack.play();
        }

        function pauseTrack() {
            tabsTrack.pause();
        }

        tabsTrack.addEventListener('ended', () => {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            loadTrack(currentTrackIndex);
            playTrack();
        });
        document.getElementById('tabsPlay').addEventListener('click', playTrack);
        document.getElementById('tabsPause').addEventListener('click', pauseTrack);

        loadTrack(currentTrackIndex);