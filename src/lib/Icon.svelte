<script lang="ts">

  import * as icons from "./images/icons";

  console.log(Object.entries(icons));

  export let name: keyof typeof icons;

</script>

<span>
  {@html icons[name]}
</span>

<style lang="scss">

  span > :global(svg) {
    fill: var(--fill);
  }

</style>
