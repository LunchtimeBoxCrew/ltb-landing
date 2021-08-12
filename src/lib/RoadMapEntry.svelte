<script lang="ts">
	import { slide } from 'svelte/transition';
	export let name: string;
	export let date: string;
	export let description: string;
    export let image:string;
    export let showDesc:boolean;

    import * as StockImages from "./images/stock";

	function switchDesc() {
		console.log('desc was ' + showDesc);
        showDesc = !showDesc;
	}
</script>
<div class='entry' on:click={switchDesc}>
    <div class='wrapper'>
        <img srcset={StockImages[image]} alt='descriptive image of {name}' />
        <div class='header'>
            <h1 class='heading'>{name}</h1>
            <p class='date'>{date}</p>
        </div>
    </div>
        {#if showDesc}
            <div transition:slide>
                <p class='desc'>{description}</p>
            </div>
    {/if}
</div>

<style lang='scss'>
    @import '../styles/index.scss';
    .entry {
        border-radius: 1rem;
        cursor: pointer;
        width: 50%;
        background-color: #f8f8f8;
        margin-bottom: 4rem;
    }
    .wrapper {
        position: relative;
        overflow: hidden;
        height: 8rem;
        border-radius: 1rem;
    }
    img {
        width: 100%;
    }
    .header {
        position: absolute;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        top: 0;
        left: 0;
    }
    .heading {
        margin: 1rem;
        font-weight: 900;
        color: white;
    }
    .date {
        margin: 1rem;
        font-size: 2rem;
        color: white;
    }
    .desc {
        padding: 1rem;
    }
    .gray {
        background-color: $light-gray;
    }
</style>
