<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(
      `/learn/${params.level}/${params.subject}.json`
    );
    const data = await res.json();
    if (res.status === 200) {
      this.redirect(
        302,
        `/learn/${params.level}/${params.subject}/${data.units[0].slug}`
      );
    } else {
      this.error(res.status, data);
    }
  }
</script>

<!-- <script>
  export let config;
  import Tabs from "../../../components/Tabs.svelte";
  import Cards from "../../../components/Cards.svelte";
  import { fade, fly, slide, blur } from "svelte/transition";
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
</script><style>

</style><svelte:head>
  <title>Me</title>
</svelte:head>
<main class="min-h-full bg-faint">
  <Tabs tabs={config.levels} selected={config.level.slug} />

  <Cards cards={config.subjects} prefix={config.level.slug} />

</main> -->
