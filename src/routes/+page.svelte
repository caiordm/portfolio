<script>
	import CardFerramentas from '../components/CardFerramentas.svelte';
	import CardProjetos from '../components/CardProjetos.svelte';
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
			<h2>
				Tecnologias
				<h3 style="color: var(--indigo);">.</h3>
			</h2>
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
			<h2>
				Projetos
				<h3 style="color: var(--indigo);">.</h3>
			</h2>
		</div>
		<div class="cards-projetos">
			<CardProjetos
				imgSrc="/src/assets/CampusLanding.png"
				imgAlt="Campus Virtual"
				tituloProjeto="Campus Virtual"
				linkDeploy="https://campusvirtualfront.vercel.app/"
			/>
		</div>
		<!-- <div class="cards-projetos">
			<CardProjetos
				imgSrc="https://i.pinimg.com/originals/97/08/0b/97080bfdcd2030df7116c7be1d451573.png"
				imgAlt="Campus Virtual"
				tituloProjeto="Teste"
			/>
		</div> -->
	</div>
</section>

<style>
	* {
		margin: 0;
	}

	section {
		margin: 1rem 7rem 0rem 7rem;
		display: flex;
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
	}

	span {
		display: block;
		max-width: 75%;
		padding-left: 2rem;
		margin-bottom: 0.8rem;

		cursor: default;
		font-size: 1.4rem;
		color: var(--low-white);
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
		flex-direction: row;
		font-size: 2.6rem;
		color: var(--mid-white);
		gap: 1rem;
		align-items: center;
	}

	.cards-ferramentas {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		max-width: 50%;
	}

	.cards-projetos {
		display: flex;
		flex-wrap: wrap;
		max-width: 40%;
		gap: 1rem;
	}
</style>
