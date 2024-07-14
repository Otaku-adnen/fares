const ngrok = 'https://e32c-102-106-27-48.ngrok-free.app';
const localhost = 'http://localhost:3003';
const urlCode = ngrok;




export function addCustomer(data){
  const failureMessage = 'حدث خطأ ما';
  const successMessage = 'تم اظافة المنتج !';
  fetch(urlCode+'/product/add',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(Response => Response.json())
  .then(data =>{
    alert(successMessage);
    console.log(data);
    return(data);
  })
  .catch(error =>{
    alert(failureMessage);
    console.log(error);
  });

}
