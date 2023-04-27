<template>
  <q-card class="chat-meeting move-left-right">
    <q-card-section class="row items-center q-pb-none q-pl">
      <div class="text-h6">Chat Messages</div>
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

    <q-card-section class="q-pa-md column col justify-end">
      <div class="chat-message">
        <div>Alex - 10:30AM</div>
        <p>This is a text</p>
      </div>
    </q-card-section>

    <q-footer elevated class="bg-blue-grey-8 text-white">
      <q-input></q-input>
    </q-footer>
  </q-card>
</template>

<script>
export default {
  name: "meeting-chat",
  data() {
    return {
      newMessage: "",
      messages: [
        {
          text: "Hey Jim, how are you?",
          from: "me",
        },
        {
          text: "Good thanks, Danny! How are you?",
          from: "them",
        },
        {
          text: "Pretty good!",
          from: "me",
        },
      ],
    };
  },
  methods: {
    onCloseButton() {
      this.$emit("close");
    },
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
    },
  },
};
</script>

<style>
.chat-meeting {
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
</style>
