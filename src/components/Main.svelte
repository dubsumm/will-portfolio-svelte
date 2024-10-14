<script>
  import Step from "./Step.svelte";
  


   let steps = [
        {
            name: "BluRooz, the Blue Collar Gurus",
            icon: "fa-solid fa-mobile-screen-button",
            description:
                "The app is a one-stop shop for all things blue collar, from job postings to tool rentals.",
        },
        {
            name: "Utlimate Todos",
            icon: "fa-solid fa-list-check",
            description:
                "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.",
        },
        {
            name: "Pokédex",
            icon: "fa-solid fa-diagram-project",
            description:
                "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).",
        },
    ];

</script>

<main class="flex flex-col flex-1 p-4 z-10">
	<section id="introPage" class=" grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				<span class="poppins font-extrabold text-4xl sm:text-5xl md:text-6xl">Hi! I'm <span class="text-green-400 poppins">Will</span> Summerlin</span> <br /><br /> Full Stack
				<span class="text-green-400 poppins">Developer</span> <br /> &AMP <br /> Web Modernization <span class="text-green-400 poppins">Consultant</span>
			</h2>
	<p class="text-base sm:text-lg md:text-xl">
                My <span class="text-green-400"> favorite tech</span> includes JavaScript
                (Vue3 or SvelteKit), TailwindCSS, Node.js + Express.js & Firebase/Firestore!
            </p>
            <a href="#" target="_blank"
                class=" blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div class=" absolute top-0 right-full w-full h-full bg-green-400 opacity-30 group-hover:translate-x-full z-1 duration-200"></div>
                <h4 class="relative">Get in touch &rarr;</h4>
          </a>
		</div>
    <div class="relative shadow-2xl grid place-items-center">
      <img src={"images/profile.png"} alt="Me!" class=" object-cover z-2 h-[70vh]">
    </div>
	</section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-green-400">see</span> my work?
            </h3>
        </div>
        <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-green-700 duration-200"
        >
            <i class="fa-regular fa-circle-play" />
            <p>Watch the video</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    This app is a one-stop shop for all things blue collar, from job postings to tool rentals. <strong
                        class="text-green-400"
                        >Vue3, Firebase, Node.js, Ionic/Capacitor/Cordova, Java</strong
                    > This custom app is <b>super</b> feature rich such as geolocation social and biometric sign in and cloud push messaging, for great app updates.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Ultimate Todos is a Full Stack <strong
                        class="text-green-400">Next.js</strong
                    >,
                    <strong class="text-green-400">Node.js + Express.js</strong
                    >
                    & <strong class="text-green-400">Firebase</strong> CRUD application
                    that allows a user to login, manage a tidy and efficacious todo
                    list, and persist this information across devices.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    The Pokédex is a <strong class="text-green-400"
                        >SvelteKit & TailwindCSS</strong
                    >
                    web application, hosted on
                    <strong class="text-green-400">Netlify</strong>, that
                    consumes and caches the
                    <strong class="text-green-400">Pokémon API</strong>
                    to display all Pokémon information. Gotta catch them all!
                </p>
            </Step>
        </div>
    </section>

</main>
