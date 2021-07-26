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
        <p class='m'>
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
        border: 1rem 0 0 1rem;
    }
    #infobox {
        width: 66%;
        padding: 1rem;
        border-radius: 0rem 1rem 1rem 0rem;
    }
    img {
        border-radius: 1rem 0 0 1rem;
        display: block;
        height: 100%;
        width: 33%;

        overflow-y: hidden;
        object-fit: cover;
        object-position: 50% 50%;
    }
    
    /*
        Definitions
    */
    div.ltbgreen {
        background: #00877C;
    }
    .xl {
        font-size: 2rem;
    }
    .m {
        font-size: 1rem;
    }
    .white {
        color: white;
    }

</style>