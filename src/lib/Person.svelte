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
        height: 12rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
    }
    img {
        display: block;
        height: 100%;
        width: 33%;

        overflow-y: hidden;
        object-fit: cover;
    }
    #infobox {
            width: 66%;
            padding: 1rem;
        }
    @media(min-width: 580px) {
        
        #wrapper {
            height: 16rem;
            width: 32rem;
            margin: 1rem;
            border: 1rem 0 0 1rem;
            object-position: 50% 50%;
        }
        #infobox {
            border-radius: 0rem 1rem 1rem 0rem;
        }
        img {
            border-radius: 1rem 0 0 1rem;
        }
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