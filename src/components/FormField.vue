<template>
  <div class="flex flex-col gap-1">
    <div class="flex items-center">
      <label class="text-xs text-textGray">{{ label }}</label>
      <slot name="label"></slot>
    </div>
    <slot></slot>
    <span v-if="error" class="text-negative text-xs">{{ error }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      error: {
        type: String,
        default: null
      }
    }
  };
</script>
