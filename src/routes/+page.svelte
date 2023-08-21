<script lang="ts">
	let puppy: string;
	let loading = false;

	async function loadPupppy() {
		loading = true;
		const res = await fetch('https://placedog.net/500/280');
		puppy = URL.createObjectURL(await res.blob());
		loading = false;
	}
</script>

<main>
	<button on:click={loadPupppy}> click for puppy </button>
	{#if loading}
		<p>loading...</p>
	{:else if puppy}
		<img src={puppy} alt="puppy" />
	{/if}
</main>

<style style="scss">
	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		flex-direction: column;
		font-family: 'Roboto', sans-serif;
		font-size: 24px;
	}

	button {
		padding: 1rem 2rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
