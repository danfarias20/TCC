<template>
  <section>
    <div class="container">
      <div class="row">
        <titulo :type="'Clientes'" />
        <botao :type="'Novo Cliente'" :icon="'fa-plus'" />
      </div>
      <div class="content">
        <div class="main-content cliente" >
          <div class="input-group">
            <input type="search" placeholder="Pesquisar" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
            <modal :titulo="'Cadastrar Cliente'" :icon="'fa-user'" />
            <tabela :header="topoTabela" :dados="dadosTabela" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import titulo from "@/components/titulo.vue";
import botao from "@/components/botaoCadastrar.vue";
import tabela from "@/components/tabela.vue";
import modal from "@/components/Modal.vue";
import ApiController from "@/ApiController";

export default {
  name: "Clientes",
  components: {
    titulo,
    botao,
    modal,
    tabela,
  },
  data() {
    return {
      topoTabela: ["ID","NOME", "PETS", "CPF" , "TELEFONE", "AÇOES"],
      dadosTabela: []
    };
  },
  mounted(){
    ApiController.getClientes().then(clientes => {
      this.dadosTabela = clientes;
    }).catch (error => {
      console.error('Erro ao buscar os clientes: ', error);
    });
  }
};
</script>

<style>
.input-group {
  width: 25%;
  background-color: #fff5;
  border-radius: 10px;
  margin: 15px 0px 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: 0.2s;
  box-shadow: 0 0.1rem 0.4rem #0002;
  border: 0.5px solid #949292;
  position: relative;
  right: 36%;
}

.input-group input {
  width: 100%;
  height: 30px;
  padding: 10px;
  padding: 0 0.5rem 0 0.3rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;

}

.cliente {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>