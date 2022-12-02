var btn = document.getElementById('texto');
var container = document.getElementById('container');
btn.addEventListener('click', function() {
  if(container.style.visibility === 'hidden') {
    container.style.visibility = 'visible';
  }else {
    container.style.visibility = 'hidden';
  }
})

// document.querySelector("input").addEventListener("click", async () => {
//     const data = await fetch('https://api.nasa.gov/planetary/apod? api_key=Xal2ri16laPoYH9tOv61Slq1ZtcWCERvZEyB6hZM')
//     const result = await data.json()
//     console.log(result)
// })

// if else(btn.style.backgroundImage == url("./Untitled design.png")){
//     btn.style.backgroundImage = url("./Untitled design2.png")
//   }