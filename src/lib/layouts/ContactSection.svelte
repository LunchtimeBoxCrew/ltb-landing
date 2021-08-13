<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import Link from '$lib/Link.svelte';

	const phone = () => 'tel:' + ['+49', '2261', '0000000000'].join('');
	const mail = () => 'mailto:' + ['hello', '@', 'lunchtimebox.de'].join('');
</script>

<section>
	<div class="left">
		<h2>Kontaktiere uns</h2>
		<p>
			Um unsere Idee erfolgreich in die Tat umsetzen zu können, benötigen wir Ihre Unterstützung.
			Egal, ob mit <b>Testgeräten</b>, <b>Mentoring/Fachwissensaustausch</b> oder
			<b>Testpersonen</b> - wir freuen uns über jede Art der Unterstützung.
		</p>
	</div>
	<div class="right">
		<div class="buttons">
			<Link link={mail} click={false}>
				<Icon name="letter" --fill="#00877c" />
			</Link>
			<Link link={phone} click={false}>
				<Icon name="phone" --fill="#00877c" />
			</Link>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/index.scss';
	section {
		margin: 7rem 0;
		background: $green;
		margin: 0 auto;
		padding: 7rem 15rem;
		display: flex;
		justify-content: space-between;
		color: white;
		font-weight: 400;

		h2 {
			font-weight: 200;
			margin-bottom: 2rem;
			@media (max-width: 1024px) {
				margin-bottom: 2rem;
			}
		}

		.buttons {
			display: flex;
			& :global(a) {
				display: flex;
				justify-content: center;
				align-items: center;
				background: white;
				border-radius: 50%;
				width: 60px;
				height: 60px;
				margin: 0 15px;
				min-width: 60px;
				max-width: 60px;
				padding: 0;
			}
			margin: 50px 0;
		}

		p {
			color: #ffffffdc;
			font-size: 0.85rem;
			max-width: 430px;
			line-height: 1.35em;
		}
	}
</style>
