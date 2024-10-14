<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

  const socials = [
    {link:"https://www.linkedin.com/in/willbsummerlin/", icon: 'fa-brands fa-linkedin-in'},
    {link:"https://wellfound.com/u/william-b-summerlin", icon: 'fa-brands fa-angellist'},
    {link:"https://x.com/WillieSumm", icon: 'fa-brands fa-x-twitter'},
  ]
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
  class=" bg-slate-800 text-white text-xl"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="flex flex-col text-center">
		<h2>Find me on my <strong class="text-green-400">Socials</strong></h2>
		<div class="flex flex-1 gap-2 p-2 mx-auto">
      {#each socials as social}
      <a href={social.link} target="_blank" class=" text-2xl hover:text-green-400 duration-200">
        <i class={social.icon}></i>
      </a>
      {/each}
    </div>
      <p class="my-1"><strong class="text-green-400">Ready</strong> to chat?</p>
     
      <a href="https://calendly.com/w-b-summerlin/30min" target="_blank" class="blueShadow relative overflow-hidden px-2 py-2 group rounded-full bg-white text-slate-950 text-center">
        <div class=" absolute top-0 right-full w-full h-full bg-green-400 bg-opacity-20 group-hover:translate-x-full z-1 duration-200"></div>
        <strong>Will's Calendly &rarr;</strong>
      </a>
		<!-- svelte-ignore a11y-autofocus -->
		<!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 1em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
