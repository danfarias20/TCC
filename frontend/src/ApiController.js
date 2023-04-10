import axios from 'axios';

const API_URL = 'http://localhost:84';

export default{
    async getClientes(){
        const url = `${API_URL}/clientes`;
        return axios.get(url).then(response => response.data)
        .catch(error => {
            console.error('Erro ao buscar o cliente: ', error);
            throw error;
        })
    }
}