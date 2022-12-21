<script lang="ts">
  import "../app.css";
  import Input from "./Input.svelte";
  import Button from "./Button.svelte";
  import Steps from "./Steps.svelte";
  import Plan from "./Plan.svelte";
  import Addons from "./Addons.svelte";
  import Finishing from "./Finishing.svelte";

  import type { Features } from "$lib/types";
  import { addons, plans } from "$lib/data";

  let currentStep = 1;
  let billingCycle: "monthly" | "yearly" = "monthly";

  const toggleCycle = () => {
    billingCycle = billingCycle === "monthly" ? "yearly" : "monthly";
  };

  let selectedFeatures: Features[] = [];
  let selectedPlan = plans[0];

  const choosePlan = (title: string) => {
    selectedPlan = plans.find((p) => p.title === title)!;
  };

  const toggleFeature = (title: string, checked: boolean) => {
    if (checked) {
      let feature = addons.find((f) => f.title === title)!;
      selectedFeatures = [...selectedFeatures, feature];
    } else {
      selectedFeatures = selectedFeatures.filter((f) => f.title !== title);
    }
  };

  const nextStep = () => {
    if (currentStep === 4) return;
    currentStep++;
  };
  const previousStep = () => {
    if (currentStep === 1) return;
    currentStep--;
  };

  const gotoStep = (step: number) => {
    currentStep = step;
  };

  $: prevDisabled = currentStep === 1;
  $: total = selectedFeatures.reduce((a, c) => a + c.price, 0) + selectedPlan.price;
</script>

<div class="flex items-center justify-center h-screen">
  <div style="min-height: 600px;" class="rounded-md bg-white w-9/12 p-4 flex overflow-hidden">
    <div class="basis-1/3  rounded-md relative">
      <svg
        class="absolute top-0 left-0"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        width="274"
        height="568"
        fill="none"
        viewBox="0 0 274 568"
        ><rect width="274" height="568" fill="#483EFF" rx="10" /><mask
          id="a"
          width="274"
          height="568"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style="mask-type:alpha"><rect width="274" height="568" fill="#fff" rx="10" /></mask
        ><g mask="url(#a)"
          ><path
            fill="#6259FF"
            fill-rule="evenodd"
            d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
            clip-rule="evenodd"
          /><path
            fill="#F9818E"
            fill-rule="evenodd"
            d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
            clip-rule="evenodd"
          /><path
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="bevel"
            stroke-width="5"
            d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
          /><path
            fill="#FFAF7E"
            d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
          /></g
        ></svg
      >
      <Steps {currentStep} />
    </div>
    <div class="basis-2/3 py-5 px-16 flex flex-col justify-between">
      {#if currentStep === 1}
        <section class="space-y-2 mb-5">
          <h2 class="text-marine-blue font-bold text-2xl mb-2">Personal info</h2>
          <p class="text-gray-400 mb-14">Please provide your name, email address, and phone number.</p>
          <Input name={"name"} label={"Name"} placeholder={"e.g. Stephen King"} />
          <Input name={"email"} label={"Email Address"} placeholder={"e.g. stephen.king@lorem.com"} />
          <Input name={"phone"} label={"Phone Number"} placeholder={"555 555-555"} />
        </section>
      {:else if currentStep === 2}
        <section>
          <h2 class="text-marine-blue font-bold text-2xl">Select your plan</h2>
          <p class="text-gray-400 mb-14">You have the option of monthly or yearly billing.</p>
          <Plan {choosePlan} {selectedPlan} {plans} {toggleCycle} {billingCycle} />
        </section>
      {:else if currentStep === 3}
        <section>
          <h2 class="text-marine-blue font-bold text-2xl">Pick add-ons</h2>
          <p class="text-gray-400 mb-14">Add-ons help enhance your gaming experience..</p>
          <Addons {toggleFeature} {billingCycle} {addons} />
        </section>
      {:else}
        <section>
          <h2 class="text-marine-blue font-bold text-2xl">Finishing up</h2>
          <p class="text-gray-400 mb-14">Double check everything lookgs Ok before continuing</p>
          <Finishing {gotoStep} {selectedPlan} {billingCycle} {selectedFeatures} {total} />
        </section>
      {/if}
      <div class="flex justify-between">
        <Button disabled={prevDisabled} intent="secondary" onClick={previousStep}>Previous Step</Button>
        <Button onClick={nextStep}>
          {#if currentStep === 4}
            Confirm
          {:else}
            Next Step
          {/if}
        </Button>
      </div>
    </div>
  </div>
</div>
