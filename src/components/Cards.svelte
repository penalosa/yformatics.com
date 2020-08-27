<script>
  export let cards;
  export let prefix;
</script>

<section class="mx-4 text-center flex flex-wrap justify-center py-4">
  {#each cards as card}
    <a
      rel="prefetch"
      href="/learn/{prefix}/{card.slug}"
      class="inline-block w-64 h-64 rounded-card m-4"
      style="background: {card.colour}">
      <img
        src="/img/{card.image}"
        alt={card.name}
        class="w-32 h-32 mx-auto my-6" />
      <h2 class="font-display text-white text-2xl">{card.name}</h2>
    </a>
  {/each}
</section>
