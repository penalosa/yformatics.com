<script>
  export let cards;
  export let prefix;
</script>

<section class="mx-4 text-center flex flex-wrap justify-center py-4">
  {#each cards as card}
    <div class="w-64 h-64 rounded-card m-4 bg-offwhite flex flex-col">
      <img
        src="/img/{card.image}"
        alt={card.name}
        class="w-full h-24 object-cover rounded-t-card" />
      <h2
        class="font-display text-black text-xl px-4 flex-grow h-20 flex
        items-center justify-center">
        {card.name}
      </h2>
      <div
        class="grid items-center justify-center h-20 grid-cols-1 gap-4 mx-12">
        <a
          rel="prefetch"
          href="/learn/{prefix}/{card.slug}"
          class="text-xl font-display text-white bg-primary p-2 inline-block
          rounded-full text-center">
          Notes
        </a>
      </div>
    </div>
  {/each}
</section>
