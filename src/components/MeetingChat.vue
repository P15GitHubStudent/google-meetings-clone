<template>
  <q-card class="chat-meeting move-left-right fit">
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

    <div class="messages-container">
      <div class="chat-messages-settings">
        <div class="chat-message-setting-outer">
          <div class="chat-message-setting-inner">
          <span>Allow all to send messages</span>
          <q-toggle
          v-model="allowPeopleToSendMessages"
          checked-icon="check"
          color="grey"
          icon=""
        />
        </div>
        </div>

        <div class="chat-message-setting-outer">
          <div class="chat-message-setting-inner">
          <span>All the messages will be deleted once this call will be terminated</span>
        </div>
        </div>


        <div class="chat-messages-container-outer">
          <div v-for="(message, index) in messages" :key="index">
            <div class="chat-messages-container-inner">
              <div class="chat-message-header">
              {{ message.from }}
            </div>
            <div class="chat-message-text">
             {{ message.text }}
            </div>
            </div>

          </div>

        </div>

      </div>
    </div>

    <div class="text-message-container-outer">
          <div class="text-message-container-inner">
           <div class="flex-grow-1">
            <textarea class="text-message-type-area" placeholder="message" v-model="text">
            </textarea>
           </div>
           <div>
            <q-btn icon="send" flat round v-bind="sendBtnDynamicProps" @click="sendMessage"></q-btn>
           </div>


          </div>

        </div>

  </q-card>
</template>

<script>
import handlesDates from "../mixins/handlesDates";
import { debounce } from 'quasar'

export default {
  name: "meeting-chat",
  mixins: [handlesDates],
  data() {
    return {
      canSendChatMessage: true,
      allowPeopleToSendMessages: true,
      text: "",
      messages: [
      ],
    };
  },
  methods: {
    // onInputChatMessage(event) {
    //   this.text = event.target.value;
    // },
    onCloseButton() {
      this.$emit("close");
    },
    sendMessage() {

      if (this.text.length <= 0) {
        return;
      }

      this.canSendChatMessage = false

      this.messages.push({
        text: this.text,
        from: `me - ${this.formatAMPM()}`,
      })

      this.text = ""


    },
  },
  computed: {
    sendBtnDynamicProps() {
      return {
        "text-color": this.text.length > 0 ? "blue" : "grey",
        disable: this.text.length <= 0 && !this.canSendChatMessage ? true : false,
      };
    },
    // sendMessageBtnProps: {
    //   color: this.text.length > 0 ? "blue" : "grey ",
    // },
  },
};
</script>

<style>

.messages-container
{
  display: flex;
  flex-direction: column;
  height:100%;
  width: 100%;
}

.flex-grow-1
{
  flex-grow: 1;
}

.chat-message-setting-outer
{
    background-color: rgb(241,243,244);
    border-radius: 4px;
    color: black;
    margin: 0.75rem;
    padding: 0.75rem;
}

.text-message-container-outer
{
    background-color: rgb(241,243,244);
    border-radius: 25px;
    display: flex;
    min-height: 2.25rem;
    margin: 0.9375rem;
    overflow: hidden;
    position: relative;
}


.text-message-container-inner
{
  display: flex;
  flex: 1;
  margin-top: 8px;
  margin-bottom: 8px;
}

.chat-messages-container-inner
{
    display: block;
    padding: 0.75rem 1.5rem 0.875rem;
    display: flex;
    flex-direction: column;
}

.chat-messages-container-outer
{
    box-sizing: border-box;
    flex: 1;
    min-height: 2.25rem;
    overflow-y: auto;
    padding-bottom: 0.5rem;
    user-select: text;
    width: 100%;
}

.chat-message-setting-inner
{
  display: flex;
  background-color: rgb(241,243,244);
  line-height: 1rem;
  align-items: center;
}

.text-message-type-area
{
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  background-color: inherit;
}

/* .send-chat-message-btn {
  position: absolute;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);
} */

/* .input-chat-message:focus {
  outline-width: 0;
}

.input-chat-message-textbox {
  background-color: inherit;
  border: none;
  outline: none;
  resize: none;
  padding-left: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.input-chat-message {
  background: rgb(241 243 244);
  border-radius: 25px;
  display: flex;
  min-height: 2.25rem;
  margin: 0.9375rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
} */

.chat-meeting {
  word-wrap: break-word;
  white-space: pre-wrap;
  width: 100%;
  min-height: 30rem;
  height: 85vh;
  background-color: #fff;
  color: black;
  /* position: absolute; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
