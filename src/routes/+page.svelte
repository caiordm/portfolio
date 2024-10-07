<script>
	import CardFerramentas from '../lib/CardFerramentas.svelte';
	import CardProjetos from '../lib/CardProjetos.svelte';

	import src from '../images/campusLanding.png';
	// import src2 from '../images/minitwi.png';
	import src2 from '../images/liturgia.png';
	import src3 from '../images/libertah.png';
	import src4 from '../images/encurtadorUsed.png';
	import src5 from '../images/viagebem.png';
</script>

<section>
	<div class="left-content">
		<div class="texts">
			<div class="titles">
				<h1>CAIO</h1>
				<h4>Web Developer</h4>
			</div>
			<span>
				Desenvolvedor de software, apaixonado por tecnologia e inovação. Possuo sólidos
				conhecimentos em Ruby On Rails, Laravel e Vue.js, com experiência em desenvolvimento de
				aplicações web responsivas, como o Campus Virtual, onde também desenvolvi habilidades em
				trabalho em equipe e resolução de problemas. Proativo e em constante aprendizado, busco
				oportunidades para aplicar meus conhecimentos em projetos desafiadores e colaborar com
				equipes multidisciplinares.
			</span>
		</div>

		<div class="ferramentas">
			<h2>Tecnologias ..</h2>
			<div class="cards-ferramentas">
				<CardFerramentas
					imgAlt="HTML5"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
					color="#ea3900"
				/>
				<CardFerramentas
					imgAlt="CSS"
					imgSrc="https://logospng.org/download/css-3/logo-css-3-2048.png"
					color="#0074be"
				/>
				<CardFerramentas
					imgAlt="JavaScript"
					imgSrc="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
					color="#ffdf00"
				/>
				<CardFerramentas
					imgAlt="Svelte"
					imgSrc="https://miro.medium.com/v2/resize:fit:400/0*r6OTkIa8jyneCBGY.png"
					color="#ff3c00"
				/>
				<CardFerramentas
					imgAlt="PHP"
					imgSrc="https://images.vexels.com/media/users/3/166470/isolated/preview/73835fa38fba6d35aff9de603dc5044a-icone-da-linguagem-de-programacao-php.png"
					color="#7377b2"
				/>
				<CardFerramentas
					imgAlt="Laravel"
					imgSrc="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
					color="#ffffff"
				/>
				<CardFerramentas
					imgAlt="Java"
					imgSrc="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
					color="#ffffff"
				/>
				<CardFerramentas
					imgAlt="Ruby"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
					color="#900600"
				/>
				<CardFerramentas
					imgAlt="Figma"
					imgSrc="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png"
					color="#2e3139"
				/>
				<CardFerramentas
					imgAlt="MySQL"
					imgSrc="https://www.tshirtgeek.com.br/wp-content/uploads/2021/08/com031.jpg"
					color="#ffffff"
				/>
			</div>
		</div>
	</div>

	<div class="rigth-content">
		<h2>Projetos ..</h2>
		<div class="projetos">
			<div class="cards-projetos">
				<CardProjetos
					src={src3}
					imgAlt="Banda Libertah"
					tituloProjeto="Banda Libertah"
					linkDeploy="https://bandalibertah.vercel.app"
				/>
			</div>
			<div class="cards-projetos">
				<CardProjetos
					{src}
					imgAlt="Campus Virtual"
					tituloProjeto="Campus Virtual"
					linkDeploy="https://campusvirtualfront.vercel.app/"
				/>
			</div>
		</div>
		<div class="projetos2">
			<div class="cards-projetos">
				<CardProjetos
					src={src2}
					imgAlt="Liturgia.site"
					tituloProjeto="Liturgia.site"
					linkDeploy="https://liturgia.site"
				/>
			</div>
			<div class="cards-projetos">
				<CardProjetos
					src={src5}
					imgAlt="ViageBem🧳"
					tituloProjeto="ViageBem🧳"
					linkDeploy="https://viagebem.vercel.app"
				/>
			</div>
			<!-- <div class="cards-projetos">
				<CardProjetos
					src={src2}
					imgAlt="Mini Twi"
					tituloProjeto="Mini Twi"
					linkDeploy="https://twitter-production-12f4.up.railway.app/"
				/>
			</div> -->
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
		gap: 2rem;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.left-content {
		width: 60%;
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
		padding-left: 1.6rem;
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
		gap: 1.5rem;
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
		display: flex;
		align-items: baseline;
		justify-content: flex-start;
		gap: 3rem;
	}

	.projetos2 {
		display: flex;
		align-items: baseline;
		justify-content: flex-start;
		gap: 3rem;
	}

	@media (min-width: 2000px) {
		:global(html) {
			height: 100%;
		}

		:global(header) {
			position: absolute;
			top: 0;
		}
	}

	@media (max-width: 1440px) {
		h1 {
			font-size: 4rem;
		}

		h2 {
			font-size: 2rem;
		}

		h4 {
			font-size: 1.4rem;
		}

		span {
			font-size: 1rem;
		}

		.cards-ferramentas {
			max-width: 100%;
		}
	}

	@media (max-width: 948px) {
		.projetos {
			flex-direction: column;
			max-width: 100%;
			gap: 1rem;
		}

		.projetos2 {
			flex-direction: column;
			max-width: 100%;
			gap: 1rem;
		}
	}

	@media (max-width: 744px) {
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
		.projetos {
			flex-direction: column;
			max-width: 100%;
			gap: 1rem;
		}

		.projetos2 {
			flex-direction: column;
			max-width: 100%;
			gap: 1rem;
		}
	}
</style>
