<script>
  export let y;
  let tabs = [
    {  name: 'Projects', link: '#projects'},
    {  name: 'About Me', link: '#about'},
    {  name: 'Contact', link: '#contact'}
  ]
</script>
<header class={"sticky z-10  top-0 duration-200 flex items-center justify-between border border-solid " + (
  y > 0 ? 'py-4 bg-slate-950 border-green-500' : 'py-6 bg-transparent border-transparent'
)}>

 <h1 class=" font-medium "><b class="font-bold poppins">Will</b> Summerlin</h1>
 <div class="sm:flex items-center gap-4 hidden">
  {#each tabs as tab, index}
  <a class=" duration-200 hover:text-green-400 " href="">
    <p>{tab.name}</p>
  </a>
    
  {/each}
 </div>
</header>