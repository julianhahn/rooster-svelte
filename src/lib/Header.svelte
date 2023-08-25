<script>
	let title = 'Boat Adventures';
	let links = ['Home', 'About', 'Contact'];
</script>

<header>
	<h1>{title}</h1>
	<nav>
		{#each links as link}
			<a href={`/${link}`}>{link}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		background-color: #23272c;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		color: #ededed;
		font-size: 2rem;
	}

	nav a {
		margin-left: 1rem;
		color: #ededed;
		text-decoration: none;
	}

	nav a:hover {
		color: #617390;
	}
</style>
