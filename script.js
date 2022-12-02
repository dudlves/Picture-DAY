
var btn = document.getElementById('texto');
var container = document.getElementById('container');
btn.addEventListener('click', function() {
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
})

// document.querySelector("input").addEventListener("click", async () => {
//     const data = await fetch('https://api.nasa.gov/planetary/apod? api_key=Xal2ri16laPoYH9tOv61Slq1ZtcWCERvZEyB6hZM')
//     const result = await data.json()
//     console.log(result)
// })
