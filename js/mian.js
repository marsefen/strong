window.addEventListener('load', () => {
  const name = document.querySelector('#name')
  const date = document.querySelector('#date')
  const time = document.querySelector('#time')
  const phone = document.querySelector('#phone')

  const data = JSON.parse(sessionStorage.getItem('obj'))
  name.innerText = data.name
  date.innerText = data.date
  time.innerText = data.time
  phone.innerText = data.phone
})