<script lang="ts">
	import Person from '$lib/Person.svelte';
	import RoadMapEntry from '$lib/RoadMapEntry.svelte';
</script>

<header>
	<a href="#roadmap">Roadmap</a>
	<a href="#team">Team</a>
	<a href="#contact">Kontakt</a>
</header>
<main>
	<!-- Intro Section -->
	<section id="intro">
		<div id ='heading' class='white'>
			<h1>
				<b>Soziale Teilhabe</b><br />
				mit einem Klick<b>.</b>
			</h1>
		</div>
		<div id="footer">
			<div id='subtextwrapper'>
				<p class='white'>Wir geben Menschen ein einfaches Werkzeug gegen die soziale Isolation an die Hand.</p>
			</div>
			<button id="contact">
				<div id="content">
					<p> Kontaktiere uns </p>
					<img src='images/email.svg' />
				</div>
			</button>
		</div>
	</section>

	<!-- Explainer Section -->
	<section id="explainer" class="dark">
		<h2>LunchtimeBox</h2>
		<p id='text'>
			Die Lunchtimebox ermöglicht Teilnahme am sozialen Leben mit nur einem Klick Lorem ipsum dolor
			sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
			Lorem ipsum dolor sit amet Lorem ipsm dfgodfngdfg sdf gsdfg sdf gsdf gsd fgsdfgsfvcb sdfbs
			dfvsdfv sdfs dfbsdfbsdf bsdfb sfgb sfgb sfgb sfgbs fbsf gbsfgb sfgb sdfgb sdfb sdfgb sdfb sdfb
			sdfb sdfb sdb sd bsdf bsd fb sdfb sdfb sfdgb sdfg bsdf bsd
		</p>
	</section>

	<section id="roadmap">
		<h2>Roadmap - Where we've been, where we're going</h2>
		<RoadMapEntry name='Entstehung' date='2019' image='images/ideation.jpg' description='Im Kurs Design Thinking mit Ivonne Preußer stellte sich die Frage "Was brauchen Nutzer von Essen auf Rädern Services wirklich. Diesem Ansatz folgend entwickelten wir die Idee der Lunchtimebox mit einem ersten Prototypen' />
		<RoadMapEntry name='Project Make 1' date='2020' image='images/project.jpg' description='Im Project Make 1 bekamen wir als Team nun die Möglichkeit, an der Idee der LunchtimeBox zu arbeiten und einen ersten Protoypen zu erschaffen' />
		<RoadMapEntry name='Kickstart' date='2021' image='images/acceleration.jpg' description='Im Verlauf des Project Make 1 konnten wir das Team des Kickstart@TH Köln mit unserer Idee überzeugen und eine Förderung von 7.500€ für die Weiterentwicklung unseres Prototypen erhalten.' />
		
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
		<Person name="Majid," description="packt an, zieht durch" img="images/majid.jpeg" />
		<Person name="Timo," description="der perfektionistische Informatiker" img="images/timo.jpeg" />
		<Person name="Lara," description="unsere kreative Powereinheit" img="images/lara.jpeg" />
		<Person name="Dario," description="unsere Emotionale Intelligenz" img="images/dario.jpeg" />
		<Person name="Jonas," description="der immer noch zwei Schritte weiterdenkt" img="images/naski.jpeg" />
		<Person name="Fabian," description="&quot;MacMakeThings&quot;" img="images/fabian.jpeg" />
		<Person name="Max," description="unser kreativer Programmierer" img="images/max.jpeg" />
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
		float: right;
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
		background-image: url('./HeroHeader.jpg');
		background-size: cover;

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
		#contact {
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
			svg {
				fill: gray;
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
