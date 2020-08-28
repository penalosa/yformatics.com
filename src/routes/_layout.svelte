<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  html,
  body,
  #sapper {
    height: 100%;
    background: #fafafa;
  }
  body * {
    border-color: initial;
  }
</style>

<slot />
