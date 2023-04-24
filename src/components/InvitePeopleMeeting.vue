<template>
  <q-card class="q-dialog-plugin" style="width: 70%">
    <q-card-section>
      <q-select
        filled
        v-model="searchInput"
        use-input
        input-debounce="0"
        label="Search People"
        :options="options"
        @filter="filterFn"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
    </q-card-section>
    <q-card-section>
      <q-list
        bordered
        class="rounded-borders"
        style="max-width: 600px"
        v-for="(personToInvite, index) in peopleToInvite"
        :key="index"
      >
        <q-item>
          <q-item-section avatar top>
            <q-avatar>
              <img :src="personToInvite.url" />
            </q-avatar>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">{{
                personToInvite.displayName
              }}</span>
            </q-item-label>
            <q-item-label caption lines="1">
              {{ personToInvite.email }}
            </q-item-label>
            <q-item-label
              lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
            >
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-checkbox v-model="personToInvite.checked" class="gt-xs" />
            </div>
          </q-item-section>
        </q-item>

        <q-separator spaced />
      </q-list>
    </q-card-section>
    <!-- buttons example -->
    <q-card-actions align="right">
      <q-btn color="primary" label="OK" @click="onSendInvite" />
      <q-btn color="primary" label="Cancel" @click="onCancel" />
    </q-card-actions>
  </q-card>
</template>

<script>
import useQuasar from "quasar/src/composables/use-quasar.js";

const peopleToInvite = [
  {
    name: "Alexandros",
    displayName: "Alexandros Toulakis",
    email: "afrodi@afroditi.com",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Alexandros",
    displayName: "Stergios Toulakis",
    email: "afrodi@afroditi.com",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Afroditi",
    email: "afrodi@afroditi.com",
    displayName: "Afroditi Maria Toulaki",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Afroditi",
    email: "afrodi@afroditi.com",
    displayName: "Afroditi Maria Toulaki",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Afroditi",
    email: "afrodi@afroditi.com",
    displayName: "Afroditi Maria Toulaki",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Afroditi",
    email: "afrodi@afroditi.com",
    displayName: "Afroditi Maria Toulaki",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Afroditi",
    email: "afrodi@afroditi.com",
    displayName: "Afroditi Maria Toulaki",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Afroditi",
    email: "afrodi@afroditi.com",
    displayName: "Afroditi Maria Toulaki",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
  {
    name: "Afroditi",
    email: "afrodi@afroditi.com",
    displayName: "Afroditi Maria Toulaki",
    url: "https://cdn.quasar.dev/img/avatar2.jpg",
    checked: false,
  },
];

const stringOptions = peopleToInvite.map(
  (personToInvite) => personToInvite.email
);

export default {
  name: "invite-people-meeting",
  setup() {
    const $q = useQuasar();
    return {};
  },
  data() {
    return {
      searchInput: null,
      colorIconMic: "black",
      microphoneDisabled: false,
      cameraDisabled: false,
      clickedOnMeetingInfo: false,
      personInviteClicked: false,
      options: stringOptions,
      peopleToInvite: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.peopleToInvite = peopleToInvite;
    });
  },
  methods: {
    onSendInvite(event) {
      // console.log(event)
      this.$q.notify({
        message: "Sended invitation",
        color: "positive",
        position: "bottom",
        actions: [{ label: "Ok", color: "white" }],
      });
    },

    onCancel() {
      this.$emit("close");
    },
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.options = stringOptions;

          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.options = stringOptions.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
  watch: {
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
