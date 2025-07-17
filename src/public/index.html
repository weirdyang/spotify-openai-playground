<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >
    <title>SoundTrackr - Discover Your Twitter Sound</title>
    <meta
        name="description"
        content="SoundTrackr turns your Twitter profile into music recommendations that match your personality."
    >

    <meta
        property="og:type"
        content="website"
    >
    <meta
        property="og:url"
        content="https://zesty-paletas-8c1f97.netlify.app/"
    >
    <meta
        property="og:title"
        content="SoundTrackr - Discover Your Twitter Sound"
    >
    <meta
        property="og:description"
        content="Turn your Twitter profile into a personalized music experience."
    >
    <meta
        property="og:image"
        content="https://zesty-paletas-8c1f97.netlify.app/meta-image.png"
    >

    <meta
        property="twitter:card"
        content="summary_large_image"
    >
    <meta
        property="twitter:url"
        content="https://zesty-paletas-8c1f97.netlify.app/"
    >
    <meta
        property="twitter:title"
        content="SoundTrackr - Discover Your Twitter Sound"
    >
    <meta
        property="twitter:description"
        content="Turn your Twitter profile into a personalized music experience."
    >
    <meta
        property="twitter:image"
        content="https://zesty-paletas-8c1f97.netlify.app/meta-image.png"
    >

    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
        rel="stylesheet"
    >
    <style>
        :root {
            --primary: #1ED760;
            /* Brighter Spotify Green */
            --secondary: #282828;
            /* Darker, richer grey */
            --text: #E0E0E0;
            /* Lighter text for contrast */
            --text-secondary: #A7A7A7;
            /* Slightly darker secondary text */
            --background: #191414;
            /* Spotify Black */
            --card-bg: #1F1F1F;
            /* Slightly lighter card background */
            --hover: #3A3A3A;
            /* Even lighter hover for subtle pop */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
            /* Use Montserrat for a modern feel */
        }

        body {
            background-color: var(--background);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background-image: radial-gradient(at 20% 70%, #1a1a1a 0%, transparent 50%),
                radial-gradient(at 80% 20%, #0a0a0a 0%, transparent 50%);
            background-repeat: no-repeat;
        }

        .container {
            max-width: 850px;
            /* Slightly wider container */
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
        }

        header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .logo {
            font-size: 3.5rem;
            /* Larger logo */
            font-weight: 800;
            letter-spacing: -2px;
            margin-bottom: 0.75rem;
            background: linear-gradient(90deg, var(--primary), #64CCC5);
            /* A cooler blue-green for the gradient */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .tagline {
            color: var(--text-secondary);
            font-size: 1.25rem;
            /* Slightly larger tagline */
            font-weight: 400;
        }

        .section-card {
            background-color: var(--card-bg);
            padding: 2.5rem;
            /* More padding */
            border-radius: 16px;
            /* More rounded corners */
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            /* Stronger, softer shadow */
            border: 1px solid rgba(255, 255, 255, 0.05);
            /* Subtle border */
        }

        .input-group {
            display: flex;
            gap: 1.25rem;
            /* More space between input and button */
            align-items: center;
        }

        input {
            flex: 1;
            background-color: var(--secondary);
            border: 1px solid var(--hover);
            /* Subtle border on input */
            border-radius: 30px;
            color: var(--text);
            padding: 1.1rem 1.8rem;
            /* More padding */
            font-size: 1.05rem;
            outline: none;
            transition: all 0.3s ease;
        }

        input:focus {
            box-shadow: 0 0 0 3px var(--primary);
            /* Thicker focus ring */
            border-color: var(--primary);
        }

        input::placeholder {
            color: var(--text-secondary);
            opacity: 0.7;
            /* Slightly faded placeholder */
        }

        button {
            background-color: var(--primary);
            color: var(--background);
            /* Dark text on green button */
            border: none;
            border-radius: 30px;
            padding: 1rem 2.5rem;
            /* More padding */
            font-size: 1.05rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: 0.5px;
            /* Subtle letter spacing */
        }

        button:hover {
            transform: translateY(-3px) scale(1.02);
            /* Lift and slightly enlarge */
            box-shadow: 0 5px 15px rgba(30, 215, 96, 0.4);
            /* Green shadow on hover */
        }

        #errorMessage {
            color: #FF6B6B;
            /* A more modern red for errors */
            text-align: center;
            margin-top: 1.5rem;
            font-size: 0.95rem;
            font-weight: 600;
        }


        .loader {
            display: none;
            text-align: center;
            padding: 3rem;
            /* More padding for loader */
        }

        .pulse {
            width: 50px;
            /* Larger pulse */
            height: 50px;
            background-color: var(--primary);
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            /* More margin below pulse */
            animation: pulse 1.8s infinite ease-in-out;
            box-shadow: 0 0 0 0 rgba(30, 215, 96, 0.7);
            /* Initial shadow for pulse */
        }

        @keyframes pulse {
            0% {
                transform: scale(0.8);
                opacity: 0.6;
                box-shadow: 0 0 0 0 rgba(30, 215, 96, 0.7);
            }

            50% {
                transform: scale(1.1);
                /* Slightly larger scale */
                opacity: 1;
                box-shadow: 0 0 0 15px rgba(30, 215, 96, 0);
                /* Expanding shadow */
            }

            100% {
                transform: scale(0.8);
                opacity: 0.6;
                box-shadow: 0 0 0 0 rgba(30, 215, 96, 0);
            }
        }

        .loader p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
        }

        .wave-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            /* Height for the wave animation */
        }

        .wave {
            display: inline-block;
            height: 25px;
            /* Taller waves */
            width: 4px;
            /* Thicker waves */
            background: var(--primary);
            margin: 0 3px;
            border-radius: 2px;
            animation: wave 1s infinite ease-in-out;
            opacity: 0.8;
            /* Slightly transparent */
        }

        .wave:nth-child(2) {
            animation-delay: 0.15s;
        }

        .wave:nth-child(3) {
            animation-delay: 0.3s;
        }

        .wave:nth-child(4) {
            animation-delay: 0.45s;
        }

        @keyframes wave {

            0%,
            40%,
            100% {
                transform: scaleY(0.4);
            }

            20% {
                transform: scaleY(1);
            }
        }

        .result-container {
            display: none;
        }

        .profile-header {
            display: flex;
            align-items: center;
            padding: 2rem;
            /* More padding */
            background-color: var(--secondary);
            border-top-left-radius: 14px;
            border-top-right-radius: 14px;
            /* Match card border-radius */
            margin-bottom: 1px;
            /* To avoid gap with song card */
            box-shadow: inset 0 -3px 8px rgba(0, 0, 0, 0.2);
            /* Subtle inner shadow */
        }

        .profile-pic {
            width: 90px;
            /* Larger profile pic */
            height: 90px;
            border-radius: 50%;
            margin-right: 2rem;
            /* More space */
            border: 4px solid var(--primary);
            /* Thicker border */
            object-fit: cover;
            box-shadow: 0 0 0 5px rgba(30, 215, 96, 0.2);
            /* Subtle glow */
        }

        .profile-info h2 {
            font-size: 1.8rem;
            /* Larger handle display */
            margin-bottom: 0.6rem;
            font-weight: 700;
        }

        .profile-info p {
            color: var(--text-secondary);
            font-size: 1.1rem;
        }

        .song-container {
            padding: 2.5rem;
            /* Consistent padding with section card */
        }

        .song-label {
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            /* More letter spacing */
            color: var(--primary);
            margin-bottom: 1.5rem;
            /* More space */
            font-weight: 600;
            text-align: center;
        }

        .song-card {
            display: flex;
            align-items: center;
            background-color: var(--secondary);
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.4s ease-in-out;
            /* Slower transition */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            /* Initial subtle shadow */
        }

        .song-card:hover {
            background-color: var(--hover);
            transform: translateY(-8px) scale(1.01);
            /* Lift more and slightly enlarge */
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
            /* More prominent shadow */
        }

        .album-cover {
            width: 150px;
            /* Larger album cover */
            height: 150px;
            object-fit: cover;
            border-right: 3px solid var(--primary);
            /* Accent line */
        }

        .song-details {
            padding: 1.5rem 2rem;
            /* More padding */
            flex: 1;
        }

        .song-title {
            font-size: 1.8rem;
            /* Larger title */
            font-weight: 700;
            margin-bottom: 0.6rem;
            color: var(--text);
        }

        .song-artist {
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin-bottom: 1.2rem;
        }

        .spotify-button {
            display: inline-flex;
            align-items: center;
            background-color: var(--primary);
            color: var(--background);
            text-decoration: none;
            padding: 0.9rem 1.6rem;
            border-radius: 30px;
            font-weight: 700;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
        }

        .spotify-button:hover {
            background-color: #1ed760;
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(30, 215, 96, 0.4);
        }

        .spotify-icon {
            margin-right: 0.6rem;
            width: 22px;
            height: 22px;
        }

        footer {
            margin-top: 3.5rem;
            /* More space from content */
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
            opacity: 0.8;
        }

        @media (max-width: 768px) {
            body {
                padding: 1.5rem;
            }

            .container {
                gap: 2rem;
            }

            .logo {
                font-size: 3rem;
            }

            .tagline {
                font-size: 1.1rem;
            }

            .section-card {
                padding: 2rem;
            }

            .input-group {
                flex-direction: column;
                gap: 1rem;
            }

            button {
                width: 100%;
                padding: 1.1rem 2rem;
            }

            .profile-header {
                flex-direction: column;
                text-align: center;
                padding: 1.5rem;
            }

            .profile-pic {
                margin-right: 0;
                margin-bottom: 1.2rem;
                width: 80px;
                height: 80px;
            }

            .profile-info h2 {
                font-size: 1.6rem;
            }

            .profile-info p {
                font-size: 1rem;
            }

            .song-container {
                padding: 1.5rem;
            }

            .song-card {
                flex-direction: column;
            }

            .album-cover {
                width: 100%;
                height: auto;
                border-right: none;
                border-bottom: 3px solid var(--primary);
                /* Accent line for vertical layout */
            }

            .song-details {
                padding: 1.5rem;
                text-align: center;
            }

            .song-title {
                font-size: 1.6rem;
            }

            .song-artist {
                font-size: 1rem;
            }
        }

        @media (max-width: 480px) {
            .logo {
                font-size: 2.5rem;
            }

            .tagline {
                font-size: 1rem;
            }

            .section-card {
                padding: 1.5rem;
            }

            input {
                padding: 0.9rem 1.2rem;
                font-size: 0.95rem;
            }
        }


        /* Animation classes (kept mostly the same, adjusted slightly for new styles) */
        .fade-in {
            animation: fadeIn 0.6s ease-out forwards;
            /* Slightly longer and uses forwards to stay at final state */
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <header>
            <h1 class="logo">SoundTrackr</h1>
            <p class="tagline">Discover the music that matches your Twitter vibe</p>
        </header>

        <div class="search-box section-card fade-in">
            <div class="input-group">
                <input
                    type="text"
                    id="twitterHandle"
                    placeholder="Enter Twitter handle (e.g., elonmusk)"
                >
                <button id="discoverBtn">Discover My Sound</button>
            </div>
            <p
                id="errorMessage"
                style="display: none;"
            ></p>
        </div>

        <div
            id="loader"
            class="loader"
        >
            <div class="pulse"></div>
            <p>Analyzing your Twitter personality...</p>
            <div class="wave-container">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </div>

        <div
            id="resultContainer"
            class="result-container section-card fade-in"
        >
            <div class="profile-header">
                <img
                    id="profilePic"
                    class="profile-pic"
                    src=""
                    alt="Twitter Profile Picture"
                >
                <div class="profile-info">
                    <h2 id="handleDisplay"></h2>
                    <p id="genreDisplay"></p>
                </div>
            </div>

            <div class="song-container">
                <div class="song-label">Your Personality Soundtrack</div>
                <div class="song-card">
                    <img
                        id="albumCover"
                        class="album-cover"
                        src=""
                        alt="Album Cover"
                    >
                    <div class="song-details">
                        <div
                            class="song-title"
                            id="songTitle"
                        ></div>
                        <div
                            class="song-artist"
                            id="songArtist"
                        ></div>
                        <a
                            id="spotifyLink"
                            class="spotify-button"
                            href="#"
                            target="_blank"
                        >
                            <svg
                                class="spotify-icon"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                                />
                            </svg>
                            Listen on Spotify
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <p>© 2025 SoundTrackr · Using AI to match your Twitter persona with music</p>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const twitterHandleInput = document.getElementById('twitterHandle');
            const discoverBtn = document.getElementById('discoverBtn');
            const loader = document.getElementById('loader');
            const resultContainer = document.getElementById('resultContainer');
            const profilePic = document.getElementById('profilePic');
            const handleDisplay = document.getElementById('handleDisplay');
            const genreDisplay = document.getElementById('genreDisplay');
            const albumCover = document.getElementById('albumCover');
            const songTitle = document.getElementById('songTitle');
            const songArtist = document.getElementById('songArtist');
            const spotifyLink = document.getElementById('spotifyLink');
            const errorMessage = document.getElementById('errorMessage');

            // Add event listeners
            discoverBtn.addEventListener('click', fetchData);
            twitterHandleInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    fetchData();
                }
            });

            async function fetchData() {
                const handle = twitterHandleInput.value.trim();

                // Clear previous error messages
                errorMessage.style.display = 'none';

                if (!handle) {
                    showError('Please enter a Twitter handle');
                    return;
                }

                // Remove @ if user entered it
                const cleanedHandle = handle.startsWith('@') ? handle.substring(1) : handle;

                // Show loader
                loader.style.display = 'block';
                resultContainer.style.display = 'none';

                try {
                    const response = await fetch(`/.netlify/functions/analyze?q=${cleanedHandle}`);

                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }

                    const data = await response.json();

                    // Hide loader
                    loader.style.display = 'none';

                    // Update the UI with the fetched data
                    profilePic.src = data.profile;
                    handleDisplay.textContent = '@' + cleanedHandle;
                    genreDisplay.textContent = data.genre;
                    albumCover.src = data.song.img;
                    songTitle.textContent = data.song.name;
                    songArtist.textContent = data.song.artist;
                    spotifyLink.href = data.song.url;

                    // Show result container with animation
                    resultContainer.style.display = 'block';

                    // Scroll to results
                    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Adjusted for better centering
                } catch (error) {
                    console.error('Error:', error);
                    loader.style.display = 'none';
                    showError('Could not analyze this Twitter profile. Please try another handle.');
                }
            }

            function showError(message) {
                errorMessage.textContent = message;
                errorMessage.style.display = 'block';
            }

            // Add hover effects for elements (kept the same, but CSS handles the main visual change)
            const songCard = document.querySelector('.song-card');
            if (songCard) {
                // The main hover effect is now handled by CSS, these JS ones are redundant if not adding more complex logic
                // songCard.addEventListener('mouseover', function () {
                //     this.style.transform = 'scale(1.02)';
                // });

                // songCard.addEventListener('mouseout', function () {
                //     this.style.transform = '';
                // });
            }
        });
    </script>
</body>

</html>
