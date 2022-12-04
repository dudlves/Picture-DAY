var btn = document.getElementById('texto');
var container = document.getElementById('container');
btn.addEventListener('click', () => {
  api()
})

async function api(){
  const input = document.getElementById('data').value;
  const key = 'Xal2ri16laPoYH9tOv61Slq1ZtcWCERvZEyB6hZM'
  const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${input}`)
  const result = await data.json()
  const dados = result
 console.log(result)
 usandoApi(dados)
}

function usandoApi(dados){
  document.querySelector('#container').innerHTML = dados.explanation;
  document.querySelector("#background").innerHTML += ` <img src="${dados.url}">`;
  document.querySelector('#title').innerHTML = dados.title;
}