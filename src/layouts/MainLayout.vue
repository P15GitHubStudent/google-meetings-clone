
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="row bg-white text-black" style="vertical-align:top;">
          <div class="col-md-3">
                <img class="logo" src="../assets/logo.png">
                <span style="font-size:22px;color:grey;font-weight:500;"> meetings</span>
          </div>
          <div class="offset-3"></div>
          <div class="col-md-6" style="text-align:right;">
             <img class="logo" width="30" height="30" src="../assets/cog-transfer.svg">
              <img class="logo" width="30" height="30" src="../assets/cog-transfer.svg">
              <img class="logo" width="30" height="30" src="../assets/cog-transfer.svg">
          </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.mycontainer{
  align-items: center;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 2rem);
    padding: 0 1rem;
}
.logo{
      font-family: 'Product Sans',Arial,sans-serif;
    font-size: 22px;
    line-height: 24px;
    padding-left: 8px;
    position: relative;
    top: -1.5px
;
    vertical-align: middle;
}
</style>
