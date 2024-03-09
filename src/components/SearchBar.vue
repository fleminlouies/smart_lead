<template>
  <div class="relative text-xs">
    <input type="text" :value="modelValue" :placeholder="placeHolder" class="border bg-primarySurface border-gray-300 rounded-sm py-2 pl-8 pr-4 focus:outline-none" @input="updateModelValue($event.target.value)" />
    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
      <img src="../assets/search.svg" alt="Search" />
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
        default: "",
        required: true
      },
      placeHolder: {
        type: String,
        default: "Search..."
      }
    },
    emits: ['update:modelValue', 'change'],
    methods: {
      updateModelValue(value) {
        this.$emit("update:modelValue", value);
        this.$emit("change", value);
      }
    }
  };
</script>
