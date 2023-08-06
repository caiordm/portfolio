<script>
	import CardFerramentas from '../lib/CardFerramentas.svelte';
	import CardProjetos from '../lib/CardProjetos.svelte';

	import src from '../images/campusLanding.png';
	import css from '../images/css-3.png';
</script>

<section>
	<div class="left-content">
		<div class="texts">
			<div class="titles">
				<h1>CAIO</h1>
				<h4>Web Developer</h4>
			</div>
			<span
				>From Pernambuco, Brasil. Estudo desenvolvimento de softwares desde 2019, e desde então
				venho aprimorando meus conhecimentos</span
			>
		</div>

		<div class="ferramentas">
			<h2>Tecnologias</h2>
			<div class="cards-ferramentas">
				<CardFerramentas
					imgAlt="HTML5"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
				/>
				<CardFerramentas
					imgAlt="CSS"
					imgSrc="https://logospng.org/download/css-3/logo-css-3-2048.png"
				/>
				<CardFerramentas
					imgAlt="JavaScript"
					imgSrc="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
				/>
				<CardFerramentas
					imgAlt="Svelte"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png"
				/>
				<CardFerramentas
					imgAlt="PHP"
					imgSrc="https://logospng.org/download/php/logo-php-1024.png"
				/>
				<CardFerramentas
					imgAlt="MySQL"
					imgSrc="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
				/>
				<CardFerramentas
					imgAlt="Figma"
					imgSrc="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png"
				/>
			</div>
		</div>
	</div>

	<div class="rigth-content">
		<div class="projetos">
			<h2>Projetos</h2>
		</div>
		<div class="cards-projetos">
			<CardProjetos
				{src}
				imgAlt="Campus Virtual"
				tituloProjeto="Campus Virtual"
				linkDeploy="https://campusvirtualfront.vercel.app/"
			/>
		</div>
		<div class="cards-projetos">
			<CardProjetos
				src="https://uploads-ssl.webflow.com/5ea82056771c9dd4b6f61bdc/60d0889c139877fe45366e87_Blog_main_improve_ad_quality_Dean_20210621.png"
				imgAlt="Apenas um Teste"
				tituloProjeto="Teste"
			/>
		</div>
	</div>
</section>

<style>
	* {
		margin: 0;
	}

	section {
		max-width: 80%;
		display: flex;
		gap: 4rem;
		justify-content: space-around;
	}

	.left-content {
		width: 50%;
	}

	h1 {
		font-size: 6rem;
		color: var(--mid-white);
		line-height: 4rem;
	}

	h4 {
		font-size: 2rem;
		padding-left: 0.5rem;
		color: var(--low-white);
		font-family: 'IBM Plex Mono', monospace;
	}

	span {
		display: block;
		max-width: 90%;
		padding-left: 2rem;
		margin-bottom: 0.8rem;

		cursor: default;
		font-size: 1.4rem;
		color: var(--low-white);
		font-family: 'IBM Plex Mono', monospace;
	}

	.titles {
		padding: 1rem;
		max-width: fit-content;
		cursor: none;
		border-radius: 6px;

		transition: 0.4s all;
	}

	.titles:hover {
		box-shadow: rgba(0, 0, 0, 0.3) 0px 9px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
	}

	.ferramentas {
		padding-left: 2rem;
	}

	h2 {
		display: flex;
		font-size: 2.6rem;
		color: var(--mid-white);
		gap: 1rem;
		align-items: center;
	}

	.rigth-content {
		width: min-content;
		display: flex;
		flex-direction: column;
	}

	.cards-ferramentas {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		max-width: 70%;
	}

	.cards-projetos {
		display: flex;
		flex-wrap: wrap;
		max-width: 40%;
		gap: 1rem;
	}

	.projetos {
		max-width: fit-content;
	}

	@media (max-width: 468px) {
		section {
			flex-direction: column;
			gap: 2rem;
		}

		.left-content,
		.rigth-content {
			width: 100%;
		}

		.rigth-content {
			padding-left: 0.5rem;
			gap: 1rem;
		}

		.titles {
			padding: 0 0 1rem 0;
		}

		h1 {
			font-size: 4rem;
		}

		h4 {
			font-size: 1.4rem;
		}

		span {
			font-size: 1rem;
			padding-left: 0.5rem;
			max-width: 100%;
		}

		h2 {
			font-size: 2rem;
		}

		.ferramentas {
			padding-left: 0.5rem;
		}

		.cards-ferramentas {
			margin-top: 1rem;
			display: flex;
			flex-wrap: wrap;
			gap: 0.8rem;
			max-width: 100%;
		}

		.cards-projetos {
			display: flex;
			flex-wrap: wrap;
			max-width: 100%;
			gap: 1rem;
		}
	}
</style>
