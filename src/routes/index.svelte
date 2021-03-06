<script lang="ts">
	import Content from '../content/Content.svelte';
	import ContactSection from '$lib/layouts/ContactSection.svelte';
	import Link from '$lib/Link.svelte';
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
		<div class="capwidth">
			<h1 class="white">
				<b>Soziale Teilhabe</b><br />
				mit einem Klick<b>.</b>
			</h1>
			<div class="footer">
				<p class="white">
					Wir geben Menschen ein einfaches Werkzeug gegen die soziale Isolation an die Hand.
				</p>
				<Link link="#contact" icon="letter" --min-width="160px">
					<p>Kontaktiere uns</p>
				</Link>
			</div>
		</div>
	</section>

	<!-- Explainer Section -->
	<section id="explainer" class="dark">
		<div class="capwidth">
			<Content file="idea" />
		</div>
	</section>

	<section id="roadmap" class="capwidth">
		<h2>Roadmap - Where we've been, where we're going</h2>
		<RoadMapEntry showDesc={false} name="Entstehung" date="2019" image="ideation">
			<Content file="formation" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="Erster Prototyp" date="2019" image="prototype">
			<Content file="firstprototype" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="Project Make 1" date="2020" image="project">
			<Content file="projectmake1" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="Project Make 2" date="2021" image="project">
			<Content file="projectmake2" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="KickStart@TH Köln" date="2021" image="kickstart">
			<Content file="kickstart" />
		</RoadMapEntry>
		<RoadMapEntry showDesc={false} name="Project Cologne" date="2021" image="acceleration">
			<Content file="projectcologne" />
		</RoadMapEntry>
	</section>

	<section id="about-us" class="dark">
		<div class="capwidth">
			<h2>Team</h2>
			<p>
				Wir sind ein interdisziplinäres Team, mit Fähigkeiten im Bereich Hard- und Software, UI / UX
				Design, Entrepeneurship und dem gemeinsamen Wunsch diese Fähigkeiten in einem sozialen
				Kontext einzusetzen.
			</p>
		</div>
	</section>

	<section id="team" class="dark">
		<div class="capwidth">
			<Person name="Majid" description="packt an, zieht durch" />
			<Person name="Timo" description="der perfektionistische Informatiker" />
			<Person name="Lara" description="unsere kreative Powereinheit" />
			<Person name="Dario" description="unsere Emotionale Intelligenz" />
			<Person name="Jonas" description="der immer noch zwei Schritte weiterdenkt" />
			<Person name="Fabian" description="&quot;MacMakeThings&quot;" />
			<Person name="Max" description="unser kreativer Programmierer" />
		</div>
	</section>

	<section id="contact">
		<div class="capwidth">
			<ContactSection />
		</div>
	</section>
</main>

<style lang="scss">
	@import '../styles/index.scss';

	main {
		color: rgb(99, 99, 99);
	}

	.capwidth {
		max-width: 1200px;
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
			font-weight: 200;
			color: white;
			padding: 1rem;
			text-decoration: none;
			@media (max-width: 1024px) {
				padding: 0rem;
				margin-right: 1rem;
			}
		}
		a:hover {
			text-decoration: underline;
		}

		@media (max-width: 1024px) {
			left: 0;
		}
	}

	section {
		padding: 4rem 0rem;
		@media (max-width: 1300px) {
			padding: 4rem 2rem;
		}
	}

	#intro {
		position: relative;
		padding-bottom: 4rem;

		background-image: url(./HeroHeader.jpg?w=300;400;1000&format=webp&flatten=true);
		background-size: cover;
		background-position: 30% 20%;

		h1 {
			font-size: 8rem;
			font-weight: 300;
			line-height: 8rem;
			margin-top: 8rem;
			margin-bottom: 4rem;
			@media (max-width: 1024px) {
				font-size: 2.3rem;
				line-height: 2.3rem;
				margin-top: 5rem;
				margin-bottom: 1.5rem;
			}
		}

		.footer {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			@media (max-width: 1024px) {
				flex-direction: column;
				align-items: flex-start;
			}

			> p {
				font-size: 1.4rem;
				font-weight: 200;
				@media (max-width: 1024px) {
					margin-bottom: 3.5rem;
					font-size: 1rem;
				}
			}
		}
	}

	#explainer {
		font-weight: 300;
		:global(p) {
			max-width: 768px;
		}
	}

	#roadmap > :global(.entry:last-child) {
		margin-bottom: 0;
	}

	#team > div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	#contact {
		background: $green;
		> div {
			display: flex;
			justify-content: space-between;
		}
	}

	section.dark {
		background-color: $light-gray;
	}
	.white {
		color: white;
	}
</style>
