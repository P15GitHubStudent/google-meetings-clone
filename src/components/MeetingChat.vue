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

    <q-card-section
      class="q-pa-md column col justify-end"
      style="border: 1px solid black"
    >
      <!-- <q-list>
        <q-item
          v-for="(message, index) in messages"
          :key="index"
          class="text-black"
        >
          <q-item-section class="text-black">
            <p>{{ message.from }}</p>
            <p>{{ message.text }}</p>
          </q-item-section>
        </q-item>
      </q-list> -->
      <q-scroll-area
        class="chat-messages-scrollarea-box"
        ref="chat-messages-scroll-area"
      >
        <div v-for="(message, index) in messages" :key="index">
          <p class="">{{ message.from }}</p>
          <p>{{ message.text }}</p>
        </div>
      </q-scroll-area>

      <!-- <div>Alex - 10:30AM</div>
        <p>This is a text</p> -->
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

      <q-form method="post" @submit.prevent="sendMessage">
        <div class="flex position-relative">
          <input
            type="text"
            class="input-chat-message"
            placeholder="message"
            :value="text"
            @input="onInputChatMessage"
          />
          <q-btn
            icon="send"
            class="send-chat-message-btn"
            flat
            rounded
            v-bind="sendBtnDynamicProps"
            @click="sendMessage"
          ></q-btn>
          <!-- ... -->
        </div>
      </q-form>
    </q-footer>
  </q-card>
</template>

<script>
import handlesDates from "../mixins/handlesDates";

export default {
  name: "meeting-chat",
  mixins: [handlesDates],
  mounted() {
    // this.getMessages();
  },
  created() {
    this.getMessages();
  },
  data() {
    return {
      text: "",
      messages: [],
    };
  },
  methods: {
    getMessages() {
      this.messages = [
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
      ];
      // for (let c = 0; c < 1000; c++) {
      //   this.messages.push({ text: "dfdf", from: "dfdfd" });
      // }
      // this.messages.push({text: "dfdf", from: "dfdfd"})
    },

    onInputChatMessage(event) {
      this.text = event.target.value;
    },
    onCloseButton() {
      this.$emit("close");
    },
    sendMessage() {
      if (this.text.length <= 0) {
        return;
      }

      this.messages.push({
        text: this.text,
        from: `me - ${this.formatAMPM()}`,
      });

      this.text = "";

      this.scrollToElement("chat-messages-scroll-area");

      this.$refs["chat-messages-scroll-area"].scrollTop =
        this.$refs["chat-messages-scroll-area"].scrollHeight;
    },
  },
  computed: {
    sendBtnDynamicProps() {
      return {
        "text-color": this.text.length > 0 ? "blue" : "grey",
        disable: this.text.length <= 0 ? true : false,
      };
    },
  },
};
</script>

<style>
.send-chat-message-btn {
  position: absolute;
  top: 50%;
  left: 85%;
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
  width: 100%;
  padding-right: 3rem;
  inline-size: 100%;
  overflow-wrap: break-word;
}

.chat-meeting {
  word-wrap: break-word;
  white-space: pre-wrap;
  width: 100%;
  height: 100%;
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

.chat-messages-scrollarea-box {
  height: 40rem;
}

@media (min-height: 700px) {
  .chat-messages-scrollarea-box {
    height: 35rem;
  }
}

@media (min-height: 1000px) {
  .chat-messages-scrollarea-box {
    height: 60rem;
  }
}

@media (min-height: 1100px) {
  .chat-messages-scrollarea-box {
    height: 120rem;
  }
}
</style>
