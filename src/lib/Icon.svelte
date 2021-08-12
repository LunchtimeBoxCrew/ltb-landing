<script context="module" lang="ts">
  import * as icons from "./images/icons";
  export type IconType = keyof typeof icons;
</script>

<script lang="ts">
  export let name: IconType;
</script>

<span>
  {@html icons[name]}
</span>

<style lang="scss">

  span > :global(svg) {
    fill: var(--fill);
  }

</style>
