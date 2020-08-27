<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/learn/${params.level}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { config: data };
    } else {
      this.error(res.status, data);
    }
  }
</script>

<script>
  export let config;
  import Tabs from "../../../components/Tabs.svelte";
  import Cards from "../../../components/Cards.svelte";
  import { fade, fly, slide, blur } from "svelte/transition";
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
</script>

<style>

</style>

<svelte:head>
  <title>{config.level.name} | YFormatics</title>
</svelte:head>
{#if $page.params.level && !$page.params.subject}
  <main class="">
    <Tabs
      tabSuffix={`YFormatics`}
      tabs={config.levels}
      selected={config.level.slug} />

    <Cards cards={config.subjects} prefix={config.level.slug} />

  </main>
{/if}
