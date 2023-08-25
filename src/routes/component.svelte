<script>
	export let text = 'Hello World!';
	let editedTExt = text;
	console.log('component rendered');

	$: {
		editedTExt = text.toUpperCase();
	}
</script>

<p>{editedTExt}</p>
