<script>
  import { send, receive } from "../send-receive";
  import { goto } from "@sapper/app";
  export let tabs;
  export let colour = "#2196f3";
  export let tabSuffix = "Yformatics";
  $: title = tabs.find((t) => t.slug === selected)
    ? `${tabs.find((t) => t.slug === selected).name} | ${tabSuffix}`
    : tabSuffix;
  export let selected;
  export let prefix = "/";
  const handle = (href) => {
    goto(href, { replaceState: true });
  };
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div
  class="sm:h-16 bg-primary rounded-b-xl shadow-lg"
  style="background: {colour}">
  <nav class="flex items-center h-full sm:mx-40 sm:flex-row flex-col">
    {#each tabs as tab}
      <a
        on:click|preventDefault={() => handle(`/learn${prefix}${tab.slug}`)}
        href="/learn{prefix}{tab.slug}"
        rel="prefetch"
        class="font-display text-white text-base uppercase relative h-full flex
        items-center justify-center flex-1 p-2 sm:p-0">
        {tab.name}
        {#if selected == tab.slug}
          <div
            class="w-full absolute bg-white h-1 bottom-0"
            in:receive={{ key: prefix + 'underline' }}
            out:send={{ key: prefix + 'underline' }} />
        {/if}
      </a>
    {/each}

  </nav>
</div>
