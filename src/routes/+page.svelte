<svelte:head>
    <title>Start | iamnikl</title>
    <meta name="description" content="Start - iamnikl">
</svelte:head>
<script>
    import runMain from "./start-page"
    import { onMount } from "svelte";
    import { StartInformations } from "./start-page";
    import CardMain from "./start/components/card-main.svelte";
    import Saos from "saos";

    onMount(()=> {
        runMain()
    })

</script>
<style>

</style>
<hgroup class="center">
    <h1>&nbsp;</h1>
    <h2>Web Development</h2>
    <p>Web Developer from Germany with knowledge about various <code>Frontend</code> and <code>Backend</code> technologies. Development with JavaScript, TypeScript, SvelteKit, HTML, SCSS, CSS and Python.</p>
</hgroup>
<main>
    <div class="button-wrapper">
    </div>
    <div style="display: flex; align-items: center; flex-direction: column; gap: 20px">
        {#each StartInformations as StartInformations}
            <CardMain>
                <h1 slot="header">{StartInformations.header}</h1>
                <p slot="text-content">{StartInformations.textContent}</p>
                <span slot="code-file-name">{StartInformations.codeFileName}</span>
                <div class="code-example" slot="code-content">
                    {#each StartInformations.codeContent as element}
                        <div>{element}</div>
                    {/each}
                </div>
            </CardMain>
        {/each}

    </div>
</main>
