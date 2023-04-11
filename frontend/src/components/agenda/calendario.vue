<template>
    <div class="container-data">
      <button id="botao-anterior" @click="anterior">
        <i class="fa-solid fa-circle-chevron-left"></i>
      </button>
      <span ref="data" v-text="formatarData"></span>
      <button id="botao-proximo" @click="proximo">
        <i class="fa-solid fa-circle-chevron-right"></i>
      </button>
    </div>
</template>

<script>

export default {

  name: "Agenda",
  data() {
    return {
      dataAtual: new Date()
    }
  },
  methods: {
    anterior() {
      this.dataAtual.setDate(this.dataAtual.getDate() - 1);
      this.atualizaData();
    },
    proximo() {
      this.dataAtual.setDate(this.dataAtual.getDate() + 1);
      this.atualizaData();
    },
    atualizaData() {
      const hoje = new Date();
      const dia = this.dataAtual.getDate();
      const mes = this.dataAtual.getMonth() + 1;
      const ano = this.dataAtual.getFullYear();
      if (this.dataAtual.toDateString() === hoje.toDateString()) {
        this.$refs.data.textContent = "Hoje";
      } else {
        this.$refs.data.textContent = `${dia}/${mes}/${ano}`;
      }
    },
  },
  computed: {
    formatarData() {
      const hoje = new Date();
      if (this.dataAtual.toDateString() === hoje.toDateString()) {
        return "Hoje";
      } else {
        const dia = this.dataAtual.getDate();
        const mes = this.dataAtual.getMonth() + 1;
        const ano = this.dataAtual.getFullYear();
        return `${dia}/${mes}/${ano}`;
      }
    },
  },
};
</script>