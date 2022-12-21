<script lang="ts">
  import { cx } from "$lib/cx";

  export let className = "";
  export let intent: "primary" | "secondary" = "primary";
  export let onClick: () => void = () => {};
  export let disabled = false;
</script>

<button
  {disabled}
  on:click={onClick}
  class={cx(
    `px-4 py-2  rounded-md font-bold  active:top-[2px] ${className}`,
    intent === "primary" ? "bg-marine-blue text-white" : "text-gray-400",
    disabled ? "static" : "relative"
  )}
>
  <slot />
</button>
