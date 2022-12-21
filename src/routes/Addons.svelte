<script lang="ts">
  import { cx } from "$lib/cx";
  export let addons: any[];
  export let billingCycle: "monthly" | "yearly";
  export let toggleFeature: (title: string, checked: boolean) => void;
</script>

{#each addons as addon (addon.title)}
  <div
    class={cx(
      "p-4 rounded-md border mb-5 last-of-type:mb-0 duration-200 ease-out flex gap-5 items-center",
      addon.selected ? "border-marine-blue" : " border-gray-300"
    )}
  >
    <input
      on:change={(e) => toggleFeature(addon.title, e.currentTarget.checked)}
      bind:checked={addon.selected}
      type="checkbox"
      class="accent-blue-600 h-5 w-5 rounded-md"
    />
    <div class="basis 3/4 grow flex justify-between">
      <div class="">
        <p class="text-marine-blue font-bold">{addon.title}</p>
        <p class="text-gray-400">{addon.description}</p>
      </div>
      <p class="text-blue-800">{`$${addon.price}/${billingCycle === "monthly" ? "mo" : "y"}`}</p>
    </div>
  </div>
{/each}
