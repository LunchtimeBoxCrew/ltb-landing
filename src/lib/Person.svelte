<script lang="ts">

    export let name:string;
    export let description:string;
    export let img:string;

</script>
<div id='wrapper'>
    <img src={img} />
    <div id='infobox' class='ltbgreen white'>
        <h2 class='xl'>
            {name}
        </h2>
        <p>
            {description}
        </p>
    </div>
</div>
<style>
    
    #wrapper {
        height: 16rem;
        width: 32rem;
        margin: 1rem;
        display: flex;
        flex-direction: row;
    }
    #infobox {
        width: 50%;
        padding: 1rem;
        border-radius: 0rem 1rem 1rem 0rem;
    }
    img {
        height: 100%;
        width: 33%;
        overflow-y: hidden;
        object-fit: cover;
        object-position: 50% 50%;
    }

    div.ltbgreen {
        background: #00877C;
    }
    h2.xl {
        font-size: 2rem;
    }
    .white {
        color: white;
    }

</style>