<script lang="ts">
	import Component from './component.svelte';
	console.log('app page rendered');
	let inputValue = 'Hallo Welt!';
</script>

<main>
	<input type="text" bind:value={inputValue} />
	<Component text={inputValue} />
</main>

<style style="scss">
	main {
		display: flex;
		justify-content: center;
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
