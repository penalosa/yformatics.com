<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(
      `/learn/${params.level}/${params.subject}/${params.unit}/${params.topic}.json`
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
  let article;
  import { onMount } from "svelte";
  export let config;
  const onMountHandler = () => {
    const handleClick = (e) => {
      if (e.target.className === "toc-link-a") {
        e.preventDefault();
        document
          .getElementById(e.target.attributes.href.nodeValue.slice(1))
          .scrollIntoView({ behavior: "smooth" });
      }
      if (e.target.className === "toc-link") {
        e.preventDefault();

        document
          .getElementById(
            e.target.firstChild.attributes.href.nodeValue.slice(1)
          )
          .scrollIntoView({ behavior: "smooth" });
      }
    };
    article.addEventListener("click", handleClick);
    return () => article.removeEventListener("click", handleClick);
  };
  onMount(() => {
    return onMountHandler();
  });
</script>

<style>
  article :global(h1) {
    font-weight: 400;
  }
  article :global(h2) {
    font-weight: 400;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
  article :global(.table-of-contents ul) {
    list-style: none !important;
    text-align: center;
  }
  article :global(.table-of-contents li::before) {
    display: none;
  }
  article :global(.table-of-contents li) {
    font: 400 20px/1.45 europa, serif;
    text-transform: capitalize;
    display: inline-block;
    padding: 8px 20px 10px 20px;
    border-radius: 64px;
    text-decoration: none;
    border: 0;
    outline: 0;
    margin: 8px;
    cursor: pointer;
    background: #2196f3;
    color: #fff !important;
  }
  article :global(.table-of-contents li a) {
    text-decoration: none;
    color: #fff !important;
  }
  article :global(.table-of-contents li:hover) {
    background: #1f87e5;
  }
  article.prose :global(pre code::after) {
    display: none;
  }
  article :global(.katex) {
    font-size: 1em;
  }
</style>

<svelte:head>
  <title>{config.structure.name} | Yformatics</title>
</svelte:head>

<main>
  <article
    class="prose mx-auto prose-md md:prose-lg font-sans mb-20 mt-20 px-3"
    bind:this={article}>
    <h1 class="text-center font-display font-normal">
      {config.structure.name}
    </h1>
    {@html config.content}
  </article>
</main>
