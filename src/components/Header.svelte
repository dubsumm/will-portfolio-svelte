<script>
	import { contactModalStore } from '../lib/stores/contactModalStore';

	export let y;

	let tabs = [
		{ name: 'Projects', link: '#projects' },
		{ name: 'About Me', link: '#about' }
	];

</script>

<header
	class={'sticky z-50  top-0 duration-200 flex items-center justify-between border-b border-solid px-2 ' +
		(y > 0
			? 'py-4 bg-slate-950  bg-opacity-75 border-b-green-500'
			: 'py-6 bg-transparent border-transparent border-b')}
>
	<h1 class=" font-medium hidden sm:block"><b class="font-bold poppins">Will</b> Summerlin</h1>
	<div class="block sm:hidden w-12 shadow-slate-950">
		<img src={'images/ws.png'} alt="ws" />
	</div>
	<div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a class=" duration-200 hover:text-green-400" href={tab.link}>
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
	<button
		on:click={() => contactModalStore.openModal()}
		class="greenShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
	>
		<div
			class=" absolute top-0 right-full w-full h-full bg-green-400 opacity-30 group-hover:translate-x-full z-0 duration-200"
		></div>
		<h4 class="relative z-9 whitespace-nowrap flex justify-center">Get in Touch</h4>
	</button>
</header>
