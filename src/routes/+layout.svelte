<script>
	import logo from '../images/logo.png';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<main>
	<header>
		<a href="/">
			<img src={logo} alt="Logo" />
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
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap');
    
	:global(body) {
		background: var(--orange);
		background-image: linear-gradient(rgba(31, 31, 31, 0.046) 0.1em, transparent 0.1em),
			linear-gradient(90deg, rgba(34, 34, 34, 0.049) 0.1em, transparent 0.1em);
		background-size: 3em 3em;
		font-family: "Hanken Grotesk", sans-serif;

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
		--low-white: #e0e0e0;
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
