<script>
	export let tituloProjeto = '';
	export let description = '';
	export let src = '';
	export let imgAlt = '';
	export let linkDeploy = '';
	export let deploy = false;
	export let tecnologias = [];
</script>

<a href={linkDeploy} class="card-projeto" target="_blank">
	<img {src} alt={imgAlt} />
	<div class="texts">
		<div class="titles">
			<h1>{tituloProjeto} <strong>{ deploy ? 'Acesse o site aqui' : 'Veja o código-fonte' }</strong></h1>
			<p>{description}</p>
		</div>
		<div class="sect2">
			<h2>Tecnologias</h2>
			<div class="tecnologias">
				{#each tecnologias as tecnologia }
					<span>{tecnologia}</span>
				{/each}
			</div>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}

	.card-projeto {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		align-items: start;
		justify-content: center;
		width: 28%;
		padding: 0.8rem 1rem 0.4rem 0.8rem;
		background-color: #ea85004d;
		border: 1px solid #e9e9e94c;
		border-radius: 10px;
	}

	img {
		width: 100%;
		max-height: 40%;
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

	h2 {
		color: var(--low-white);
		font-size: 14pt;
	}

	p {
		font-size: 16;
		color: var(--low-white);
	}

	.texts {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.2rem;
		height: 80%;
		padding: 0.8rem 0 0.4rem 0;
	}

	.tecnologias {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	span {
		font-size: 10pt;
		font-weight: 600;
		padding: 0.2rem 0.6rem;
		border-radius: 30px;
		background-color: #ea84006f;
		border: 1px solid #e9e9e94c;
		color: #e9e9e9d7;
	}

	strong {
		font-size: 10pt;
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
		p {
			font-size: 28pt;
		}

		strong {
			font-size: 20pt;
		}
	}

	@media (max-width: 1440px) {
		h1 {
			font-size: 16pt;
		}

		p {
			font-size: 13pt;
		}
	}

	@media (max-width: 948px) {
		.card-projeto {
			gap: 0.6rem;
			width: 100%;
		}
		strong {
			font-size: 8pt;
		}
	}

	@media (max-width: 744px) {
		.card-projeto {
			margin-top: 0;
		}

		h1 {
			font-size: 16pt;
		}

		p {
			font-size: 11pt;
		}

		.texts {
			padding: 0.4rem 0;
		}
	}
</style>
