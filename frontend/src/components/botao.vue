<template>
  <button v-on:click="toggleModal" id="open-modal">
    <i :class="['fa regular', icon]"></i>
    {{ type }}
  </button>
</template>

<script>
export default {
  props: {
    type: String, 
    icon: String,
  },
  methods: {
    toggleModal() {
      const modal = document.querySelector("#modal");
      const fade = document.querySelector("#fade");
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
  }
};
</script>

<style>
#open-modal {
  padding: 0.6rem 1.2rem;
  background-color: #4d72d6;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 15px;
  margin-right: 5px;
  box-shadow: 0 1px 2px 0 #000000;
  transition: 0.2s all;
}

#open-modal i {
  font-size: 20px;
  margin-right: 10px;
}

#open-modal:active{
    transform: scale(0.95);
    box-shadow: 2px 2px var(--black);
}

@media screen and (max-width: 370px) {
  #open-modal {
    padding: 5px;
    width: 10em;
  }
}

@media screen and (max-width: 370px) {
  #open-modal {
    padding: 5px;
    width: 150px;
  }
}

</style>