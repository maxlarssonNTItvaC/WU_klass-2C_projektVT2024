const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function show() {

  linkList.classList.toggle('links_visible')
  burger.classList.toggle('burger_in_x_form')
}