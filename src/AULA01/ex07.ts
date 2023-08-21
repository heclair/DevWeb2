import axios from 'axios'

const cep = "12224811";
const url = `https://viacep.com.br/ws/${cep}/json`;
axios.get(url)
.then( ({data}) => console.log(data) )
.catch( e => console.log(e.message ));