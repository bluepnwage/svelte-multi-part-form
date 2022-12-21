<script lang="ts">
  import { cx } from "$lib/cx";
  export let plans: any[];

  export let billingCycle: "monthly" | "yearly";
  export let toggleCycle: () => void;
  export let selectedPlan: any;
  export let choosePlan: (title: string) => void;
  $: cycle = billingCycle === "monthly" ? "mo" : "yr";
</script>

<div class="flex justify-evenly gap-5 mb-5">
  {#each plans as plan (plan.title)}
    <button class="basis-1/3 text-start" on:click={() => choosePlan(plan.title)}>
      <div
        class={cx(
          "border rounded-md cursor-pointer duration-200 ease-out p-5 ",
          selectedPlan.title === plan.title ? "border-blue-500" : "border-gray-300"
        )}
      >
        <img src={plan.icon} alt="" class="mb-10 inline-bock" />
        <p class="text-marine-blue font-semibold mb-2 inline-block">{plan.title}</p>
        <p class="text-gray-400 mb-2">${plan.price}/{cycle}</p>
        {#if billingCycle === "yearly"}
          <p class="text-marine-blue">2 months free</p>
        {:else}
          <div aria-hidden class="h-6" />
        {/if}
      </div>
    </button>
  {/each}
</div>
<div class="flex justify-center mt-5">
  <div class="flex gap-5 items-center">
    <p class={cx("font-semibold", billingCycle === "monthly" ? "text-marine-blue" : "text-gray-400")}>Monthly</p>
    <input
      checked={billingCycle === "yearly"}
      on:change={toggleCycle}
      type="checkbox"
      class="border border-gray-500 rounded-full toggle"
    />
    <p class={cx("font-semibold", billingCycle === "yearly" ? "text-marine-blue" : "text-gray-400")}>Yearly</p>
  </div>
</div>

<style>
  .toggle {
    appearance: none;
    outline: none;
    position: relative;
    width: 60px;
    height: 30px;
    padding: 1px;
  }

  .toggle:checked {
    background-color: hsl(213, 96%, 18%);
  }

  .toggle::before,
  .toggle:checked::before {
    content: " ";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: translate 100ms linear;
  }

  .toggle::before {
    z-index: 9999;
    translate: 5%;
    background-color: hsl(213, 96%, 18%);
  }
  .toggle:checked::before {
    z-index: 9999;
    translate: 175%;
    background-color: white;
  }
</style>
