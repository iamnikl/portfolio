<script lang="ts">
    import { blogposts, getJsonPost, templatePost } from "../blog-data";
    import { onMount } from "svelte";

    let post:any = templatePost;
    onMount(()=> {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('post-id') == '' || urlParams.get('post-id') == null){
            //
        }else {
            post = (getJsonPost(parseInt(urlParams.get('post-id') || "")))
        }

        document.title = `${post.title} | Blog - iamnikl`
    })
</script>

<svelte:head>
    <title>Blog - iamnikl</title>
</svelte:head>
<link rel="stylesheet" href="/style/scss/blog/blog-post.css">
<main class="blog-page-main">
    <hgroup>
        <h1>{post.title}</h1>
        <h2>{post.subheader}</h2>
        <p>by {post.author} | {post.date}</p>
    </hgroup>
    {#each post.content as paragraph}
        <p>{paragraph}</p>
    {/each}
    <img src={post.image} alt="" class="blog-post-image">
    <div class="blog-action-bar">
        <div class="action-menu">
            <div class="like-btn"></div>
            <div class="dislike-btn"></div>
            <div class="share-btn"></div>
            <div class="comment-btn"></div>
        </div>
        <div class="post-comments">
            <p>Kommentare</p>
            <form onsubmit="return false">
                <input name="comment-area" class="comment-input-area" type="text"><button class="btn-standard" type="submit">Senden</button>
            </form>
        </div>
    </div>
</main>