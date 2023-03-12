<link rel="stylesheet" href="/style/scss/header/header.css">
<style>
    nav > a h1 span{
        color: rgb(77, 139, 255);
    }
    h1 {
        font-family: inherit;
        color: var(--font-color-primary);
    }
    nav {
        z-index: 50;
    }
    nav ul a,
    nav li a {
        color: var(--font-color-primary);
        text-decoration: none;
    }
</style>
<script lang="ts">
    import { openDetailsList, closeDetailsList } from "./header";
</script>
<nav>
    <a href="/" style="text-decoration: none"><h1>iam<span>nikl</span></h1></a>
    <ul>
        <li>
            <details id="projects-header-details" on:mouseover={openDetailsList} on:mouseleave={closeDetailsList} on:focus={openDetailsList}>
                <summary>Projects</summary>
                <ul>
                    <li><a href="/projects/bettervanilla">BetterVanilla</a></li>
                    <li><a href="/projects/niklnoten">NiklNoten</a></li>
                    <li><a href="/projects/niklify-music">Niklify</a></li>
                    <li><a href="/projects/niklpad">Niklpad</a></li>
                </ul>
            </details>
        </li>
        <li>About</li>
        <li>Login</li>
        <li><a href="/blog">Blog</a></li>
    </ul>
</nav>