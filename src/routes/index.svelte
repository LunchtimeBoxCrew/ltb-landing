<script lang="ts">
	import PortraitDario from '$lib/images/people/dario.jpeg?w=300;400;500&format=webp&srcset';
	import PortraitFabian from '$lib/images/people/fabian.jpeg?w=300;400;500&format=webp&srcset';
	import PortraitLara from '$lib/images/people/lara.jpeg?w=300;400;500&format=webp&srcset';
	import PortraitMajid from '$lib/images/people/majid.jpeg?w=300;400;500&format=webp&srcset';
	import PortraitMax from '$lib/images/people/max.jpeg?w=300;400;500&format=webp&srcset';
	import PortraitJonas from '$lib/images/people/naski.jpeg?w=300;400;500&format=webp&srcset';
	import PortraitTimo from '$lib/images/people/timo.jpeg?w=300;400;500&format=webp&srcset';
	import StockAcceleration from '$lib/images/stock/acceleration.jpg?w=300;400;500&format=webp&srcset';
	import StockIdeation from '$lib/images/stock/ideation.jpg?w=300;400;500&format=webp&srcset';
	import StockProject from '$lib/images/stock/project.jpg?w=300;400;500&format=webp&srcset';
	import Person from '$lib/Person.svelte';
	import RoadMapEntry from '$lib/RoadMapEntry.svelte';
	import HeroHeader from './HeroHeader.jpg?w=300;400;1000&format=webp&flatten=true&srcset';
</script>

<header>
	<a href="#roadmap">Roadmap</a>
	<a href="#team">Team</a>
	<a href="#contact">Kontakt</a>
</header>
<main>
	<!-- Intro Section -->
	<section id="intro">
		<img srcset={HeroHeader} alt="smiling man sitting infront of desk with tablet" />
		<div id="heading" class="white">
			<h1>
				<b>Soziale Teilhabe</b><br />
				mit einem Klick<b>.</b>
			</h1>
		</div>
		<div id="footer">
			<div id="subtextwrapper">
				<p class="white">
					Wir geben Menschen ein einfaches Werkzeug gegen die soziale Isolation an die Hand.
				</p>
			</div>
			<button id="contact">
				<div id="content">
					<p>Kontaktiere uns</p>
					<img alt="email icon" src="images/email.svg" />
				</div>
			</button>
		</div>
	</section>

	<!-- Explainer Section -->
	<section id="explainer" class="dark">
		<h2>LunchtimeBox</h2>
		<p id="text">
			Die Lunchtimebox ermöglicht Teilnahme am sozialen Leben mit nur einem Klick Lorem ipsum dolor
			sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
			Lorem ipsum dolor sit amet Lorem ipsm dfgodfngdfg sdf gsdfg sdf gsdf gsd fgsdfgsfvcb sdfbs
			dfvsdfv sdfs dfbsdfbsdf bsdfb sfgb sfgb sfgb sfgbs fbsf gbsfgb sfgb sdfgb sdfb sdfgb sdfb sdfb
			sdfb sdfb sdb sd bsdf bsd fb sdfb sdfb sfdgb sdfg bsdf bsd
		</p>
	</section>

	<section id="roadmap">
		<h2>Roadmap - Where we've been, where we're going</h2>
		<RoadMapEntry
			name="Entstehung"
			date="2019"
			description="Im Kurs Design Thinking mit Ivonne Preußer stellte sich die Frage &quot; Was brauchen Nutzer von Essen auf Rädern Services wirklich. Diesem Ansatz folgend entwickelten wir die Idee der Lunchtimebox mit einem ersten Prototypen"
		>
			<img srcset={StockIdeation} alt="Ideation" />
		</RoadMapEntry>
		<RoadMapEntry
			name="Project Make 1"
			date="2020"
			description="Im Project Make 1 bekamen wir als Team nun die Möglichkeit, an der Idee der LunchtimeBox zu arbeiten und einen ersten Protoypen zu erschaffen"
		>
			<img srcset={StockProject} alt="Project Make 1" />
		</RoadMapEntry>
		<RoadMapEntry
			name="Kickstart"
			date="2021"
			description="Im Verlauf des Project Make 1 konnten wir das Team des Kickstart@TH Köln mit unserer Idee überzeugen und eine Förderung von 7.500€ für die Weiterentwicklung unseres Prototypen erhalten."
		>
			<img srcset={StockAcceleration} alt="Kickstart" />
		</RoadMapEntry>
	</section>

	<section id="about-us">
		<h2>About us</h2>
		<p>
			Wir sind ein interdisziplinäres Team, mit Fähigkeiten im Bereich Hard- und Software, UI / UX
			Design, Entrepeneurship und dem gemeinsamen Wunsch diese Fähigkeiten in einem sozialen Kontext
			einzusetzen.
		</p>
	</section>

	<section id="team">
		<Person name="Majid" description="packt an, zieht durch">
			<img srcset={PortraitMajid} type="image/webp" alt="person" />
		</Person>
		<Person name="Timo" description="der perfektionistische Informatiker">
			<img srcset={PortraitTimo} type="image/webp" alt="person" />
		</Person>
		<Person name="Lara" description="unsere kreative Powereinheit">
			<img srcset={PortraitLara} type="image/webp" alt="person" />
		</Person>
		<Person name="Dario" description="unsere Emotionale Intelligenz">
			<img srcset={PortraitDario} type="image/webp" alt="person" />
		</Person>
		<Person name="Jonas" description="der immer noch zwei Schritte weiterdenkt">
			<img srcset={PortraitJonas} type="image/webp" alt="person" />
		</Person>
		<Person name="Fabian" description="&quot;MacMakeThings&quot;">
			<img srcset={PortraitFabian} type="image/webp" alt="person" />
		</Person>
		<Person name="Max" description="unser kreativer Programmierer">
			<img srcset={PortraitMax} type="image/webp" alt="person" />
		</Person>
	</section>
</main>

<style lang="scss">
	@import '../styles/index.scss';

	p {
		padding: 0;
		margin: 0;
		font-weight: 300;
	}

	header {
		z-index: 2;
		right: 10px;
		position: absolute;
		padding: 2rem;
		> a {
			text-decoration: none;
			font-weight: 200;
			color: white;
			padding: 1rem;
		}
		a:hover {
			transition: all 1s;
			text-decoration: underline;
		}
	}

	#intro {
		position: relative;
		> img {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		h1 {
			font-size: 8rem;
			font-weight: 300;
			line-height: 8rem;
			margin: 0;
		}
		#heading {
			padding: 5rem;
			padding-top: 18rem;
		}
		/* No idea if bad practice but I'm setting a general id as footer for a single section, keep that in mind */
		#footer {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 3rem;
			padding: 5rem;
		}
		#subtextwrapper {
			font-size: 1.4rem;
			width: 48rem;
		}
		> #footer > #contact {
			all: unset;
			background-color: white;
			width: 16rem;
			border: none;
			border-radius: 0.5rem;
			#content {
				color: gray;
				font-size: 1rem;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
			}
		}
	}
	#explainer {
		padding: 5rem;
		font-weight: 300;
		h2 {
			font-weight: 400;
			color: gray;
			padding-bottom: 3rem;
		}
		#text {
			width: 60%;
			color: darkgray;
		}
	}

	#roadmap {
		margin: 5rem;
		h2 {
			font-weight: 700;
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
	.white {
		color: white;
	}
	#about-us {
		margin: 5rem;
	}
</style>
