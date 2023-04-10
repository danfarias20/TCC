<template>
  <Navbar />
  <router-view />
</template>


<script>

import Navbar from './components/Navbar.vue';
import axios from 'axios';
import ApiController from '@/ApiController';

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>

