<script lang="ts">
  import type { Features } from "$lib/types";
  export let total: number;
  export let selectedFeatures: Features[];
  export let billingCycle: "monthly" | "yearly";
  export let selectedPlan: { title: string; price: number };
  export let gotoStep: (step: number) => void;
  $: cycle = billingCycle === "monthly" ? "mo" : "yr";
</script>

<div class="bg-blue-50 p-4 rounded-md mb-5">
  <div class="flex justify-between items-center border-b mb-4 pb-4 border-gray-400">
    <div>
      <p class="text-marine-blue font-bold">
        {selectedPlan.title} ({billingCycle === "monthly" ? "Monthly" : "Yearly"})
      </p>
      <button on:click={() => gotoStep(2)} class="text-gray-400 underline">Change</button>
    </div>
    <p class="text-marine-blue font-bold">$9/{cycle}</p>
  </div>
  {#each selectedFeatures as feature (feature.title)}
    <div class="flex justify-between py-2">
      <p class="text-gray-400 inline-block">{feature.title}</p>
      <p class=" text-marine-blue text-sm">${feature.price}/{cycle}</p>
    </div>
  {/each}
</div>
<div class="flex justify-between">
  <p class="text-gray-400">Total (per {billingCycle === "monthly" ? "month" : "year"})</p>
  <p class="text-blue-800 font-bold text-lg">+{total}/{cycle}</p>
</div>
