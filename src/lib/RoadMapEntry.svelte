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
<div id='entry' on:click={switchDesc}>
    <div id='wrapper'>
        <img src={image} alt='descriptive image of {name}' />
        <div id='header'>
            <h1 id='heading'>{name}</h1>
            <p id='date'>{date}</p>
        </div>
    </div>
        {#if showDesc}
    <div transition:slide>
        <p style='margin: 1rem'>{description}</p>
    </div>
    {/if}
</div>

<style>
    #entry {
        border-radius: 1rem;
        width: 50%;
        background-color: #f8f8f8;
        margin-bottom: 4rem;
    }
    #wrapper {
        position: relative;
        overflow: hidden;
        height: 6rem;
        border-radius: 1rem;
    }
    img {
        width: 100%;
    }
    #header {
        position: absolute;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        top: 0;
        left: 0;
    }
    #heading {
        margin: 1rem;
        font-weight: 900;
        color: white;
    }
    #date {
        margin: 1rem;
        font-size: 2rem;
        color: white;
    }
    .gray {
        background-color: #f8f8f8;
    }
</style>