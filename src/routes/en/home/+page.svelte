<svelte:head>
    <title>Trulle123.se • Home</title>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { calculateAge, toggleLanguage, getLanguageLabel } from "$lib/main";

    let yearsAgo = $state(15.099999999);

    onMount(() => {
        yearsAgo = calculateAge();
        const interval = setInterval(() => {
            yearsAgo = calculateAge();
        }, 100);
        return () => clearInterval(interval);
    });
</script>

<main>
    <a href={toggleLanguage(page.url.pathname)} class="lang-button">
        {getLanguageLabel(page.url.pathname)}
        <img src="https://cdn.hackclub.com/019e2be1-42bc-75c2-bed5-a02373a8d12f/globe.svg" alt="Globe" class="lang-globe">
    </a>

    <div class="hero">
        <h1 class="header">
            Wello, I'm Trulle123
            <img
                src="https://emoji.slack-edge.com/T09V59WQY1E/hii/4de17234f4b1afe8.gif"
                alt="Wave"
                class="wave-emoji"
            />
        </h1>

        <p class="header-tagline">I'm a <span class="age">{yearsAgo.toFixed(9)}</span>-year-old from Sweden who likes coding and photography.</p>
        <hr>
    </div>
</main>