<svelte:head>
  <title>Trulle123.se</title>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        goto("/en/home");
    });
</script>

<main>
    <div id="hero">
        <h1 id="header">Trulle123.se</h1>

        <p id="header-tagline">Redirecting to <a href="/home">trulle123.se/home</a>…</p>
    </div>
</main>
