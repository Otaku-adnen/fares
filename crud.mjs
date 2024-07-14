const urlCode = 'http://localhost:3003';




export function addCustomer(data){
  const failureMessage = 'حدث خطأ ما';
  const successMessage = 'تم تسجيل الدخول بنجاح';
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