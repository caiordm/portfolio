<script>
	import CardTecnologias from '../lib/CardTecnologias.svelte';
	import CardProjetos from '../lib/CardProjetos.svelte';
	import CardFerramentas from '../lib/CardFerramentas.svelte';

	import src from '../images/campusLanding.png';
	import src1 from '../images/minitwi.png';
	import src2 from '../images/liturgia.png';
	import src3 from '../images/libertah.png';
	import src4 from '../images/encurtadorUsed.png';
	import src5 from '../images/viagebem.png';
	import src6 from '../images/sprintech.png';
</script>

<section>
	<div class="left-content">
		<div class="texts">
			<div class="titles">
				<h1>CAIO</h1>
				<h4>Web Developer</h4>
			</div>
			<span>
				Desenvolvedor de software, fascinado por tecnologia e inovação. Possuo sólidos conhecimentos
				em Ruby On Rails, Laravel e Vue.js, com experiência em desenvolvimento de aplicações web
				responsivas, como o Campus Virtual, onde também desenvolvi habilidades em trabalho em equipe
				e resolução de problemas. Proativo e em constante aprendizado, busco oportunidades para
				aplicar meus conhecimentos em projetos desafiadores e colaborar com equipes
				multidisciplinares.
			</span>
		</div>

		<div class="tecnologias">
			<h2>Tecnologias ..</h2>
			<div class="cards-tecnologias">
				<CardTecnologias
					imgAlt="HTML5"
					title="HTML5"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
					color="#ea3900"
					colorTitle="#fbe4e4"
				/>
				<CardTecnologias
					imgAlt="CSS"
					title="CSS"
					imgSrc="https://logospng.org/download/css-3/logo-css-3-2048.png"
					color="#0074be"
					colorTitle="#fbe4e4"
				/>
				<CardTecnologias
					imgAlt="JavaScript"
					title="JavaScript"
					imgSrc="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
					color="#ffdf00"
					colorTitle="#252627"
				/>
				<CardTecnologias
					imgAlt="Svelte"
					title="Svelte"
					imgSrc="https://miro.medium.com/v2/resize:fit:400/0*r6OTkIa8jyneCBGY.png"
					color="#ff3c00"
					colorTitle="#fbe4e4"
				/>
				<CardTecnologias
					imgAlt="PostgreSQL"
					title="PostgreSQL"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
					color="#ffffff"
					colorTitle="#336791"
				/>
				<CardTecnologias
					imgAlt="PHP"
					title="PHP"
					imgSrc="https://images.vexels.com/media/users/3/166470/isolated/preview/73835fa38fba6d35aff9de603dc5044a-icone-da-linguagem-de-programacao-php.png"
					color="#7377b2"
					colorTitle="#252627 "
				/>
				<CardTecnologias
					imgAlt="Laravel"
					title="Laravel"
					imgSrc="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
					color="#ffffff"
					colorTitle="#ff6d62"
				/>
				<CardTecnologias
					imgAlt="Ruby"
					title="Ruby"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
					color="#900600"
					colorTitle="#fbe4e4"
				/>
				<CardTecnologias
					imgAlt="Ruby On Rails"
					title="Ruby On Rails"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
					color="#ffffff"
					colorTitle="#d30001"
				/>
				<CardTecnologias
					imgAlt="Java"
					title="Java"
					imgSrc="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
					color="#ffffff"
					colorTitle="#ec2d2e"
				/>
				<CardTecnologias
					imgAlt="Figma"
					title="Figma"
					imgSrc="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png"
					color="#2e3139"
					colorTitle="#fbe4e4"
				/>
				<CardTecnologias
					imgAlt="MySQL"
					title="MySQL"
					imgSrc="https://www.tshirtgeek.com.br/wp-content/uploads/2021/08/com031.jpg"
					color="#ffffff"
					colorTitle="#005c87"
				/>
				<CardTecnologias
					imgAlt="TailwindCSS"
					title="TailwindCSS"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
					color="#ffffff"
					colorTitle="#38bdf8"
				/>
			</div>
		</div>
	</div>

	<div class="rigth-content">
		<h2>Projetos ..</h2>
		<div class="projetos">
			<div class="cards-projetos">
				<CardProjetos
					{src}
					imgAlt="Campus Virtual"
					tituloProjeto="Campus Virtual"
					description="Plataforma de gestão acadêmica, para usuários do tipo administrador, aluno e professor. Com funcionalidades como Boletim, Avisos, Rede Social entre outras."
					linkDeploy="https://campusvirtualfront.vercel.app/"
				/>
			</div>
			<div class="cards-projetos">
				<CardProjetos
					src={src3}
					imgAlt="Banda Libertah"
					tituloProjeto="Banda Libertah"
					description="Landing Page para uma banda, feita pra contar a história da banda e também exibir outras informações sobre a banda."
					linkDeploy="https://libertah.site"
				/>
			</div>
			<div class="cards-projetos">
				<CardProjetos
					src={src2}
					imgAlt="Liturgia.site"
					tituloProjeto="Liturgia.site"
					description="Liturgia.site é um website onde os fiéis podem ler a palavra diária de forma simples e concisa, para isso é consumida uma API Pública que é atualizada diariamente"
					linkDeploy="https://liturgia.site"
				/>
			</div>
			<div class="cards-projetos">
				<CardProjetos
					src={src5}
					imgAlt="ViageBem🧳"
					tituloProjeto="ViageBem🧳"
					description="Aplicação onde foi utilizada IA (Gemini API) para recomendar pontos turísticos e dar dicas sobre o destino colocado pelo usuário."
					linkDeploy="https://viagebem.vercel.app"
				/>
			</div>
			<div class="cards-projetos">
				<CardProjetos
					src={src6}
					imgAlt="Sprintech"
					tituloProjeto="Sprintech"
					description="Landing Page da Sprintech, uma startup de desenvolvimento de software, que buscava uma Landing Page moderna e ao mesmo tempo simples."
					linkDeploy="https://sprintech.net.br"
				/>
			</div>
			<!-- <div class="cards-projetos">
				<CardProjetos
					src={src1}
					imgAlt="Mini Twi"
					tituloProjeto="Mini Twi"
					description="Landing Page para uma banda, feita pra contar a história da banda e também exibir outras informações sobre a banda."
					linkDeploy="https://twitter-production-12f4.up.railway.app/"
					/>
			</div> -->
		</div>
		<span class="outros-projetos"
			>Veja mais projetos no meu <a href="https://github.com/caiordm">GitHub</a></span
		>
	</div>
	<div class="third-content">
		<h2>Ferramentas ..</h2>
		<span>Algumas ferramentas que estou utilizando no momento</span>
		<div class="ferramentas">
			<CardFerramentas
				title="Zorin OS"
				imgAlt="Zorin OS"
				subtitle="Sistema operacional"
				imgSrc="https://upload.wikimedia.org/wikipedia/commons/1/14/Zorin_Logomark.svg"
				color="#e6e9ee"
				colorTitle="#123354"
				colorSubtitle="#597088"
				link="https://zorin.com/"
			/>
			<CardFerramentas
				title="VS Code"
				imgAlt="VS Code"
				subtitle="Editor de código"
				imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
				color="#1d212d"
				colorTitle="var(--mid-white)"
			/>
			<CardFerramentas
				title="Zen Browser"
				imgAlt="Zen Browser"
				subtitle="Navegador Web"
				imgSrc="https://zen-browser.app/logos/zen-black.svg"
				color="#0d0c0c"
				colorTitle="var(--mid-white)"
				link="https://zen-browser.app/"
			/>
			<CardFerramentas
				title="Insomnia"
				imgAlt="Insomnia"
				subtitle="API Client"
				imgSrc="https://icon.icepanel.io/Technology/svg/Insomnia.svg"
				color="#150032"
				colorTitle="var(--mid-white)"
				link="https://insomnia.rest/"
			/>
			<CardFerramentas
				title="DBeaver"
				imgAlt="DBeaver"
				subtitle="Database Tool"
				imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DBeaver_logo.svg/256px-DBeaver_logo.svg.png"
				color="#6e98bf"
				colorTitle="var(--mid-white)"
				link="https://dbeaver.io/download/"
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
		flex-direction: column;
		gap: 2rem;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	h1 {
		font-size: 6rem;
		color: var(--mid-white);
		line-height: 4rem;
	}

	h4 {
		font-size: 2rem;
		color: var(--low-white);
	}

	span {
		/* font-family: "DM Sans", serif; */
		max-width: 90%;
		margin-bottom: 0.8rem;

		cursor: default;
		font-size: 16pt;
		color: var(--low-white);
	}

	.texts {
		padding-left: 0.4rem;
		margin-bottom: 2rem;
	}

	.titles {
		max-width: fit-content;
		border-radius: 6px;

		transition: 0.4s all;
	}

	h2 {
		display: flex;
		font-size: 2.6rem;
		color: var(--mid-white);
		gap: 1rem;
		align-items: center;
	}

	.rigth-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.third-content {
		display: flex;
		flex-direction: column;
	}

	.third-content span {
		margin-bottom: 2rem;
	}

	.ferramentas {
		display: flex;
		flex-wrap: wrap;
		gap: 0.1rem;
		justify-content: space-between;
	}

	.cards-tecnologias {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.cards-projetos {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		width: 100%;
	}

	.projetos {
		display: flex;
		flex-direction: column;
		align-items: baseline;
		justify-content: flex-start;
		gap: 2rem;
		width: 100%;
	}

	.outros-projetos {
		align-self: center;
	}

	.outros-projetos a {
		color: var(--low-white);
		font-size: 12pt;
		font-weight: 700;
		padding: 0.4rem 0.6rem;
		border-radius: 30px;
		background-color: #ea84006f;
		border: 1px solid #e9e9e94c;
		text-decoration: none;
	}

	@media (min-width: 2000px) {
		h1 {
			font-size: 100pt;
			margin-top: 15%;
		}

		h2 {
			font-size: 42pt;
		}

		h4 {
			font-size: 32pt;
		}

		span {
			font-size: 24pt;
		}
	}

	@media (max-width: 1440px) {
		h1 {
			font-size: 64pt;
		}

		h2 {
			font-size: 24pt;
		}

		h4 {
			font-size: 18pt;
		}

		span {
			font-size: 14pt;
		}

		.cards-tecnologias {
			max-width: 100%;
		}
	}

	@media (max-width: 948px) {
		.projetos {
			flex-direction: column;
			width: 100%;
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
			gap: 2rem;
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
			max-width: 100%;
		}

		h2 {
			font-size: 2rem;
		}

		.tecnologias {
			padding-left: 0.5rem;
		}

		.cards-tecnologias {
			margin-top: 1rem;
			display: flex;
			flex-wrap: wrap;
			gap: 0.8rem;
			max-width: 100%;
		}

		.cards-projetos {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			gap: 1rem;
		}
		.projetos {
			flex-direction: column;
			width: 100%;
			gap: 1rem;
		}
	}
</style>
