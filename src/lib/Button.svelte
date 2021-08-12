<script lang="ts">
    import Icon from "./Icon.svelte";
    import type {IconType} from "./Icon.svelte";

	export let link: string | (() => string);
	export let style: 'dark' | 'light' = 'light';
    export let click: boolean = true;
    export let icon: IconType | null = null;

	function setHref() {
		this.href = typeof link === 'string' ? link : link();
	}
</script>

<a on:click={setHref} href="#" class:dark={style === 'dark'} class:click>

	<div class="content" >
		<slot />
        {#if icon}
            <Icon name={icon} --fill={style === 'dark' ? 'white' : 'darkgray'} />
        {/if}
	</div>
</a>

<style lang="scss">

@import '../styles/index.scss';

a {

    all: unset;
    background-color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.2rem;
    cursor: pointer;
    position: relative;
    max-width: 400px;
    min-width: 200px;
    margin: var(--margin);

    &.dark {
        background-color: $green;
        .content > :global(*)  {
            color: white ;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
    }

    &.click {
        &::after {
            position: absolute;
            content: '"Klick"';
            top: -2rem;
            right: -1rem;
            color: white;
            
            font-size: 1rem;
            transform: rotate(10deg);
            opacity: 0.6;
        }
        
    }

    &.dark.click::after{
        color: rgb(24, 24, 24);
    }
        
    .content {
        color: darkgray;
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        p {
            margin-right: 1rem;
        }
    }
}
</style>
