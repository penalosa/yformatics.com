<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(
      `/learn/${params.level}/${params.subject}/${params.unit}.json`
    );
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
  import Tabs from "../../../../../components/Tabs.svelte";
  import TopicCards from "../../../../../components/TopicCards.svelte";
  import { fade, fly, slide, blur } from "svelte/transition";
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
</script>

<style>

</style>

<svelte:head>
  <title>{config.level.name} | YFormatics</title>
</svelte:head>
{#if $page.params.level && $page.params.subject && $page.params.unit && !$page.params.topic}
  <main class="">
    <Tabs
      colour={config.title.colour}
      tabSuffix={`${config.title.name} | Yformatics`}
      tabs={config.levels}
      selected={config.level.slug}
      prefix="/{$page.params.level}/{$page.params.subject}/" />

    <TopicCards
      cards={config.subjects}
      prefix="{$page.params.level}/{$page.params.subject}/{config.level.slug}" />

  </main>
{/if}
