<script>
	import CardTecnologias from '../lib/CardTecnologias.svelte';
	import CardProjetos from '../lib/CardProjetos.svelte';
	import CardFerramentas from '../lib/CardFerramentas.svelte';

	import src from '../images/campusvirtual.png';
	import src1 from '../images/minitwi.png';
	import src2 from '../images/liturgia.png';
	import src3 from '../images/libertah.png';
	import src4 from '../images/encurtadorUsed.png';
	import src5 from '../images/viagebem.png';
	import src6 from '../images/sprintech.png';
	import src7 from '../images/awsproj.png';
	import src8 from '../images/repertoire.png';
	import github from '../images/githubwhite.png';
	import { onMount } from 'svelte';

	function calcularEscalas(larguraOriginal, alturaOriginal, fator) {
		const novaLargura = larguraOriginal * fator;
		const novaAltura = alturaOriginal * fator;
		return { largura: novaLargura, altura: novaAltura };
	}

	onMount(() => {
		const dimensõesEscaladas = calcularEscalas(336, 204, 1.1);
		console.log(dimensõesEscaladas);
	});

	// Exemplo de uso:
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

		<h2 style="margin-bottom: 1rem;">Meus Projetos ..</h2>

		<div class="projetos">
			<CardProjetos
				src={src8}
				imgAlt="Repertoire"
				tituloProjeto="Repertoire"
				description="O Repertoire é uma plataforma intuitiva que permite a músicos, bandas e outros criativos gerenciarem seus repertórios musicais de forma eficiente. (em desenvolvimento)"
				deploy={true}
				tecnologias={['SvelteKit', 'Ruby On Rails', 'PostgresSQL', 'Supabase', 'Vercel']}
				linkDeploy="https://repertoire-seven.vercel.app/"
			/>
			<CardProjetos
				{src}
				imgAlt="Campus Virtual"
				tituloProjeto="Campus Virtual"
				description="Plataforma de gestão acadêmica, para usuários do tipo administrador, aluno e professor. Com funcionalidades como Boletim, Avisos, Rede Social entre outras."
				deploy={true}
				tecnologias={['Vue.js', 'Laravel', 'Inertia.js', 'MySQL']}
				linkDeploy="https://campusvirtualfront.vercel.app/"
			/>
			<CardProjetos
			src={src2}
			imgAlt="Liturgia.site"
			tituloProjeto="Liturgia.site"
			description="Website onde os fiéis podem ler a palavra diária de forma simples e concisa, para isso é consumida uma API Pública que é atualizada diariamente, foi utilizado media queries e flexbox para garantir a responsividade da página."
			deploy={true}
			tecnologias={['SvelteKit', 'TailwindCSS']}
			linkDeploy="https://liturgia-me.vercel.app"
			/>
			<CardProjetos
				src={src7}
				imgAlt="ArticlesWS"
				tituloProjeto="ArticlesWS"
				description="POC (Proof Of Concept) que visa aprofundar o conhecimento em Docekr e tecnologias cloud da AWS, como S3. E também entender uma arquitetura baseada em containers."
				tecnologias={['Ruby', 'Ruby On Rails', 'PostgreSQL', 'TailwindCSS', 'HTML', 'CSS', 'Docker', 'AWS S3', 'AWS RDS', 'AWS ECS']}
				linkDeploy="https://github.com/caiordm/aws-proj"
			/>
			<CardProjetos
				src={src4}
				imgAlt="Encurtador de URL"
				tituloProjeto="Encurtador"
				description="Encurtador de URLs personalizado que gera hashes de 5 dígitos únicos para cada link, proporcionando uma forma concisa e memorável de compartilhar URLs longas e complexas."
				tecnologias={['Ruby', 'Ruby On Rails', 'PostgreSQL', 'SvelteKit']}
				linkDeploy="https://github.com/caiordm/encurta"
			/>
			<CardProjetos
			src={src1}
			imgAlt="Mini Twi"
			tituloProjeto="Mini Twi"
			description="Rede social inspirada no twitter com funcionalidades como CRUD de Usuário, Posts, Paginação e outros conceitos em Ruby On Rails."
			tecnologias={['Ruby', 'Ruby On Rails', 'PostgreSQL', 'HTML', 'CSS', 'Bootstrap']}
			linkDeploy="https://github.com/caiordm/minitwi"
			/>
			<CardProjetos
			src={src5}
			imgAlt="ViageBem🧳"
			tituloProjeto="ViageBem🧳"
			description="Aplicação onde foi utilizada IA (Gemini API) para recomendar pontos turísticos e dar dicas sobre o destino colocado pelo usuário."
			deploy={true}
			tecnologias={['SvelteKit', 'TailwindCSS', 'GeminiAPI']}
			linkDeploy="https://viagebem.vercel.app"
			/>
			<CardProjetos
			src={src6}
			imgAlt="Sprintech"
			tituloProjeto="Sprintech"
			description="Landing Page intuitiva e visualmente atraente para a Sprintech, uma startup de desenvolvimento de software. O objetivo era oferecer uma experiência de usuário fluida, transmitindo a modernidade e simplicidade da marca."
			deploy={true}
			tecnologias={['SvelteKit', 'TailwindCSS']}
			linkDeploy="https://sprintech.net.br"
			/>
			<CardProjetos
				src={src3}
				imgAlt="Banda Libertah"
				tituloProjeto="Banda Libertah"
				description="Landing Page responsiva com design customizado, inspirado no universo musical da banda, para criar uma identidade visual forte e memorável."
				deploy={true}
				tecnologias={['SvelteKit', 'TailwindCSS', 'CSS']}
				linkDeploy="https://bandalibertah.vercel.app"
				/>
		</div>
		<br>
		<span class="outros-projetos">Veja mais projetos no meu <a href="https://github.com/caiordm">GitHub</a></span>
	</div>

	<div class="rigth-content">
		<div class="tecnologias">
			<h2>Tecnologias ..</h2>
			<span>Tecnologias que utilizei em meus projetos</span>
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
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
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
					imgSrc="https://res.cloudinary.com/appmasters-io/image/upload/v1624744345/mysql_87a2317566.png"
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
	<div class="third-content">
		<h2>Ferramentas ..</h2>
		<span>Algumas ferramentas que estou utilizando no momento</span>
		<div class="ferramentas">
			<CardFerramentas
				title="Fedora"
				imgAlt="Fedora"
				subtitle="Sistema operacional"
				imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Fedora-logo.svg/2048px-Fedora-logo.svg.png"
				color="#e6e9ee"
				colorTitle="#123354"
				colorSubtitle="#597088"
				link="https://www.fedoraproject.org/"
			/>
			<CardFerramentas
				title="VS Code"
				imgAlt="VS Code"
				subtitle="Editor de código"
				imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
				color="#1d212d"
				colorTitle="var(--mid-white)"
				link="https://code.visualstudio.com/"
			/>
			<CardFerramentas
				title="Zen Browser"
				imgAlt="Zen Browser"
				subtitle="Navegador Web"
				imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Zen_Browser_logo_%28red_circles%29.svg/2048px-Zen_Browser_logo_%28red_circles%29.svg.png"
				color="#1f1f1f"
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
				title="GitHub"
				imgAlt="GitHub"
				subtitle="Plataforma para controle de versão"
				imgSrc={github}
				color="#040642"
				colorTitle="#fff"
				colorSubtitle="#f1f1f6"
				link="https://github.com"
			/>
			<CardFerramentas
				title="Vercel"
				imgAlt="Vercel"
				subtitle="Plataforma para web"
				imgSrc="https://www.svgrepo.com/show/327408/logo-vercel.svg"
				color="#ffffff"
				colorTitle="#000"
				colorSubtitle="#a1a1a1"
				link="https://vercel.com/"
			/>
			<CardFerramentas
				title="DBeaver"
				imgAlt="DBeaver"
				subtitle="Database Tool"
				imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DBeaver_logo.svg/256px-DBeaver_logo.svg.png"
				color="#42312a"
				colorTitle="var(--mid-white)"
				link="https://dbeaver.io/download/"
			/>
			<CardFerramentas
				title="Anytype"
				imgAlt="Anytype"
				subtitle="Ferramenta de anotações e produtividade"
				imgSrc="https://ecosystem.ipfs.tech/images/projects/icon-anytype.png"
				color="#fef7e9"
				colorTitle="#000"
				colorSubtitle="#252627"
				link="https://anytype.io/"
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

	.projetos {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.outros-projetos {
		width: 100%;
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
		gap: 0.4rem;
		margin-bottom: 2rem;
	}

	.cards-tecnologias {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		margin-top: 2rem;
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
			width: 100%;
			flex-wrap: wrap;
			gap: 0.8rem;
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

		.cards-tecnologias {
			margin-top: 2rem;
			display: flex;
			flex-wrap: wrap;
			gap: 0.8rem;
			max-width: 100%;
		}

		.card-projeto {
			flex-wrap: wrap;
			width: 100%;
			gap: 1rem;
		}
	}
</style>
