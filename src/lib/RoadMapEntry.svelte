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
    <div class='wrapper' class:opened={showDesc}>
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
        /* width: 50%; */
        max-width: 768px;
        background-color: #f8f8f8;
        margin-bottom: 4rem;
    }
    .wrapper {
        position: relative;
        overflow: hidden;
        height: 10rem;
        border-radius: 13px;
        transition: border-radius 0.5s;
        background: $green;
        &.opened {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    img {
        width: 100%;
        filter: grayscale(1);
        opacity: 0.5;
        
    }
    .header {
        position: absolute;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.3);
    }
    .heading {
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: normal;
        color: white;
    }
    .date {
        /* font-weight: 900; */
        margin: 1rem;
        font-size: 2.3rem;
        color: rgba($color: #FFFFFF, $alpha: 0.6);
    }
    .desc {
        padding: 2.3rem 1.7rem;
    }
    .gray {
        background-color: $light-gray;
    }

    @media (max-width: 768px) {
        .entry {
            width: 100%;
            margin-bottom: 1rem;
        }
    }
</style>
