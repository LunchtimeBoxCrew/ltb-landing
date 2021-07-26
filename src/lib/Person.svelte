<script lang="ts">

    export let name:string;
    export let description:string;
    export let img:string;

</script>


<div id='wrapper'>
    
    <img src={img} />
    <div id='infobox' class='ltbgreen'>
        <h2 class=''>
            {name}
        </h2>
        <p>
            {description}
        </p>
    </div>



</div>

<style>
    #wrapper {
        height: 12rem;
        width: 36rem;
        margin: 2rem;
        display: flex;
        flex-direction: row;
    }
    #infobox {
        width: 66%;
    }
    img {
        height: 100%;
        width: 33%;
        overflow-y: hidden;
        object-fit: cover;
        object-position: 20% 20%;
    }

    div.ltbgreen {
        background: #00877C;
    }

</style>