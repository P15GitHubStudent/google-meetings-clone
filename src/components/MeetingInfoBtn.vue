<template>
  <q-card class="meeting-info-card move-left-right">
    <q-card-section class="row items-center q-pb-none q-pl">
      <div class="text-h6">Meeting Details</div>
      <q-space />
      <q-btn
        icon="close"
        flat
        round
        dense
        v-close-popup
        @click="onCloseButton"
      />
    </q-card-section>

    <q-card-section>
      <p class="q-ml q-mb">Information for Participation</p>
      <p class="q-mb q-ml sharable" ref="meeting-url">
        {{ meetingUrl }}
      </p>
      <q-btn
        class="btn-content-copy"
        flat
        icon="content_copy"
        label="Copy Content Clipboard"
        text-color="blue"
        @click="onCopyToClipboard"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import copyClipboardUtil from "../mixins/copyClipboard.js";

export default {
  name: "meeting-info-btn",
  mixins: [copyClipboardUtil],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    meetingUrl: {
      type: String,
    },
  },
  data() {
    return {
      isDropdownContentVisible: false,
    };
  },
  methods: {
    onCloseButton() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.btn-meeting-info {
  border: none !important;
}

.dropdown-visible-content {
  color: rgb(138, 180, 248);
}

.meeting-info-card {
  word-wrap: break-word;
  white-space: pre-wrap;
  width: 100%;
  min-height: 30rem;
  background-color: #fff;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
}

/* TODO: make the animation work  */
/* .move-left-right {
  animation: moveFromLeftToRight 1.2s;
}

@keyframes moveFromLeftToRight {
  0% {
    overflow: hidden;
    opacity: 0;
    transform: translateX(200px);
  }

  0% {
    overflow: hidden;
    opacity: 50%;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
} */
</style>
