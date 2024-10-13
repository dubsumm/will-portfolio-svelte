<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let y;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto text-sm sm:text-vase min-h-screen">
	<div
		class={'fixed bottom-0 w-full duration-200 flex p-10 z-10 ' +
			(y > 0 ? ' opacity-full pointer-events-auto' : ' opacity-0 pointer-events-none')}
	>
		<button
			on:click={goTop}
			class=" ml-auto rounded-full bg-slate-900 text-green-400 px-3 sm:px-3 cursor-pointer"
		>
			<i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
		</button>
	</div>
	<Header y={y}   />
	<slot />
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerWidth bind:innerHeight />
