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
    <div class="hero">
        <h1 class="header">Trulle123.se</h1>

        <p class="header-tagline">Redirecting to <a href="/en/home">trulle123.se/en/home</a>…</p>
    </div>
</main>