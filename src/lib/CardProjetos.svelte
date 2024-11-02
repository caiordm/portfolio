<script>
	export let tituloProjeto = '';
	export let description = '';
	export let src = '';
	export let imgAlt = '';
	export let linkDeploy = '';
</script>

<a href={linkDeploy} class="card-projeto" target="_blank">
	<img {src} alt={imgAlt} />
	<div class="texts">
		<h1>{tituloProjeto} <strong>Clique para acessar</strong></h1>
		<span>{description}</span>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		/* margin-top: 1rem; */
	}

	.card-projeto {
		display: flex;
		gap: 1rem;
		align-items: start;
		justify-content: center;
		width: 100%;
		padding-bottom: 1rem;
		border-bottom: 2px solid #e9e9e94c;
		padding-top: 1rem;
	}

	img {
		width: 560px;
		height: 335px;
		border-radius: 6px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		transition: all 0.6s;
	}

	img:hover {
		transform: scale(1.01);
	}

	h1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28pt;
		color: var(--mid-white);
		transition: all 0.4s;
		margin: 0;
		width: 100%;
		font-weight: 600;
	}

	span {
		font-size: 16;
		color: var(--low-white);
	}

	.texts {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 2rem 0;
	}

	strong {
		font-size: 12pt;
		font-weight: 700;
		padding: 0.4rem 0.6rem;
		border-radius: 30px;
		background-color: #ea84006f;
		border: 1px solid #e9e9e94c;
		transition: ease 0.4s;
	}

	strong:hover {
		transform: scale(1.05);
	}

	@media (min-width: 2000px) {
		h1 {
			font-size: 42pt;
		}
		span {
			font-size: 28pt;
		}

		strong {
			font-size: 20pt;
		}
	}

	@media (max-width: 1440px) {
		img {
			width: 448px;
			height: 272px;
			border-radius: 6px;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			transition: all 0.6s;
		}
		h1 {
			font-size: 24pt;
		}

		span {
			font-size: 14pt;
		}
	}

	@media (max-width: 948px) {
		.card-projeto {
			gap: 0.6rem;
			flex-direction: row;
		}
		strong {
			font-size: 8pt;
		}
	}

	@media (max-width: 744px) {
		img {
			width: 296px;
			height: 174px;
		}

		a {
			margin-top: 0;
		}

		.card-projeto {
			flex-direction: column;
		}

		h1 {
			font-size: 16pt;
		}

		span {
			font-size: 11pt;
		}

		.texts {
			padding: 0.4rem 0;
			gap: 1rem;
		}
	}
</style>
