<template>
  <div class="q-m-md q-mt-md q-ml-md">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h1
          style="
            font-size: 2.5rem;
            line-height: 2.5rem;
            font-family: Georgia, serif;
          "
        >
          Video calls high quality for free and for all
        </h1>
        <span
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          dolores sequi nulla est quo architecto doloribus, non sunt expedita
          laudantium quasi, eum rerum veniam optio esse ipsam recusandae dicta
          possimus. Recusandae sit ad sequi rem natus tempora non reprehenderit
          nulla totam, provident accusantium eaque! Distinctio facilis quo a
          possimus, voluptates esse dolores odio maxime, illo consectetur
          quibusdam aperiam aspernatur doloremque!</span
        >
        <div class="row q-mt-md">
          <q-btn
            @click="onVideoCamClick()"
            icon="videocam"
            color="primary"
            class="q-mr-md"
            >Record now
          </q-btn>
          <q-input
            color="grey-3"
            label-color="black"
            outlined
            v-model="meetingId"
            label="meeting room id"
          >
            <template v-slot:append>
              <q-icon name="keyboard" color="black" />
            </template>
          </q-input>
          <q-btn
            v-if="meetingId.length > 1"
            style="vertical-align: center; padding-top: 1rem"
            noborder="0"
            >join</q-btn
          >

          <q-menu v-model="videocamClicked">
            <q-list style="min-width: 100px">
              <q-item exact>
                <q-item-section avatar>
                  <q-icon name="videocam" />
                </q-item-section>

                <q-item-section @click="prompt">
                  Create a meeting now
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </div>

      <div class="col-md-6 col-sm-12">
        <q-card flat bordered>
          <q-card-section class="w-50">
            <img
              style="max-height: 310px"
              src="https://lh3.googleusercontent.com/g6WWfSMs3V0w2hhsaoc9myxQXmfO3IcRPwIsSo7nUJkNDHFb2JT4bffBiNH50_seojxYfC3AfBz8xNHd5k7tqXVsjRVvHGfJfAPx-zz8Lk7EQ0cPuA=v1-w960"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  firebaseAuth,
} from "boot/firebase.js";

export default {
  name: "index",
  data() {
    return {
      meetingId: "",
      videocamClicked: false,
    };
  },
  methods: {
    prompt() {
      this.$q
        .dialog({
          title: "Prompt",
          message: "What is your Email?",
          prompt: {
            model: "",
            type: "text", // optional
          },
          cancel: true,
          persistent: true,
        })
        .onOk((data) => {
          // console.log('>>>> OK, received', data)
          const auth = getAuth();
          console.log(auth);
          firebaseAuth
            .createUserWithEmailAndPassword(auth, data, "passworHere")
            .then(() => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              console.error("ERROR !" + error.message);
            });
          // console.log("On OK !");
          // console.log("Data:" + data);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
          console.log("On Cancel");
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },

    onCreateMeetingNow() {
      this.prompt();
      // this.$router.push({ name: "meeting", params: { id: "kbz-qbpu-xto" } });
    },
    onVideoCamClick() {
      this.videocamClicked != this.videocamClicked;
    },
  },
};
</script>

<style></style>
