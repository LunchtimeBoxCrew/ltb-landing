<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import Link from '$lib/Link.svelte';

	const phone = () => 'tel:' + ['+49', '2261', '0000000000'].join('');
	const mail = () => 'mailto:' + ['hello', '@', 'lunchtimebox.de'].join('');
</script>

<section>
	<div class="card">
		<h2>Kontakt</h2>
		<div class="buttons">
			<Link link={mail} click={false}>
				<Icon name="letter" --fill="#00877c" />
			</Link>
			<Link link={phone} click={false}>
				<Icon name="phone" --fill="#00877c" />
			</Link>
		</div>
		<p>
			Um unsere Idee erfolgreich in die Tat umsetzen zu können, benötigen wir Ihre Unterstützung.
			Egal, ob mit <b>Testgeräten</b>, <b>Mentoring/Fachwissensaustausch</b> oder
			<b>Testpersonen</b> - wir freuen uns über jede Art der Unterstützung.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/index.scss';
	section {
		margin: 7rem 0;
		.card {
			background: $green;
			margin: 0 auto;
			max-width: 1024px;
			border-radius: 7px;
			padding: 7rem;
			display: flex;
			/* justify-content: space-between; */
			align-items: center;
			flex-direction: column;
			color: white;
		}

		h2 {
			font-weight: 400;
			/* margin-bottom: 2rem;
			@media (max-width: 1024px) {
				margin-bottom: 2rem;
			} */
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
			color: #ececec;
			text-align: center;
			font-size: 0.8rem;
			max-width: 400px;
		}
	}
</style>
