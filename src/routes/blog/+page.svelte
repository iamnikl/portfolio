<svelte:head>
    <title>Blog | iamnikl</title>
</svelte:head>
<script>
    import { onMount } from "svelte";
    import BlogCard from "./blog-card.svelte";
    import { blogposts,  setOpeningListeners} from "./blog-data";

    onMount(() => {
        setOpeningListeners()
    })
</script>

<link rel="stylesheet" href="/style/scss/blog/blog.css">
<hgroup class="center">
    <h1>Blog</h1>
    <h2>Discover the newest informations</h2>
</hgroup>
<main>
    <section class="main-blog-content transition-standard">
        <div class="blog-categorys">
            <div id="filter-none">Home</div>
            <div id="filter-js">JavaScript</div>
            <div id="filter-ts">TypeScript</div>
            <div id="filter-svelte">SvelteKit</div>
            <div id="filter-py">Python</div>
        </div>
        <div class="blog-start-frame">
            {#each blogposts as bp}
                <BlogCard>
                    <img slot="article-image" src={bp.image} alt="">
                    <span slot="article-header" data-post-id={bp.id}>{bp.title}</span>
                    <span slot="article-subheader">{bp.subheader}</span>
                    <span slot="article-preview">{bp.content}</span>
                </BlogCard>
            {/each}
            
            <!-- <BlogCard>
                <span slot="article-header">News!</span>
                <span slot="article-subheader">Finally published the blog!</span>
                <span slot="article-preview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque perferendis enim a quia error voluptates, consectetur cumque mollitia sapiente ratione unde! Officia dolore totam pariatur accusamus nobis! Culpa, aut.</span>
            </BlogCard>
            <BlogCard>
                <img slot="article-image" src="https://bettervanilla.duckdns.org/img/sodium.png" alt="">
                <span slot="article-header">BetterVanilla</span>
                <span slot="article-subheader">View source code on GitHub</span>
                <span slot="article-preview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque perferendis enim a quia error voluptates, consectetur cumque mollitia sapiente ratione unde! Officia dolore totam pariatur accusamus nobis! Culpa, aut.</span>
            </BlogCard>
            <BlogCard>
                <span slot="article-header">Blog</span>
                <span slot="article-subheader">Build with Svelte, SCSS and TypeScript</span>
                <span slot="article-preview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque perferendis enim a quia error voluptates, consectetur cumque mollitia sapiente ratione unde! Officia dolore totam pariatur accusamus nobis! Culpa, aut.</span>
            </BlogCard> -->
        </div>
    </section>
</main>