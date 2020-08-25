import { crossfade } from "svelte/transition";
import { quintOut } from "svelte/easing";

const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 200)

  // fallback(node, params) {
  //   const style = getComputedStyle(node);
  //   const transform = style.transform === "none" ? "" : style.transform;

  //   return {
  //     duration: 0,
  //     easing: quintOut,
  //     css: (t) => `
  //       transform: ${transform} scale(${t});
  //       opacity: ${t}
  //     `
  //   };
  // }
});

export { send, receive };
