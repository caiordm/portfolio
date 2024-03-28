<script>
	export let imgSrc = '';
	export let imgAlt = '';
	export let color = '';
</script>

<div class="card-ferramenta" style="background-color: {color};">
	<img src={imgSrc} alt={imgAlt} />
</div>

<style>
	.card-ferramenta {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		padding: 0.6rem;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		/* 
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18); */
	}

	img {
		width: 3rem;
		height: 3rem;
	}

	@media (max-width: 1440px) {
		.card-ferramenta {
			width: 2rem;
			height: 2rem;
		}

		img {
			width: 2rem;
			height: 2rem;
		}
	}

	@media (max-width: 468px) {
		.card-ferramenta {
			width: 2rem;
			height: 2rem;
		}

		img {
			width: 2.3rem;
			height: 2.3rem;
		}
	}
</style>
