<script lang="ts">
  export let name = "";
  export let label = "";
  export let placeholder = "";
  export let id = "";
</script>

<p>
  <label for={id} class="text-marine-blue mb-2 inline-block">{label}</label>
  <input
    {id}
    {placeholder}
    {name}
    class="border outline-none appearance-none w-full border-gray-300 px-4 py-2  rounded-md duration-200 ease-out focus:border-blue-400 "
  />
</p>
