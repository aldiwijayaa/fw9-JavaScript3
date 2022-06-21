const fetch = require('node-fetch');

const getIndexApi = () => {
  fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'GET'
  })
  .then(res => res.json())
  .then(result =>{
    result.map(data => {
      console.log(data.name)
    })
  })
}
getIndexApi()
