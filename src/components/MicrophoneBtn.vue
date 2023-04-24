<template>
  <q-btn round v-bind="microphoneProps" @click="onClick"> </q-btn>
</template>

<script>
export default {
  name: "microphone-btn",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["input"],
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("input", !this.value);
    },
  },
  computed: {
    microphoneProps() {
      let microphoneDisabled = this.value;
      return {
        icon: microphoneDisabled ? "mic_off" : "mic_none",
        color: microphoneDisabled ? "red" : "blue-grey-9",
        round: true,
      };
    },
  },
};
</script>
