<script>
	const socials = [
		{ link: 'https://www.linkedin.com/in/willbsummerlin/', icon: 'fa-brands fa-linkedin-in' },
		{ link: 'https://x.com/WillieSumm', icon: 'fa-brands fa-x-twitter' }
	];
</script>

<footer class="py-20 sm:py-28 bg-black flex flex-col gap-4 sm:gap-8 justify-center items-center">
	<h6 class=" text-xl sm:text-2xl md:text-3xl">
		<span class="poppins text-green-400 font-semibold">Connect</span> with me &darr;
	</h6>
	<div class="flex flex-col gap-2 items-center justify-center">
		<div class="flex flex-1 gap-2 p-2 mx-auto">
			{#each socials as social}
				<a
					href={social.link}
					target="_blank"
					class=" text-xl sm:text-2xl hover:text-green-400 duration-200"
				>
					<i class={social.icon}></i>
				</a>
			{/each}
		</div>
		<p>
			<b class="pr-2">Email:</b>
			<span class="poppins text-green-400 font-semibold">w.b.summerlin@gmail.com</span>
		</p>
	</div>
	<div class="flex flex-col gap-2 items-center">
		<p class="mx-auto text-sm opacity-70">Ready to chat?</p>
		<a
			href="https://calendly.com/w-b-summerlin/30min"
			target="_blank"
			class="greenShadow relative overflow-hidden px-2 py-2 group rounded-full bg-white text-slate-950 text-center"
		>
			<div
				class=" absolute top-0 right-full w-full h-full bg-green-400 bg-opacity-20 group-hover:translate-x-full z-1 duration-200"
			></div>
			<strong>Will's Calender &rarr;</strong>
		</a>
	</div>
</footer>
