import {addCustomer} from './crud.mjs'; .

function getData(){
  const name = document.getElementById('name').value;
  const img = document.getElementById('img').value;
  const discription = document.getElementById('discription').value;
  const price = document.getElementById('price').value;
  return {name,img,discription,price}
}

const add_button = document.getElementById('add_button');
add_button.addEventListener('click', () =>{
  let gettingData = getData();
  let data = {
    name: gettingData.name,
    img_principal: gettingData.img,
    discription: gettingData.discription,
    price: gettingData.price
  }
  addCustomer(data);
})
