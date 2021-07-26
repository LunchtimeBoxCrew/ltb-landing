<script lang='ts'>
    export let position:string;
    export let name:string;
    export let description:string;

    console.log(position)

</script>
<div id='wrapper'>
    {#if position == 'left'}
    <div class='left element ltbgreen'>
        {name}
        {description}
    </div>
    {:else}
    <div class='right element ltbgreen'>
        {name}
        {description}
    </div>
    {/if}
</div>

<style>
    #wrapper {
        width: 100%;
        padding: 5rem;
    }
    .left {


    }
    .right {
        float: right;
    }
    .element {
        width: 12rem;
        padding: 3rem;
    }
    .ltbgreen {
        background: #00877C;
    }
</style>