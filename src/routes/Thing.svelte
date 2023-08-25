<script lang="ts">
	import { emojis } from './Thing_Object';
	import type { Emoji } from './Thing_Object';
	export let name: Emoji;
	const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
