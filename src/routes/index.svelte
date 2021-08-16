<script lang="ts">
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
			<h2>LunchtimeBox</h2>
			<p>
				Die Lunchtimebox ist eine Lieferbox für Essen auf Rädern, ausgestattet mit Kameras und
				Bildschirm, um während des Essens über Videokommunikation mit Angehörigen oder anderen
				Lunchtimern zu kommunizieren.<br /><br />
				Für viele Menüservicenutzer stellt der Lieferant den einzigen Kontakt dar. Diese sehen die soziale
				Interaktion als wichtigen Teil ihrer Arbeit, sind aber durch enge Zeitpläne nicht in der Lage,
				dieses Bedürfnis hinreichend zu bedienen.

				<br /><br />Die LunchtimeBox verbindet erstmalig zwei grundlegende Bedürfnisse: Nahrung und
				soziale Interaktion.
				<br /><br />Durch Videotelefonie können die Nutzer untereinander und mit ihren Angehörigen
				in Kontakt treten. Mit speziellem, auf die Nutzergruppe zugeschnittenen Design, bauen wir
				eine Brücke zwischen den Möglichkeiten unserer digitalen Realität und ihren Bedürfnissen. Im
				Verlaufe des Projektes entwickeln und testen wir die Idee in enger Zusammenarbeit mit
				unseren Partnern (Malteser) und der Zielgruppe iterativ weiter.
			</p>
		</div>
	</section>

	<section id="roadmap" class="capwidth">
		<h2>Roadmap - Where we've been, where we're going</h2>
		<RoadMapEntry
			showDesc={true}
			name="Idee"
			date="2019"
			image="ideation"
			description="Wir sind eine Studierendengruppe an der Technischen Hochschule Köln im Rahmen des Studiengangs Code and Context und bestehen aus sieben Studierenden.

			Die Vision, welche wir als Team verfolgen ist, Menschen die Möglichkeit zu geben, sich wieder als Teil der Gesellschaft zu fühlen.
			
			Unsere Vision möchten wir mithilfe der LunchtimeBox realisieren. Die Idee bei der LunchtimeBox ist, eine Essenstransportbox mit einem Bildschirm und Videokommunikationstechnik auszustatten. Unser Ziel dabei ist es, die Technik so einfach wie möglich zu gestalten, um den Nutzer:innen höheren Alters die Möglichkeit zu bieten mit Angehörigen oder anderen Nutzer:innen der Box während des Mittagessens zu kommunizieren. Damit möchten wir zwei Grundbedürfnisse zusammenführen. Zum einen die Nahrungsaufnahme und zum anderen die soziale Interaktion."
		/>
		<RoadMapEntry
			showDesc={false}
			name="Entstehung"
			date="2019"
			image="ideation"
			description="Um den Hintergrund unserer Idee nachvollziehen zu können müssen wir einen Schritt zurückgehen. Ende 2019 im Rahmen des Kurses Design Thinking hatten wir durch unsere Partner Malteser, die Möglichkeit uns mit ihrem Menüservice auseinanderzusetzen.

			Ziel war es sich den Service anzuschauen und herauszubekommen, wieso dieser Service in Anspruch genommen wird. Dabei wollten wir herausfinden, was diesen Menschen an dem Service gefällt, beziehungsweise was ihnen nicht gefällt. Dafür sind wir in unserer Gruppe nach Ochtrup gereist und haben dort Interviews mit einigen Nutzer:innen und deren Angehörigen geführt. Des Weiteren haben wir einen Auslieferungsfahrer bei seiner täglichen Tour begleitet, um den Prozess besser zu verstehen.
			
			Nach Auswertung unserer gesammelten Erkenntnisse sind wir zu der These gekommen, dass sich viele dieser Menschen nicht einen besseren Service wünschen, sondern einfach mehr Kontakt zu anderen Menschen, weil viele von ihnen sehr isoliert leben und die Fahrer:innen meistens die einzigen sozialen Kontakte sind.
			
			Wir haben uns dann als Team zusammen Gedanken über eine Lösung gemacht. Dabei ist die Idee der LunchtimeBox entstanden."
		/>
		<RoadMapEntry
			showDesc={false}
			name="Project Make 1"
			date="2020"
			image="project"
			description="Im Project Make 1 bekamen wir als Team nun die Möglichkeit, an der Idee der LunchtimeBox zu arbeiten und einen ersten Protoypen zu erschaffen"
		/>
		<RoadMapEntry
			showDesc={false}
			name="Kickstart"
			date="2021"
			image="acceleration"
			description="Im Verlauf des Project Make 1 konnten wir das Team des Kickstart@TH Köln mit unserer Idee überzeugen und eine Förderung von 7.500€ für die Weiterentwicklung unseres Prototypen erhalten."
		/>
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

	<section id="team">
		<div class="capwidth">
			<Person name="majid" description="packt an, zieht durch" />
			<Person name="timo" description="der perfektionistische Informatiker" />
			<Person name="lara" description="unsere kreative Powereinheit" />
			<Person name="dario" description="unsere Emotionale Intelligenz" />
			<Person name="jonas" description="der immer noch zwei Schritte weiterdenkt" />
			<Person name="fabian" description="&quot;MacMakeThings&quot;" />
			<Person name="max" description="unser kreativer Programmierer" />
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
		}
		a:hover {
			text-decoration: underline;
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

		h1 {
			font-size: 8rem;
			font-weight: 300;
			line-height: 8rem;
			margin-top: 8rem;
			margin-bottom: 4rem;
			@media (max-width: 1024px) {
				font-size: 4rem;
				line-height: 4rem;
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
				@media (max-width: 1024px) {
					margin-bottom: 4rem;
					font-size: 1.2rem;
				}
			}
		}
	}

	#explainer {
		font-weight: 300;
		p {
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

	section.dark {
		background-color: $light-gray;
	}
	.white {
		color: white;
	}
</style>
