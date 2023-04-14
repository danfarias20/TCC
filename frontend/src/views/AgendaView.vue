<template>
  <section>
    <div class="container">
      <div class="row">
        <titulo :type="'Agenda'" />
        <botao :type="'Novo Agendamento'" :icon="'fa-calendar-plus'" />
      </div>
      <div class="content">
        <div class="main-content">
          <Modal
            :tipo="'agendamento'"
            :icon="'fa-calendar-plus'"
            :mostrarInputsAgendamento="true"
          />
          <div class="boxContent">
            <calendario />
            <tabela :header="topoTabela" :dados="dadosTabela" />
          </div>
        </div>
        <div class="left-content">
          <agendamentoSelecionado />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal.vue";
import titulo from "@/components/titulo.vue";
import botao from "@/components/botaoCadastrar.vue";
import calendario from "@/components/agenda/calendario.vue";
import agendamentoSelecionado from "@/components/agenda/agendamentoSelecionado.vue";
import tabela from "@/components/tabela.vue";

export default {
  name: "Agenda",
  components: {
    Modal,
    titulo,
    botao,
    calendario,
    tabela,
    agendamentoSelecionado,
  },
  data() {
    return {
      topoTabela: ["ID", "PET", "TUTOR", "RAÇA", "VALOR", "STATUS"],
      dadosTabela: [
        {
          id: "1",
          pet: "Cacau",
          tutor: "Ana",
          raça: "Husky",
          valor: "20.00",
          status: "cancelado",
        },
      ],
    };
  },
};
</script>

<style>
section {
  margin: auto;
}

.row {
  display: flex;
  justify-content: space-between;
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
  color: #4d72d6;
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
  color: #4d72d6;
  font-size: 1.2em;
  margin-left: 10px;
}

.main-content h1 {
  color: #4d72d6;
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
  color: #5177e0;
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
    color: #5177e0;
    margin-top: 20px;
    margin-bottom: 100px;
  }

  .left-content h3 {
    color: #868585;
    margin-left: 10px;
  }
}
</style>
