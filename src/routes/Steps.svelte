<script>
  import { cx } from "$lib/cx";
  export let currentStep = 1;
  const steps = [
    {
      title: "Your info",
      step: 1
    },
    {
      title: "Select plan",
      step: 2
    },
    {
      title: "Add-on",
      step: 3
    },
    {
      title: "Summary",
      step: 4
    }
  ];
</script>

<div class="z-50 relative p-10 space-y-5">
  {#each steps as step}
    <div class="flex gap-3 items-center">
      <div
        class={cx(
          "h-10 w-10 font-semibold flex items-center justify-center duration-200 ease-out  rounded-full border border-gray-100",
          step.step === currentStep ? "bg-blue-200 text-marine-blue" : "text-gray-50"
        )}
      >
        {step.step}
      </div>
      <div>
        <p class="text-gray-400 font-semibold text-sm uppercase">Step {step.step}</p>
        <p class="text-gray-100 font-semibold uppercase text-sm">{step.title}</p>
      </div>
    </div>
  {/each}
</div>
