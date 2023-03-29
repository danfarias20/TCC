<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="titulo">
          <h1>Agenda</h1>
        </div>
        <button v-on:click="toggleModal" id="open-modal"><i class="fa-regular fa-calendar-plus"></i>Novo
          Agendamento</button>
      </div>
      <div class="content">
        <div class="main-content">
          <Modal />
          <div class="boxContent">
            <div class="container-data">
              <button id="botao-anterior" @click="anterior"><i class="fa-solid fa-circle-chevron-left"></i></button>
              <span ref="data" v-text="formatarData"></span>
              <button id="botao-proximo" @click="proximo"><i class="fa-solid fa-circle-chevron-right"></i></button>
            </div>
            <hr>
            <tabela />
          </div>
        </div>
        <div class="left-content">
          <h2>Agendamento</h2>
          <h3>Nenhum agendamento selecionado</h3>
          <img class="gif" src="../assets/img/blue.gif" alt="searchGif">
          <h3>Selecione um agendamento para visualizar os detalhes</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Modal from '@/components/Modal.vue';
import tabela from '@/components/tabela.vue';

export default {
  name: 'Agenda',
  components: {
    Navbar,
    Modal,
    tabela
  },
  data() {
    return {
      dataAtual: new Date()
    }
  },
  methods: {
    toggleModal() {
      const modal = document.querySelector("#modal");
      const fade = document.querySelector("#fade");

      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    },
    anterior() {
      this.dataAtual.setDate(this.dataAtual.getDate() - 1)
      this.atualizaData()
    },
    proximo() {
      this.dataAtual.setDate(this.dataAtual.getDate() + 1)
      this.atualizaData()
    },
    atualizaData() {
      const hoje = new Date()
      const dia = this.dataAtual.getDate()
      const mes = this.dataAtual.getMonth() + 1
      const ano = this.dataAtual.getFullYear()
      if (this.dataAtual.toDateString() === hoje.toDateString()) {
        this.$refs.data.textContent = 'Hoje'
      } else {
        this.$refs.data.textContent = `${dia}/${mes}/${ano}`
      }
    }
  },
  computed: {
    formatarData() {
      const hoje = new Date()
      if (this.dataAtual.toDateString() === hoje.toDateString()) {
        return 'Hoje'
      } else {
        const dia = this.dataAtual.getDate()
        const mes = this.dataAtual.getMonth() + 1
        const ano = this.dataAtual.getFullYear()
        return `${dia}/${mes}/${ano}`
      }
    }
  }
}
</script>

<style>
section {
  margin: auto;
}

button:hover {
  opacity: 1;
}

.row {
  display: flex;
  justify-content: space-between;

}

#open-modal {
  padding: 0.6rem 1.2rem;
  background-color: #4D72D6;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  opacity: 0.9;
  font-size: 1.1rem;
  margin-bottom: 15px;
  margin-right: 5px;
}

#open-modal i {
  font-size: 20px;
  margin-right: 10px;
}

.container {
  margin-top: 80px;
}

.content {
  display: flex;
  flex-direction: row;
  height: 78vh;
}

.container-data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.container-data button {
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #4D72D6;
}

.container-data span {
  margin: 0 30px;
  font-size: 1.5em;
  font-weight: bold;
}



.main-content {
  border-radius: 20px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 78vh;
}

.boxHeader {
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.titulo {
  color: #4D72D6;
  font-size: 1.2em;
  margin-left: 10px;
}

.main-content h1 {
  color: #4D72D6;
  margin-top: 150px;
  margin-bottom: 20px;
}

.boxContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 78vh;
}


.gif {
  width: 280px;
}

.left-content {
  margin-left: 20px;
  border-radius: 20px;
  width: 28%;
  height: 78vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
}

.left-content .gif {
  width: 50%;
}

.left-content h2 {
  color: #5177E0;
}

.left-content h3 {
  color: #868585;
  text-align: center;
}

/* ===== MEDIA QUERIES=====*/

@media (max-width: 1000px) {
  td:not(:first-of-type) {
    min-width: rem;
  }
}

@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: calc(var(--nav-width) + 2rem);
  }

  /*Show navbar desktop*/
  .show {
    width: calc(var(--nav-width) + 156px);
  }

  /*Add padding body desktop*/
  .body-pd {
    padding-left: calc(var(--nav-width) + 160px);
  }
}



@media screen and (max-width: 901px) {

  .content {
    flex-direction: column;
  }

  main.table {
    width: 85vw;
  }

  .left-content {
    margin-top: 20px;
    width: 100%;
    margin-left: 0px;
  }

  .left-content h1 {
    color: #5177E0;
    margin-top: 20px;
    margin-bottom: 100px;
  }

  .left-content h3 {
    color: #868585;
    margin-left: 10px
  }
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
