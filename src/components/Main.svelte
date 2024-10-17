<script>
	import Step from './Step.svelte';
	import {contactModalStore} from '../lib/stores/contactModalStore'
	let steps = [
		{
			name: 'BluRooz, the Blue Collar Gurus',
			href: 'https://app.blurooz.com/feed',
			icon: 'fa-solid fa-mobile-screen-button',
			description:
				'The app is a one-stop shop for all things blue collar, from job postings to tool rentals.'
		},
		{
			name: 'V.G. Burke Author site',
			href: 'https://www.vgburke.com/',
			icon: 'fa-solid fa-pen-nib',
			description:
				'a great simple site for a local creator looking to update his web presence. High level  SEO so that publishers looking for great new talent can find it.'
		},
		{
			name: 'Command Post, The BluWorkz App',
			href: 'https://app.bluworkz.com/signin?continueUrl=/home?from=www.bluworkz.com',
			icon: 'fa-regular fa-building',
			description:
				'The companion to a premier Virtual Reality training platform. Realtime video training features, paired with unique session based training data visualization gives this tool a powerful punch for modern day skills training.'
		}
	];

	let benefits = [
		{
			metric: '10x',
			name: 'a certified Developer',
			description:
				'I taught myself to code using free online resources & absolutely fell in love with the creativity & problem solving that is involved in developing & engineering innovative new online experiences. This lead me to getting a professional certificate from Georgia Tech in Full-Stack Web Development. From 2021 starting with JavaScript, HTML & CSS, & Python, I have now expanded my expertise to backend programming, UI/UX design, database administration, cloud services & much much more. My day job is a Software Developer for a startup in Savannah-GA.'
		},
		{
			name: 'a product design & UX finatic',
			description:
				'Carefully crafting & designing amazing user experiences allows me to express & experiment with every morsel of creativity I have. I love the challenge of learning new design concepts & enabling users with amazing online experiences.'
		},
		{
			name: 'an excellent communicator',
			description:
				"Communication is key & it's a paramount value of mine. I believe in transparency & constructive communication above all else. This helps me develop deep relationships & ensures my effectiveness & productivity in any work space with any team."
		}
	];
</script>

<main class="flex flex-col flex-1 p-4 z-10">
	<section id="introPage" class=" grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				<span class="poppins font-extrabold text-4xl sm:text-5xl md:text-6xl"
					>Hi! I'm <span class="text-green-400 poppins">Will</span> Summerlin</span
				> <br /><br /> Full Stack
				<span class="text-green-400 poppins">Developer</span> <br /> &AMP <br /> Web Modernization
				<span class="text-green-400 poppins">Consultant</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-green-400"> favorite tech</span> includes JavaScript (Vue3 or SvelteKit),
				TailwindCSS, Node.js + Express.js & Firebase/Firestore!
			</p>
			<button
				on:click={() => contactModalStore.openModal()}
				class=" greenShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
			>
				<div
					class=" absolute top-0 right-full w-full h-full bg-green-400 opacity-30 group-hover:translate-x-full z-1 duration-200"
				></div>
				<h4 class="relative">Get in touch &rarr;</h4>
    </button>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<img src={'images/profile.png'} alt="Me!" class=" object-cover z-2 h-[70vh]" />
		</div>
	</section>
	<section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
		<div class="flex flex-col gap-2 text-center">
			<!-- <h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> -->
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-green-400">see</span> my work?
			</h3>
		</div>
		<!-- <a
			href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			target="_blank"
			class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-green-700 duration-200"
		>
			<i class="fa-regular fa-circle-play" />
			<p>Watch the video</p>
		</a> -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Step step={steps[0]}>
				<p>
					This hybrid built web/mobile app is a one-stop shop for all things blue collar, from job postings to tool rentals. <strong
						class="text-green-400">Vue3 + Firestore + Node.j + Express.js + Ionic/Capacitor/Cordova + Java</strong
					> hosted on <strong
						class="text-green-400">Heroku</strong>
					This feature rich custom app, utilizes modern APIs such as geolocation, social & biometric sign
					in, & cloud push messaging for great app updates.
				</p>
			</Step>
			<Step step={steps[1]}>
				<p>
					This banner site built with <strong class="text-green-400">Webflow + Webflow CMS</strong> is 
					 {steps[1].description}
				</p>
			</Step>
			<Step step={steps[2]}>
				<p>
					The Command Post is a <strong class="text-green-400">Vue3 + Firebase Realtime Database + Node.js + Express.js</strong>
					web application that is scaffolded for mobile, hosted on
					<strong class="text-green-400">Firebase</strong> {steps[2].description}
				</p>
			</Step>
		</div>
	</section>
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-24 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div class="z-[-1] bg-slate-900 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"></div>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-green-600 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-green-600 py-4"
		>
			<h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-green-400">about</span> me.
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{benefit.name}
						</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
	

		<h5 class="mx-auto text-xl sm:text-2xl md:text-3xl text-center">Let's <strong class="text-green-400">invest</strong> in your organization's future together! <br/> Ready for a <strong class="text-green-400">chat?</strong></h5>
	</section>
</main>
