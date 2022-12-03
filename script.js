var btn = document.getElementById('texto');
var container = document.getElementById('container');
btn.addEventListener('click', () => {
  // if(container.style.visibility === 'hidden') {
  //   container.style.visibility = 'visible';
  // }else {
  //   container.style.visibility = 'hidden';
  // }
  api()
})

// btn.addEventListener("click", async () => {
  
   
    
//    console.log(result)
//   //  const imgURL = URL.createObjectURL(result)
//   //  const img = `<img src="${imgURL}"/>`
//   //  document.getElementById("background").innerHTML = img
//   //  console.log(img)
// })

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
  document.querySelector("#container").innerHTML += ` <img src="${dados.url}">`;
}

// if else(btn.style.backgroundImage == url("./Untitled design.png")){
//     btn.style.backgroundImage = url("./Untitled design2.png")
//   }


// export interface Heroi {
//   id: string,
//   name: string,
//   image: { url: string }
//  }
//  <ul *ngFor="let heroi of herois">  
//    <li>
//      <img src="{{heroi.image.url}}" alt="">
//       <p>{{ heroi.id }}</p>
//       <p>{{ heroi.name }}</p>
//    </li>
//  </ul>