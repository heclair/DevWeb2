import axios from 'axios'

const url = "http://servicodados.ibge.gov.br/api/v1/localidades/estados";
axios.get(url)
.then( ({data}) => console.log(data) )
.catch( e => console.log(e.message ));