<template>
   <section>
    <div class="container">
        <div class="row">
            <div class="titulo">
              <h1>Agenda</h1>
            </div>
            <button v-on:click="toggleModal" id="open-modal"><i class="fa-regular fa-calendar-plus"></i>Novo Agendamento</button>
        </div>
        <div class="content">
            <div class="main-content">
                  <Modal/>
                <div class="boxContent">
                    <hr>
                    <main class="table">
                        <section class="table__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th> ID </th>
                                        <th> Pet </th>
                                        <th> Tutor </th>
                                        <th> Raça </th>
                                        <th> Valor </th>
                                        <th> Status <span class="icon-arrow">&UpArrow;</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 1 </td>
                                        <td> <img src="../assets/img/dog.jpg" alt="">Zinzu Chan Lee</td>
                                        <td> Seoul </td>
                                        <td> 17 Dec, 2022 </td>
                                        <td> <strong> $128.90 </strong></td>
                                        <td>
                                            <p class="status cancelado">Cancelado</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> 1 </td>
                                        <td> <img src="../assets/img/dog.jpg" alt="">Zinzu Chan Lee</td>
                                        <td> Seoul </td>
                                        <td> 17 Dec, 2022 </td>
                                        <td> <strong> $128.90 </strong></td>
                                        <td>
                                            <p class="status concluido">Concluido</p>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </section>
                    </main>
                    <!--<h2>Nenhum agendamento por aqui</h2>-->
                    <!--<img class="gif" src="assets/img/House searching_purple.gif" alt="searchGif">-->
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

export default {
  name: 'Agenda',
  components: {
    Navbar,
    Modal
  },
  methods:{
    toggleModal(){
        const open = document.querySelector('#open-modal')
        const modal = document.querySelector("#modal");
        const fade = document.querySelector("#fade");

        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
    }
  }
}
</script>

<style>


button:hover {
  opacity: 1;
}

.row{
  display: flex;
  justify-content:space-between;

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

#open-modal i{
  font-size: 20px;
  margin-right: 10px;
}

.container{
  margin-top: 80px;
}

.content{
  display: flex;
  flex-direction: row;
  height: 78vh;
}

.main-content{
  border-radius: 20px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 78vh;
}

.boxHeader{
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.titulo{
  color: #4D72D6;
  font-size: 1.2em;
  margin-left: 10px;
}

.main-content h1{
  color: #4D72D6;
  margin-top: 150px;
  margin-bottom: 20px;
}

.boxContent{
    display: flex;
    align-items: center;
    justify-content: center;
}

.date{

  padding: 15px;

  outline: none;
  text-decoration: none;
  border: none;
  background-color: #4D72D6;
  color: #fff;

  font-size: 20px;
  font-weight: bold;

  border-radius: 20px;
  box-shadow: 0 .4rem .8rem #0005;
  
}

main.table {
  width: 100%;
  height: 78vh;
  
  margin-bottom: 20px;

 
  border-radius: .8rem;

  overflow: hidden;
}


.table__body {
width: 95%;
height: 78vh;


margin: .8rem auto;
border-radius: .8rem;

overflow: auto;
overflow: overlay;
}

.table__header {
  width: 100%;
  height: 10%;
  background-color: #fff4;
  padding: .8rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table__header .input-group {
  width: 35%;
  height: 100%;
  background-color: #fff5;
  padding: 15px;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .2s;
}

.table__header .input-group:hover {
  width: 45%;
  background-color: #fff8;
  box-shadow: 0 .1rem .4rem #0002;
}

.table__header .input-group img {
  width: 1.2rem;
  height: 1.2rem;
}

.table__header .input-group input {
  width: 100%;
  padding: 0 .5rem 0 .3rem;
  background-color: transparent;
  border: none;
  outline: none;
}


.table__body::-webkit-scrollbar{
width: 0.5rem;
height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
border-radius: .5rem;
background-color: #0004;
visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{ 
visibility: visible;
}

table {
width: 100%;
}

td img {
width: 36px;
height: 36px;
margin-right: .5rem;
border-radius: 50%;

vertical-align: middle;
}

table, th, td {
border-collapse: collapse;
padding: 1rem;
text-align: center;
}

thead th {
position: sticky;
top: 0;
left: 0;
background-color: #d5d1defe;
cursor: pointer;
text-align: center;
text-transform: capitalize;
}

tbody tr:nth-child(even) {
background-color: #0000000b;
}

tbody tr {
--delay: .1s;
transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
opacity: 0;
transform: translateX(100%);
}

tbody tr:hover {
background-color: #fff6 !important;
}

tbody tr td,
tbody tr td p,
tbody tr td img {
transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
padding: 0;
font: 0 / 0 sans-serif;
transition: .2s ease-in-out .5s;
}

tbody tr.hide td img {
width: 0;
height: 0;
transition: .2s ease-in-out .5s;
}

.status {
  padding: 5px;
  border-radius: 10px;
text-align: center;
}

.status.aguardando{
  background-color: #c261ff;
  color: #8800DC;
}

.status.atendendo{
  background-color: rgb(96, 170, 255);
  color: rgb(0, 38, 255);
}

.status.concluido{
  background-color: rgb(144, 255, 144);
  color: green;
}

.status.cancelado{
  background-color: rgb(255, 169, 169);
  color: red;
}

thead th span.icon-arrow {
display: inline-block;
width: 1.3rem;
height: 1.3rem;
border-radius: 50%;
border: 1.4px solid transparent;

text-align: center;
font-size: 1rem;

margin-left: .5rem;
transition: .2s ease-in-out;
}

thead th:hover span.icon-arrow{
border: 1.4px solid #6c00bd;
}

thead th:hover {
color: #6c00bd;
}

thead th.active span.icon-arrow{
background-color: #6c00bd;
color: #fff;
}

thead th.asc span.icon-arrow{
transform: rotate(180deg);
}

thead th.active,tbody td.active {
color: #6c00bd;
}

.gif{
  width: 280px;
}

.left-content{
  margin-left: 20px;
  border-radius: 20px;
  width: 28%;
  height: 78vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.left-content .gif{
  width: 200px;
}

.left-content h2{
  color: #5177E0;
}

.left-content h3{
  color: #868585;
  text-align: center;
}

/* ===== MEDIA QUERIES=====*/

@media (max-width: 1000px){
  td:not(:first-of-type){
    min-width: rem;
  }
}

@media screen and (min-width: 768px){
  body{
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: calc(var(--nav-width) + 2rem);
  }
  /*Show navbar desktop*/
  .show{
    width: calc(var(--nav-width) + 156px);
  }

  /*Add padding body desktop*/
  .body-pd{
    padding-left: calc(var(--nav-width) + 160px);
  }
}

@media screen and (max-width: 750px){

  .content{
    flex-direction: column;
  }

  main.table{
    width: 85vw;
  }

  .left-content{
    margin-top: 20px;
    width: 100%;
    margin-left: 0px;
  }

  .left-content h1{
    color: #5177E0;
    margin-top: 20px;
    margin-bottom: 100px;
  }

  .left-content h3{
    color: #868585;
    margin-left: 10px
  }
}

</style>
