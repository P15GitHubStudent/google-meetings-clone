<template>
  <q-btn-dropdown
    class="btn-meeting-info"
    :class="{ 'dropdown-visible-content': isDropdownContentVisible }"
    @show="isDropdownContentVisible = true"
    @hide="isDropdownContentVisible = false"
    icon="info"
  >
    <q-card class="meeting-info-card move-left-right">
      <q-card-section class="row items-center q-pb-none q-pl">
        <div class="text-h6">Meeting Chat</div>
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
        <!-- <q-chat-message :text="['hey, how are you?']" sent /> -->
        <div class="chat-messages-container">
          <div class="chat-message">
            <div class="chat-message-header">
              <span>Name</span>
              <span>Alex</span>
            </div>
            <div class="chat-message-text">Here goes the message</div>
          </div>

          <div class="chat-message">
            <div class="chat-message-header">
              <span>Name</span>
              <span>Alex</span>
            </div>
            <div class="chat-message-text">Here goes the message</div>
          </div>
        </div>
      </q-card-section>
      <q-space />
      <q-card-section class="chat-send-message-section">
        <q-input filled v-model="text" label="Filled" />
      </q-card-section>
    </q-card>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: "meeting-chat",
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
      text: "",
    };
  },
  methods: {
    onCloseButton() {
      this.$emit("input", false);
    },
  },
};
</script>

<style scoped>
.chat-messages-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-meeting-info {
  border: none !important;
}

.chat-send-message-section {
  margin-top: auto;
  background-color: red;
}

.dropdown-visible-content {
  color: rgb(138, 180, 248);
}

.meeting-info-card {
  word-wrap: break-word;
  white-space: pre-wrap;
  min-width: 20rem;
  min-height: 30rem;
  background-color: #fff;
  color: black;
}
</style>
