<template>
  <div :class="['circular-progress', progressClass]">
    <svg :width="size" :height="size" viewBox="0 0 100 100">
      <circle class="background-ring" :stroke-width="strokeWidth" cx="50" cy="50" r="45"></circle>
      <circle class="progress-ring" :stroke-dasharray="circumference" :stroke-dashoffset="offset" :stroke-width="strokeWidth" cx="50" cy="50" r="45"></circle>
    </svg>

    <div class="progress-value">
      <slot>
        <div>{{ progress }}%</div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100
      },
      size: {
        type: Number,
        default: 100
      },
      strokeWidth: {
        type: Number,
        default: 9
      },
      status: {
        type: String,
        default: "success" // Default status is 'success'
      }
    },
    computed: {
      circumference() {
        return 2 * Math.PI * 45;
      },
      offset() {
        return this.circumference * (1 - this.progress / 100);
      },
      progressClass() {
        return `progress-${this.status}`;
      }
    }
  };
</script>

<style>
  .circular-progress {
    position: relative;
    display: inline-block;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .background-ring {
    fill: none;
    stroke: #f3f3f3; /* Background color */
  }

  .progress-ring {
    fill: none;
    stroke-linecap: butt; /* Remove border radius */
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, sans-serif;
    font-size: 10px;
  }

  .progress-success .progress-ring {
    stroke: #5eca39;
  }

  .progress-warning .progress-ring {
    stroke: #dd9553;
  }

  .progress-error .progress-ring {
    stroke: #cb4b4b;
  }
</style>
