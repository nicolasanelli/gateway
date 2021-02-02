function primeiro() {
  console.log('primeiro');
}

fetch('/api').then((data) => {
  data.json().then((json) => {
    console.log(json)
    const pre = document.getElementById("server-response")
    pre.innerHTML = JSON.stringify(json)
  })
})