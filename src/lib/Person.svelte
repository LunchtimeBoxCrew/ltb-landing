<script lang="ts">

    export let name:string;
    export let description:string;
    export let img:string;

</script>


<div id='wrapper'>
    
    <p>
        <img src={img} />
    </p>
    <h2 class=''>
        {name}
    </h2>
    <p>
        {description}
    </p>



</div>

<style>
    #wrapper {
        margin: 2rem;
    }
    img {
        height: 12rem;
        width: 12rem;
        overflow-y: hidden;
        object-fit: cover;
        object-position: 20% 20%;
    }

</style>