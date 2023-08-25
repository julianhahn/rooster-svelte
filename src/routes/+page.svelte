<script lang="ts">
	import Thing from './Thing.svelte';
	import type { Emoji } from './Thing_Object';

	let things: { id: number; name: Emoji }[] = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];
</script>

<main>
	<button
		on:click={() => {
			things = things.slice(1);
		}}
	>
		remove top item</button
	>
	<div class="items"></div>
	{#each things as thing (thing.id)}
		<Thing name={thing.name} />
	{/each}
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
