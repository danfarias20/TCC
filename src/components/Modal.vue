<template>
  <div id="fade" class="hide"></div>
  <div id="modal" class="hide">
    <div class="modal-header">
      <i class="fa-solid fa-calendar-days"></i>
      <h2>Agendamento</h2>
    </div>
    <div class="modal-body">
      <form>
        <div class="inputs ">
          <div class="form-inputs">
            <label for="nome_cliente">Cliente</label>
            <input type="text" placeholder="Nome do Cliente" name="nome_cliente">
          </div>
          <div class="form-inputs">
            <label for="nome_pet">Pet</label>
            <input type="text" placeholder="Nome do Pet" name="nome_pet" list="faixa3">
            <datalist id="faixa3">
              <option value="">Pet</option>
              <option>Pet 01</option>
              <option>Pet 02</option>
              <option>Pet 03</option>
            </datalist>
          </div>
        </div>
        <div class="inputs ">
          <div class="form-inputs">
            <label for="raca">Raça</label>
            <input type="text" placeholder="Raça" name="raca" list="faixa4">
            <datalist id="faixa4">
              <option value="">Nome</option>
              <option>Raça1</option>
              <option>Raça2</option>
              <option>Raça3</option>
            </datalist>
          </div>
          <div class="form-inputs">
            <label for="servico">Serviço</label>
            <input type="text" placeholder="Serviços" name="servico" list="faixa2">
            <datalist id="faixa2">
              <option value="">Servico</option>
              <option>Banho</option>
              <option>Tosa</option>
              <option>Banho e Tosa</option>
            </datalist>
          </div>
        </div>
        <div class="inputs">
          <div class="form-inputs">
            <label for="data">Data</label>
            <input type="date" placeholder="Data" name="data">
          </div>
          <div class="form-inputs">
            <label for="hora">Hora</label>
            <input type="time" placeholder="Hora" name="hora">
          </div>
        </div>
        <div class="modal-footer">

          <button type="button" v-on:click="toggleModal" id="close-modal" class="close">Fechar</button>
          <button v-on:click="toggleModal" type="submit" class="confirm">Confirmar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    toggleModal() {
      const close = document.querySelector('#close-modal')
      const modal = document.querySelector("#modal");
      const fade = document.querySelector("#fade");

      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
  }
}
</script>

<style>
#fade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
}

#modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 525px;
  max-width: 90%;
  background-color: #4D72D6;
  padding: 1.2rem;
  border-radius: 0.5rem;
  z-index: 10;
}

#fade,
#modal {
  transition: 0.5s;
  opacity: 1;
  pointer-events: all;

}

.modal-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  color: #ffffff;
  gap: 20px;
}

.modal-header i {
  font-size: 30px;
}

.modal-footer {
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-footer button {
  margin: 20px 0px 10px;
  padding: 0.6rem 1.2rem;
  background-color: #888;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  opacity: 0.9;
  font-size: 1rem;
}

.modal-footer .confirm {
  background-color: #010d55;
}

.modal-footer .close {
  background-color: #9e0101;
}

.modal-body p {
  margin-bottom: 1rem;
}


form {
  display: flex;
  flex-direction: column;
}

.inputs {
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin: 5px auto;

}

.form-inputs {
  display: flex;
  flex-direction: column;
}

.form-inputs label {
  color: white;
}

.form-inputs input {
  width: 220px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 .4rem .8rem #0005;
  font-size: 0.9em;
  background-color: #fff;
}

.form-inputs input[type=date],
.form-inputs input[type=time] {
  width: 220px
}

#modal.hide,
#fade.hide {
  opacity: 0;
  pointer-events: none;
}

#modal.hide {
  top: 0;
}

@media screen and (max-width: 750px) {

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-inputs input,
  .form-inputs input[type=date],
  .form-inputs input[type=time] {
    width: 250px;
  }

}

@media screen and (max-width: 350px) {

  #modal {
    position: absolute;
    margin-top: 3rem;
  }
}
</style>