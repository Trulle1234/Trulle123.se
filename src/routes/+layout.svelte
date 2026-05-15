<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="https://cdn.hackclub.com/019e2b3c-f32f-7f82-847f-6d3fe485eca0/pfp.png" />

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300..900&display=swap">
</svelte:head>

{@render children()}