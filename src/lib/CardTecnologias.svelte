<script>
	export let imgSrc = '';
	export let imgAlt = '';
	export let title = '';
	export let color = '';
	export let colorTitle = '';
</script>

<div class="card-tecnologia" style="background-color: {color};">
	<img src={imgSrc} alt={imgAlt} /> <span style="color: {colorTitle};">{title}<span/>
</div>

<style>
	.card-tecnologia {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3rem;
		padding: 0.6rem;
		gap: 1rem;
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

	span {
		font-weight: 500;
	}

	@media (min-width: 2000px) {
		.card-tecnologia {
			height: 4rem;
		}

		img {
			width: 3rem;
			height: 3rem;
		}

		span {
			font-size: 20pt;
		}
	}

	@media (max-width: 1440px) {
		.card-tecnologia {
			height: 2rem;
		}

		img {
			width: 2rem;
			height: 2rem;
		}
	}

	@media (max-width: 468px) {
		.card-tecnologia {
			height: 2rem;
		}

		img {
			width: 2.3rem;
			height: 2.3rem;
		}
	}
</style>
