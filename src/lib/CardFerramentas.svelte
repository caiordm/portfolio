<script>
	export let imgSrc = '';
	export let imgAlt = '';
	export let title = '';
	export let subtitle = '';
	export let color = '';
	export let colorTitle = '';
	export let colorSubtitle = '';
	export let link = '';
</script>

<a href={link} target="_blank" class="card-ferramenta" style="background-color: {color};">
	<img src={imgSrc} alt={imgAlt} />
	<div class="texts">
		<h1 style="color: {colorTitle};">{title}</h1>
		<span style="color: {colorSubtitle};">{subtitle}</span>
	</div>
</a>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		width: 12rem;
		padding: 1rem 0.4rem;
		gap: 1rem;
		border-radius: 24px;
		border: 2px solid rgba(128, 128, 128, 0.273);
		text-decoration: none;
		/* 
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18); */
	}

	img {
		width: 5rem;
		height: 5rem;
	}

	h1 {
		font-weight: 500;
		font-size: 12pt;
		margin: 0;
	}

	span {
		font-weight: 500;
		font-size: 10pt;
		color: var(--low-white);
	}

	.texts {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 2000px) {
		a {
            height: 6rem;
            width: 15rem;
			padding: 1.4rem 1.6rem;
			margin-bottom: 0.6rem;
			justify-content: start;
		}

		h1 {
			font-size: 16pt;
		}

		span {
			font-size: 14pt;
		}
	}

	@media (max-width: 1440px) {
		.card-ferramenta {
			height: 4rem;
		}

		img {
			width: 4rem;
			height: 4rem;
		}
	}

	@media (max-width: 768px) {
		img {
			width: 3rem;
			height: 3rem;
		}

		a {
			width: 100%;
			padding: 0.6rem 1.4rem;
			margin-bottom: 0.6rem;
			justify-content: start;
		}
	}
</style>
