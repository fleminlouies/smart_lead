<template>
  <div class="flex px-4 items-center border-b-2 min-h-[52px]">
    <div class="mt-auto flex flex-col items-center">
      <label class="text-sm">{{ title }}</label>
      <img src="../assets/rectangle.svg" alt="active" class="mt-2 w-[39px]" />
    </div>
    <slot />
  </div>
</template>

<script>
  import { ref, computed, defineProps } from "vue";

  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
</script>
