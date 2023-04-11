<template>
  <Navbar/>
  <router-view />
</template>


<script>

import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    showNavbar(toggleId, navId, headerId, bodyId) {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        headerpd = document.getElementById(headerId),
        body = document.getElementById(bodyId)

      if (toggle && nav && headerpd) {
        // show navbar
        nav.classList.toggle('open')
        // change icon
        toggle.classList.toggle('bx-x')

        headerpd.classList.toggle('body-pd')

        body.classList.toggle('body-pd')
      }
    },
  },
  mounted() {
    const toggle = document.getElementById('header-toggle')
    toggle.addEventListener('click', (event) => {
      event.stopPropagation()
      this.showNavbar('header-toggle', 'nav-bar', 'header', 'body-pd')
    })

    window.addEventListener('click', (event) => {
      const nav = document.getElementById('nav-bar')
      if (nav.classList.contains('open') && !event.target.closest('#nav-bar')) {
        this.showNavbar('header-toggle', 'nav-bar', 'header', 'body-pd')
      }
    })
  },
}
</script>

