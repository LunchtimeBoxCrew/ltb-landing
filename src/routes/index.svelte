<script lang="ts">
import ContactSection from '$lib/layouts/ContactSection.svelte';
	import Link from '$lib/Link.svelte';
	import Person from '$lib/Person.svelte';
	import RoadMapEntry from '$lib/RoadMapEntry.svelte';
	import Content from '../content/Content.svelte';
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

		<div class="capwidth">
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
				<Link link="#contact" icon="letter" --min-width="160px">
					<p>Kontaktiere uns</p>
				</Link>
			</div>
		</div>
	</section>

	<!-- Explainer Section -->
	<section id="explainer" class="dark">
		<div class="capwidth">
			<Content file="intro" />
		</div>
	</section>

	<section id="roadmap" class="capwidth">
		<h2>Roadmap - Where we've been, where we're going</h2>
		<RoadMapEntry showDesc={true} name="Idee" date="2019" image="ideation">
			<Content file="idea" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="Entstehung" date="2019" image="ideation">
			<Content file="formation" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="Project Make 1" date="2020" image="project">
			<Content file="test" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="Kickstart" date="2021" image="acceleration">
			<Content file="testing" />
		</RoadMapEntry>
	</section>

	<section id="about-us" class="capwidth">
		<h2>Team</h2>
		<p>
			Wir sind ein interdisziplinäres Team, mit Fähigkeiten im Bereich Hard- und Software, UI / UX
			Design, Entrepeneurship und dem gemeinsamen Wunsch diese Fähigkeiten in einem sozialen Kontext
			einzusetzen.
		</p>
	</section>

	<section id="team">
		<div id="teambox">
			<Person name="Majid" description="packt an, zieht durch" />
			<Person name="Timo" description="der perfektionistische Informatiker" />
			<Person name="Lara" description="unsere kreative Powereinheit" />
			<Person name="Dario" description="unsere Emotionale Intelligenz" />
			<Person name="Jonas" description="der immer noch zwei Schritte weiterdenkt" />
			<Person name="Fabian" description="&quot;MacMakeThings&quot;" />
			<Person name="Max" description="unser kreativer Programmierer" />
		</div>
	</section>

	<ContactSection />
</main>

<style lang="scss">
	@import '../styles/index.scss';

	main {
		color: rgb(99, 99, 99);
	}

	.capwidth {
		max-width: 1920px;
		margin: 0 auto;
	}

	h2 {
		font-weight: 400;
		color: rgb(41, 41, 41);
		padding-bottom: 2rem;
		@media (max-width: 1024px) {
			padding-bottom: 2rem;
		}
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

		> .capwidth {
			padding: 5rem;
			@media (max-width: 1024px) {
				padding: 2rem;
			}
		}
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
			@media (max-width: 1024px) {
				font-size: 4rem;
				line-height: 4rem;
			}
		}
		#heading {
			padding-top: 18rem;
			@media (max-width: 1024px) {
				padding-top: 8rem;
			}
		}
		/* No idea if bad practice but I'm setting a general id as footer for a single section, keep that in mind */
		#footer {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 8rem 0rem 4rem 0rem;
			@media (max-width: 1024px) {
				flex-direction: column;
				padding: 4rem 0 4rem 0;
			}
		}
		#subtextwrapper {
			font-size: 1.4rem;
			margin-bottom: 2rem;
			@media (max-width: 1024px) {
				font-size: 1.2rem;
			}
		}
	}

	#explainer {
		padding: 5rem 0 5rem 0;
		font-weight: 300;
		p {
			max-width: 768px;
		}
		@media (max-width: 1024px) {
			padding: 4rem 2rem;
		}
		@media (max-width: 1920px) {
			padding: 2rem 5rem 5rem 2rem;
		}
	}

	#roadmap {
		padding: 5rem 0 5rem 0;
		@media (max-width: 1024px) {
			padding: 2rem;
		}
		@media (max-width: 1920px) {
			padding: 5rem 2rem 5rem 2rem;
		}
	}

	#about-us {
		margin: 2rem 5rem 5rem 2rem;
		p {
			max-width: 768px;
		}

		@media (max-width: 1024px) {
			margin: 2rem;
		}
	}
	#team {
		background: $light-gray;
		#teambox {
			padding: 2rem 0 2rem 0;
			margin: 0rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
		}
		@media (min-width: 580px) {
			padding: 5rem;
		}
	}

	section.dark {
		background-color: $light-gray;
	}
	.white {
		color: white;
	}
</style>
