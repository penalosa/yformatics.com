<script>
  import { onMount } from "svelte";
  import { goto, prefetch } from "@sapper/app";
  let show = false;
  let searchTerm;
  let input;
  let results = [];
  let selectedResult = 0;
  let resultsList;
  const reset = () => {
    show = false;
    searchTerm = "";
    results = [];
    selectedResult = 0;
  };
  onMount(() => {
    const handleKey = async (e) => {
      if (e.key === "/" && !show) {
        e.preventDefault();
        show = true;
      }
      if (e.key === "Escape" && show) {
        e.preventDefault();

        reset();
      }
      if (
        e.key === "ArrowUp" &&
        show &&
        results.length > 0 &&
        selectedResult > 0
      ) {
        e.preventDefault();
        selectedResult -= 1;
      }
      if (
        e.key === "ArrowDown" &&
        show &&
        results.length > 0 &&
        selectedResult < results.length - 1
      ) {
        e.preventDefault();
        selectedResult += 1;
      }
      if (e.key === "Enter" && show && results.length > 0) {
        e.preventDefault();
        const item = resultsList.querySelector(".border-primary");
        if (item) {
          await prefetch(item.href);
          await goto(item.href);
          reset();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  });
  $: {
    if (typeof document !== "undefined") {
      if (show && input) {
        const main = document.querySelector("main");
        main.style.filter = "blur(5px)";
        input.focus();
      } else if (!show) {
        const main = document.querySelector("main");
        main.style.filter = "";
      }
    }
  }
  $: {
    if (typeof window !== "undefined") {
      if (searchTerm)
        fetch(`/search/${encodeURIComponent(searchTerm)}`)
          .then((r) => r.json())
          .then((r) => (results = r.results));
    }
  }
  $: results, (selectedResult = 0);
</script>

{#if show}
  <div class="fixed z-20 w-full flex justify-center">
    <div
      class=" bg-gray-400 m-4 mt-20 p-6 max-w-3xl w-full rounded-lg shadow-lg">
      <input
        class="bg-gray-200 block w-full border-transparent p-2 rounded-lg
        font-sans text-xl outline-none border-2 focus:border-primary"
        type="text"
        bind:value={searchTerm}
        bind:this={input} />
      {#if results.length}
        <div
          class="overflow-y-auto overflow-x-hidden mt-4 -mb-2"
          style="max-height: 70vh"
          bind:this={resultsList}>
          {#each results as result, index}
            {#if result.item.type === 'subject'}
              <a
                on:click={reset}
                rel="preload"
                href="/learn/{result.item.level.slug}/{result.item.slug}"
                class="{index === selectedResult ? 'border-2 border-primary' : 'border-2 border-transparent'}
                flex flex-row rounded-lg p-3 gap-2 my-2"
                style="background: {result.item.colour}">
                <img
                  src="/img/{result.item.image}"
                  alt={result.item.name}
                  class="w-10 h-10" />
                <h2 class="font-display text-white text-2xl">
                  {result.item.name}
                </h2>
              </a>
            {:else if result.item.type === 'unit'}
              <a
                on:click={reset}
                rel="preload"
                href="/learn/{result.item.subject.level.slug}/{result.item.subject.slug}/{result.item.slug}"
                class="{index === selectedResult ? 'border-2 border-primary' : 'border-2 border-transparent'}
                flex flex-row rounded-lg p-3 gap-2 my-2 bg-faint items-center">
                <img
                  src="/img/{result.item.subject.image}"
                  alt={result.item.name}
                  class="w-10 h-10 rounded-full"
                  style="background-color: {result.item.subject.colour}" />
                <div>
                  <h3 class="text-sm text-gray-700 -mb-2">
                    {result.item.subject.level.name} &centerdot; {result.item.subject.name}
                  </h3>
                  <h2 class="font-display text-black text-2xl">
                    {result.item.name}
                  </h2>
                </div>
              </a>
            {:else if result.item.type === 'topic'}
              <a
                on:click={reset}
                rel="preload"
                href="/learn/{result.item.unit.subject.level.slug}/{result.item.unit.subject.slug}/{result.item.unit.slug}/{result.item.slug}"
                class="{index === selectedResult ? 'border-2 border-primary' : 'border-2 border-transparent'}
                flex flex-row rounded-lg p-3 gap-2 my-2 bg-faint items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="newspaper w-10 h-10 text-black">
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0
                    01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <div>
                  <h3 class="text-sm text-gray-700 -mb-2">
                    {result.item.unit.subject.level.name} &centerdot; {result.item.unit.subject.name}
                    &centerdot; {result.item.unit.name}
                  </h3>
                  <h2 class="font-display text-black text-2xl">
                    {result.item.name}
                  </h2>
                </div>
              </a>
            {:else if result.item.type === 'level'}
              <a
                on:click={reset}
                rel="preload"
                href="/learn/{result.item.slug}"
                class="{index === selectedResult ? 'border-2 border-primary' : 'border-2 border-transparent'}
                flex flex-row rounded-lg p-3 gap-2 my-2 bg-faint items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="academic-cap w-10 h-10 text-black">
                  <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25
                    8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788
                    1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0
                    000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0
                    00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0
                    01.25-3.762zM9.3 16.573A9.026 9.026 0 007
                    14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026
                    11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35
                    2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0
                    00-2-.712V17a1 1 0 001 1z" />
                </svg>

                <h2 class="font-display text-black text-2xl">
                  {result.item.name}
                </h2>
              </a>
            {/if}
          {/each}
        </div>
      {/if}
    </div>

  </div>
{/if}
