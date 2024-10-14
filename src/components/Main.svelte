<script>
	const introItems = [
		{ icon: 'fa-solid fa-code', description: 'Web and App Design/Development' },
		{ icon: 'fa-solid fa-book', description: 'Custom Python Scripts' },
		{ icon: 'fa-solid fa-users', description: 'GCP/Firebase Implementation' },
		{ icon: 'fa-solid fa-book-open', description: 'Technical Doc Review and Research' }
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
</main>
