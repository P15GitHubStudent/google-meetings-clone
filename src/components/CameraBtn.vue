<template>
  <q-btn round v-bind="cameraProps" @click="onClick"> </q-btn>
</template>
<script>
export default {
  name: "camera-btn",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["input"],
  model: {
    prop: "value",
    event: "update:value",
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("input", !this.value);
    },
  },
  computed: {
    cameraProps() {
      let cameraDisabled = this.value;
      return {
        icon: cameraDisabled ? "videocam_off" : "videocam",
        color: cameraDisabled ? "red" : "blue-grey-9",
        round: true,
      };
    },
  },
};
</script>
