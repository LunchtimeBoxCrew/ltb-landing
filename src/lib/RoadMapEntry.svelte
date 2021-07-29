<script lang='ts'>
    export let name:string;
    export let date:string;
    export let description:string;

</script>
<div id='wrapper'>
    <h2 class='gray'>{name}</h2>
    <p>{date}</p>
    <p>{description}</p>
    
</div>

<style>
    .gray {
        background-color: #f8f8f8;
    }
</style>