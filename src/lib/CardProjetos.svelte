<script>
	export let tituloProjeto = '';
	export let src = '';
	export let imgAlt = '';
	export let linkDeploy = '';
</script>

<a href={linkDeploy} class="card-projeto" target="_blank">
	<img {src} alt={imgAlt} />
	<h1>{tituloProjeto}</h1>
</a>

<style>
	a {
		text-decoration: none;
		/* margin-top: 1rem; */
	}

	.card-projeto {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	img {
		max-width: 224px;
		min-width: 224px;
		max-height: 136px;
		min-height: 136px;
		border-radius: 6px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		transition: all 0.6s;
	}

	img:hover {
		transform: scale(1.05);
	}

	h1 {
		font-size: 1.4rem;
		color: var(--mid-white);
		transition: all 0.4s;
	}

	h1:hover {
		color: var(--indigo);
	}

	@media (max-width: 1440px) {
		img {
			max-width: 180px;
			min-width: 180px;
			max-height: 110px;
			min-height: 110px;
			border-radius: 6px;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			transition: all 0.6s;
		}
		h1 {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 948px) {
		.card-projeto {
			gap: 0.4rem;
			flex-direction: row;
		}
	}

	@media (max-width: 744px) {
		img {
			max-width: 164px;
			min-width: 164px;
			max-height: 92px;
			min-height: 92px;
		}

		a {
			margin-top: 0;
		}

		.card-projeto {
			gap: 0.4rem;
			flex-direction: row;
		}

		h1 {
			font-size: 1.4rem;
		}
	}
</style>
