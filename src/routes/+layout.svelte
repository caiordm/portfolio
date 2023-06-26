<script>
    import logo from "../images/logo.png";
</script>

<main>
	<header>
		<a href="/">
			<img src="{logo}" alt="Logo" />
		</a>
		<div class="contact">
			<a href="https://github.com/caiordm" target="_blank">
				<ion-icon name="logo-github" />
			</a>
			<a href="https://linkedin.com/in/caiordm" target="_blank">
				<ion-icon name="logo-linkedin" />
			</a>
		</div>
	</header>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,500;0,600;1,400;1,500&family=Space+Grotesk:wght@400;500;600;700&display=swap');

	:global(body) {
		background: #fa5700;
		font-family: 'Space Grotesk', sans-serif;

		margin: 0;
		padding: 0;
		box-sizing: border-box;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
	}

    :root {
        --orange: #fa5700;
        --indigo: #08415c;
        --low-white: #fbe4e4;
        --mid-white: #e7f1f5;
    }

    main {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        width: 80%;
    }

    header img {
        max-width: 72px;
    }

    header .contact {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    header a {
        text-decoration: none;
    }

    header ion-icon {
        font-size: 2.4rem;
        color: var(--low-white);
        transition: all 0.2s;
    }

    header ion-icon:hover {
        transform: scale(1.2);
    }

</style>
