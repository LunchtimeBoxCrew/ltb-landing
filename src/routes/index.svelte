<script lang="ts">
	import Person from '$lib/Person.svelte';
</script>

<header>
	<a href="#roadmap">Roadmap</a>
	<a href="#team">Team</a>
	<a href="#contact">Kontakt</a>
</header>
<main>
	<!-- Intro Section -->
	<section id="intro">
		<h1>
			<b>Soziale Teilhabe</b><br />
			mit einem Klick.
		</h1>

		<p>Wir geben Menschen ein einfaches Werkzeug gegen die soziale Isolation an die Hand.</p>

		<button>Kontaktiere uns</button>
	</section>

	<!-- Explainer Section -->
	<section id="explainer" class="dark">
		<h3>LunchtimeBox</h3>

		<p>
			Die Lunchtimebox ermöglicht Teilnahme am sozialen Leben mit nur einem Klick Lorem ipsum dolor
			sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
			Lorem ipsum dolor sit amet Lorem ipsm dfgodfngdfg sdf gsdfg sdf gsdf gsd fgsdfgsfvcb sdfbs
			dfvsdfv sdfs dfbsdfbsdf bsdfb sfgb sfgb sfgb sfgbs fbsf gbsfgb sfgb sdfgb sdfb sdfgb sdfb sdfb
			sdfb sdfb sdb sd bsdf bsd fb sdfb sdfb sfdgb sdfg bsdf bsd
		</p>
	</section>

	<section id="roadmap">
		<h2>Stuff and things</h2>
	</section>

	<section id="about-us">
		<p>
			sind ein interdisziplinäres Team, mit Fähigkeiten im Bereich Hard- und Software, UI / UX
			Design, Entrepeneurship und dem gemeinsamen Wunsch diese Fähigkeiten in einem sozialen Kontext
			einzusetzen.
		</p>
	</section>

	<section id="team">
		<Person name="Majid" description="packt an, zieht durch" img="images/majid.jpeg" />
		<Person name="Timo" description="der perfektionistische Informatiker" img="images/timo.jpeg" />
		<Person name="Lara" description="unsere kreative Powereinheit" img="images/lara.jpeg" />
		<Person name="Dario" description="unsere Emotionale Intelligenz" img="images/dario.jpeg" />
		<Person name="Jonas" description="der immer noch zwei Schritte weiterdenkt" img="images/naski.jpeg" />
		<Person name="Fabian" description="&quot;MacMakeThings&quot;" img="images/fabian.jpeg" />
		<Person name="Max" description="unser kreativer Programmierer" img="images/max.jpeg" />
		<Person name="Dummy" description="Im a dummy to test certain ui elemens" img='images/naski.jpeg' />
	</section>
</main>

<style lang="scss">
	@import '../styles/index.scss';

	header {
		float: right;
		> a {
			text-decoration: none;
			font-weight: 200;
			color: white;
		}
	}

	#intro {
		background-image: url('./HeroHeader.jpg');
		background-size: cover;

		> h1 {
			font-size: 96px;
			font-weight: 300;
			line-height: 99px;
			margin: 0px;
			padding: 20px 0px;
		}
		> h1,
		p {
			color: white;
		}
	}
	
	#team {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
	}

	section.dark {
		background-color: $light-gray;
	}
</style>
