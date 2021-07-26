<script lang="ts">

    export let name:string;
    export let description:string;
    export let img:string;

</script>


<div id='wrapper'>
    
    <p>
        {img}
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

</style>