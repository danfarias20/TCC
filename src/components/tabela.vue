<template>
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
</template>

<script>
export default {
    name: 'Tabela'
}
</script>
<style>
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


.table__body::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb {
    border-radius: .5rem;
    background-color: #0004;
    visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb {
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

table,
th,
td {
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

.status.aguardando {
    background-color: #c261ff;
    color: #8800DC;
}

.status.atendendo {
    background-color: rgb(96, 170, 255);
    color: rgb(0, 38, 255);
}

.status.concluido {
    background-color: rgb(144, 255, 144);
    color: green;
}

.status.cancelado {
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

thead th:hover span.icon-arrow {
    border: 1.4px solid #6c00bd;
}

thead th:hover {
    color: #6c00bd;
}

thead th.active span.icon-arrow {
    background-color: #6c00bd;
    color: #fff;
}

thead th.asc span.icon-arrow {
    transform: rotate(180deg);
}

thead th.active,
tbody td.active {
    color: #6c00bd;
}
</style>