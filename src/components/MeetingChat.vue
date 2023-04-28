t
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

    <q-footer class="bg-white">
      <!-- <q-input rounded outlined v-model="text">
        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="schedule"
            @click="text = ''"
            class="cursor-pointer"
          />
          <q-icon name="schedule" />
        </template>
      </q-input> -->
      <div class="flex position-relative">
        <input type="text" class="input-chat-message" placeholder="message" />
        <q-btn
          icon="send"
          class="send-chat-message-btn"
          flat
          rounded
          text-color="blue"
        ></q-btn>
      </div>
    </q-footer>
  </q-card>
</template>

<script>
export default {
  name: "meeting-chat",
  data() {
    return {
      text: "",
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
.send-chat-message-btn {
  position: absolute;
  top: 50%;
  right: 0.2rem;
  transform: translate(-50%, -50%);
}

.input-chat-message:focus {
  outline-width: 0;
}

.input-chat-message {
  background: rgb(241 243 244);
  border-radius: 25px;
  display: flex;
  min-height: 2.25rem;
  margin: 0.9375rem;
  overflow: hidden;
  position: relative;
  width: 90%;
  padding-right: 2rem;
  padding-left: 2rem;
}

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
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
