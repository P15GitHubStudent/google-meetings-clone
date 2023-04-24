<template>
  <q-layout view="hHh lpR fFf" red="parent" id="parent">
    <q-header elevated class="bg-blue-grey-8">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar-title>
        <q-toggle
          v-model="darkMode"
          icon="light_mode"
          class="q-m-r-auto"
          size="4rem"
          style="max-width: 100px"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div
        class="bg-dark w-100 h-100"
        style="width: 2000px; height: 2000px"
      >
          <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
    </div>
    </q-page-container>

    <q-footer elevated class="bg-blue-grey-8 text-white">
      <q-toolbar>
        <div class="row justify-between full-width">
          <div class="toolbar-call-info row">
            <span>{{ formatAMPM }} &nbsp; | &nbsp; </span>
            <span>{{ meetingId }}</span>
          </div>

          <div>
            <microphone-btn
              :value="microphoneDisabled"
              @input="onMicrophoneInput"
            ></microphone-btn>
            <camera-btn
              :value="cameraDisabled"
              @input="onCameraInput"
            ></camera-btn>

            <p>Meeting Chat</p>
            <meeting-chat></meeting-chat>

            <q-btn round icon="screen_share"></q-btn>
            <q-btn round icon="more"></q-btn>
            <q-btn round icon="present_to_all"></q-btn>
            <q-btn round icon="mood"></q-btn>
            <q-btn round icon="call_end" color="red" @click="endCall"></q-btn>
          </div>

          <div>
            <!-- For sending Invitation Modal/Dialog Component -->
            <q-dialog ref="dialogRef" v-model="personInviteClicked">
              <InvitePeopleMeeting
                @close="personInviteClicked = false"
              ></InvitePeopleMeeting>
            </q-dialog>

            <MeetingInfoBtn
              v-model="clickedOnMeetingInfo"
              :meeting-url="meetingUrl"
            ></MeetingInfoBtn>

            <!-- modal with text + button to invite users !-->
            <q-btn-dropdown
              class="btn-meeting-invite-people"
              icon="people"
              ref="people-dropdown-btn"
              @click="onMeetingInfoClick"
            >
              <Transition name="fade">
                <q-card
                  ref="meeting-info-ref"
                  style="
                    width: 20rem;
                    height: 30rem;
                    color: black;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    background-color: #fff;
                    transition: transform: translateX(-10px) 4s ease-in-out;
                  "
                >
                  <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Invite People</div>
                    <q-space />
                    <q-btn
                      icon="close"
                      flat
                      round
                      dense
                      v-close-popup
                      @click="clickedOnMeetingInfo = false"
                    />
                  </q-card-section>

                  <q-card-section>
                    <q-btn
                      icon="person_add"
                      label="Invite"
                      @click="onPersonInviteClick"
                    ></q-btn>
                  </q-card-section>

                  <q-card-section>
                    dfdfd Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Rerum repellendus sit voluptate voluptas eveniet
                    porro. Rerum blanditiis perferendis totam, ea at omnis vel
                    numquam exercitationem aut, natus minima, porro labore.
                  </q-card-section>
                </q-card>
              </Transition>
            </q-btn-dropdown>
            <!-- End of Button to Invite Users -->

            <!-- <q-btn icon="people"></q-btn>
              <q-btn icon="chat"></q-btn> -->
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import InvitePeopleMeeting from "../components/InvitePeopleMeeting.vue";
import MeetingInfoBtn from "../components/MeetingInfoBtn.vue";
import MicrophoneBtn from "../components/MicrophoneBtn.vue";
import CameraBtn from "../components/CameraBtn.vue";
import MeetingChat from "../components/MeetingChat.vue";

export default {
  name: "meeting",
  setup() {
    const $q = useQuasar();
    $q.dark.set(true);
    return {};
  },
  components: {
    InvitePeopleMeeting,
    MeetingInfoBtn,
    MicrophoneBtn,
    CameraBtn,
    MeetingChat,
  },
  data() {
    return {
      meetingUrl: "https://meet.google.com/wvg-wakv-abp",
      microphoneDisabled: false,
      cameraDisabled: false,
      clickedOnMeetingInfo: false,
      personInviteClicked: false,
      darkMode: false,
      meetingId: this.$route.params.id,
      leftDrawerOpen: false,
      rightDrawerOpen: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.positionInfo = this.$refs['info']
      // console.log(this.$refs)
    });
  },
  methods: {
    onMicrophoneInput(value) {
      this.microphoneDisabled = value;
    },

    onCameraInput(value) {
      this.cameraDisabled = value;
    },

    endCall() {
      console.log("end call !");
    },

    onMeetingInfoClick() {
      this.clickedOnMeetingInfo != this.clickedOnMeetingInfo;
    },

    onPersonInviteClick() {
      this.personInviteClicked = true;
    },
  },
  watch: {
    clickedOnMeetingInfo(
      clickedOnMeetingInOldValue,
      clickedOnMeetingInfoNewValue
    ) {
      if (clickedOnMeetingInfoNewValue) {
      }
    },

    peopleToInvite: {
      deep: true,
      handler() {
        console.log(this.peopleToInvite);
      },
    },
  },
  computed: {
    formatAMPM() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + minutes + " " + ampm;
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
}
.slide-fade-enter-active {
  transition: all 0.6;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.btn-meeting-info {
}
</style>
