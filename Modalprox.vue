<template>
  <div id="fade" class="hide"></div>
  <div id="modal" class="hide">
    <div class="modal-header">
      <i :class="['fa regular', icon]"></i>
      <h2>{{ titulo }}</h2>
    </div>
    <div class="modal-body">
      <div class="parte1">
        <BaseInput :modelValue="clientes.name" @update:modelValue="newValue => clientes.name = newValue" :label="'Nome'"
          v-if="mostrarInputsCadastro" />
        <BaseInput :modelValue="clientes.email" @update:modelValue="newValue => clientes.email = newValue"
          :label="'Email'" v-if="mostrarInputsCadastro" />
        <button class="next">Próximo</button>
      </div>
      <div class="parte2">
        <BaseInput :modelValue="clientes.cpf" @update:modelValue="newValue => clientes.cpf = newValue" :label="'Cpf'"
          v-if="mostrarInputsCadastro" />
        <BaseInput :modelValue="clientes.telefone" @update:modelValue="newValue => clientes.telefone = newValue"
          :label="'Telefone'" v-if="mostrarInputsCadastro" />

           
            <button class="previous">Anterior</button>
            <button type="submit">{{ botaoConfirm }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import ApiController from "@/ApiController";
import BaseInput from "./BaseInput.vue";

export default {
  name: "Modal",
  props: {
    tipo: {
      type: String,
      required: true,
      validator: (value) => ["cliente", "agendamento"].includes(value),
    },
    icon: String,
    mostrarInputsCadastro: {
      type: Boolean,
      default: false,
    },
    mostrarInputsAgendamento: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseInput,
  },
  data() {
    return {
      clientes: {
        name: "",
        email: "",
      },
      titulo:
        this.tipo === "cliente" ? "Cadastro de Cliente" : "Novo Agendamento",
      botaoConfirm: this.tipo === "cliente" ? "Cadastrar" : "Agendar",
    };
  },
  methods: {
    toggleModal() {
      const modal = document.querySelector("#modal");
      const fade = document.querySelector("#fade");
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    },

    submitForm() {
      console.log(this.name)
    },
  },
  mounted() {
    const parte1 = document.querySelector(".parte1");
    const parte2 = document.querySelector(".parte2");
    const previousButton = parte2.querySelector(".previous");
    const nextButton = parte1.querySelector(".next");

    nextButton.addEventListener("click", function () {
      parte1.style.display = "none";
      parte2.style.display = "block";
    });

    previousButton.addEventListener("click", function () {
      parte2.style.display = "none";
      parte1.style.display = "block";
    });
  }
};
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
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  max-width: 90%;
  background-color: #4d72d6;
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

.modal-footer .confirm {
  background-color: #010d55;
}

.modal-footer .close {
  background-color: #9e0101;
}

.modal-body {
  margin-bottom: 1rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  box-shadow: 0 0.4rem 0.8rem #0005;
  font-size: 0.9em;
  background-color: #fff;
}

.form-inputs input[type="date"],
.form-inputs input[type="time"] {
  width: 220px;
}

#modal.hide,
#fade.hide {
  opacity: 0;
  pointer-events: none;
}

#modal.hide {
  top: 0;
}

.parte2 {
  display: none;
}

.next,
.previous {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
 
}

.next:hover,
.previous:hover {
  background-color: #45a049;
}

button[type=submit] {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}


@media screen and (max-width: 750px) {
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-inputs input,
  .form-inputs input[type="date"],
  .form-inputs input[type="time"] {
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