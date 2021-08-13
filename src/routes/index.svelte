<script lang="ts">
	import { phone as phoneSrc } from '$lib/images/stock';
	import Link from '$lib/Link.svelte';
	import Person from '$lib/Person.svelte';
	import RoadMapEntry from '$lib/RoadMapEntry.svelte';
	import Content from '../content/Content.svelte';
	import HeroHeader from './HeroHeader.jpg?w=300;400;1000&format=webp&flatten=true&srcset';

	function joinNumber() {
		return 'tel:' + ['+49', '2261', '0000000000'].join('');
	}
	function joinMail() {
		return 'mailto:' + ['hello', '@', 'lunchtimebox.de'].join('');
	}
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
			<Person name="majid" description="packt an, zieht durch" />
			<Person name="timo" description="der perfektionistische Informatiker" />
			<Person name="lara" description="unsere kreative Powereinheit" />
			<Person name="dario" description="unsere Emotionale Intelligenz" />
			<Person name="jonas" description="der immer noch zwei Schritte weiterdenkt" />
			<Person name="fabian" description="&quot;MacMakeThings&quot;" />
			<Person name="max" description="unser kreativer Programmierer" />
		</div>
	</section>
	<section id="contact">
		<h1 style="margin-bottom: 2rem">Kontaktiere uns</h1>
		<div id="infowrapper">
			<div id="infos">
				<p id="text" style="text-align:center; margin-top: 2rem">
					Um unsere Idee erfolgreich in die Tat umsetzen zu können, benötigen wir Ihre
					Unterstützung. Egal, ob mit <b>Testgeräten</b>, <b>Mentoring/Fachwissensaustausch</b> oder
					<b>Testpersonen</b> - wir freuen uns über jede Art der Unterstützung.
				</p>

				<br />
				<br />

				<Link --margin="0.7rem 0" link={joinMail} style="dark" icon="letter">
					<p>Schick uns eine Mail</p>
				</Link>
				<Link --margin="0.7rem 0" link={joinNumber} style="dark" icon="phone" click={false}>
					<p>Oder ruf uns einfach an</p>
				</Link>
			</div>
			<img srcset={phoneSrc} alt="An old phone" />
		</div>
	</section>
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

	#contact {
		margin: 15rem 0;
		display: flex;
		justify-content: center;
		flex-direction: column;

		#infowrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			background: $light-gray;
		}
		img {
			width: 50%;
		}
		#infos {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 50%;
		}
		#text {
			width: 50%;
			text-align: left;
		}
		h1 {
			margin: 2rem;
		}

		@media (max-width: 1024px) {
			#infowrapper {
				flex-direction: column;
			}
			#infos {
				width: 100%;
			}

			img {
				width: 100%;
			}
		}
	}

	section.dark {
		background-color: $light-gray;
	}
	.white {
		color: white;
	}
</style>
