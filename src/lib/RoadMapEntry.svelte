<script lang='ts'>
    import { slide } from 'svelte/transition';
    export let name:string;
    export let date:string;
    export let description:string;
    export let image:string;

    let showDesc = false;
    function switchDesc() {
        console.log('desc was '+showDesc);
        showDesc ? showDesc = false : showDesc = true;
    }

</script>
<div id='wrapper' class='gray' on:click={switchDesc} style='--bg-image = {image}'>
    <h2>{name}</h2>
    <p>{date}</p>
    {#if showDesc}
    <div transition:slide>
        {description}
    </div>
    {/if}
</div>

<style>
    #wrapper {
        background-image: url(--bg-image);
        width: 50%;
        border-radius: 1rem;
        padding: 1rem;
        margin: 1rem;
        transition: background-color .5s ease-in-out;
    }
    #wrapper:hover {
            background-color: darkgray;
        }
    .gray {
        background-color: #f8f8f8;
    }
</style>