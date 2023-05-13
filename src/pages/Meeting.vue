<template>
  <q-layout view="hHh lpR fFf" red="parent" id="parent">
    <!-- <q-header elevated class="bg-blue-grey-8">
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
    </q-header> -->

    <q-page-container>
      <div
        class="bg-dark w-100 h-100"
        style="width: 2000px; height: 2000px"
      ></div>
    </q-page-container>

    <q-footer elevated class="bg-blue-grey-8 text-white">
      <q-toolbar>
        <div class="row justify-between full-width items-center">
          <div class="toolbar-call-info row">
            <span>{{ currentDateTimeAmPm }} &nbsp; | &nbsp; </span>
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
            <!--
            <MeetingInfoBtn
              v-model="clickedOnMeetingInfo"
              :meeting-url="meetingUrl"
            ></MeetingInfoBtn> -->

            <q-btn icon="chat" @click="onClickBtnChat"></q-btn>

            <!-- modal with text + button to invite users !-->
            <q-btn-dropdown
              class="btn-meeting-invite-people"
              icon="people"
              ref="people-dropdown-btn"
              @click="onMeetingInfoClick"
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
                dfdfd Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </q-card-section>
            </q-btn-dropdown>

            <!-- <meeting-chat></meeting-chat> -->

            <!-- End of Button to Invite Users -->

            <!-- <q-btn icon="people"></q-btn>
              <q-btn icon="chat"></q-btn> -->
          </div>
        </div>
      </q-toolbar>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" side="left">
      <component
        v-bind:is="selectedComponentLeft"
        @close="onDrawerClose('left')"
      ></component>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <component
        v-bind:is="selectedComponent"
        @close="onDrawerClose('right')"
      ></component>
    </q-drawer>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import InvitePeopleMeeting from "../components/InvitePeopleMeeting.vue";
import MeetingInfoBtn from "../components/MeetingInfoBtn.vue";
import MicrophoneBtn from "../components/MicrophoneBtn.vue";
import CameraBtn from "../components/CameraBtn.vue";
import MeetingChat from "../components/MeetingChat.vue";
import handlesDates from "../mixins/handlesDates";

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
  mixins: [handlesDates],
  data() {
    return {
      selectedComponentLeft: "meeting-info-btn",
      selectedComponent: "meeting-chat",
      meetingUrl: "https://meet.google.com/wvg-wakv-abp",
      microphoneDisabled: false,
      cameraDisabled: false,
      clickedOnMeetingInfo: false,
      personInviteClicked: false,
      darkMode: false,
      meetingId: this.$route.params.id,
      leftDrawerOpen: false,
      rightDrawerOpen: true,
      currentDateTimeAmPm: "",
      dateTimeUpdateHandler: null,
    };
  },
  mounted() {
    this.currentDateTimeAmPm = this.formatAMPM();
    this.dateTimeUpdateHandler = setInterval(() => {
      this.currentDateTimeAmPm = this.formatAMPM();
    }, 1000 * 60); // update every minute
    this.$nextTick(() => {});
  },
  methods: {
    onMicrophoneInput(value) {
      this.microphoneDisabled = value;
    },

    onClickBtnChat() {
      this.selectedComponent = "meeting-chat";
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
    onDrawerOpen(direction) {},

    onDrawerClose(direction) {
      if (direction === "left") {
        this.selectedComponentLeft = null;
        this.leftDrawerOpen = false;
      } else {
        this.selectedComponentRight = null;
        this.rightDrawerOpen = false;
      }
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
  computed: {},
};
</script>

<style scoped></style>
