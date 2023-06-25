<script>
	export let tituloProjeto = '';
	export let imgSrc = '';
	export let imgAlt = '';
	export let linkDeploy = '';
</script>

<a href={linkDeploy} class="card-projeto" target="_blank">
	<img src={imgSrc} alt={imgAlt} />
	<h1>{tituloProjeto}</h1>
</a>

<style>
	a {
		text-decoration: none;
		margin-top: 1rem;
	}

	.card-projeto {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.6rem;
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
		font-size: 2rem;
		color: var(--mid-white);
		transition: all 0.4s;
	}

	h1:hover {
		color: var(--indigo);
	}
</style>
