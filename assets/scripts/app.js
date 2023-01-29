'use strict'
// ***** Fetch Api Started***** // 

async function innerData () {
  try {
    const respone = await fetch('https://dummyjson.com/products')
    const data = await respone.json()
    inneFunc(data);
  } catch (error) {
    console.error(error);
  }
}
innerData()


const elAppend =document.querySelector(".section_wrapper")

function inneFunc(data){
  data.products.forEach((e)=>{
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
    <img src="${e.thumbnail}" alt="">
             <p>Price: ${e.price}</p>
             <p>Discount:${e.discountPercentage}</p>
             <p>Desk: ${e.description}</p>
             <h4> ${e.title} </h4>
    `
    elAppend.appendChild(card)
  })
}


// // render function end //

// // **** Deleted function started *****//

// const deleteFunc = ()=>{
//   wrapper.addEventListener(('click'), e =>{
//     if(e.target.classList.contains('fa-solid')){
//       const deleteId = e.target.dataset.deleteId
//       console.log(deleteId);
//       const elConfirm = confirm('Rostanham ochirasizmi')
//       if(deleteId && elConfirm ){

//         fetch(`https://dummyjson.com/products/${deleteId}`, {
//         method: 'DELETE'
//       }).then(response => response.json())
//         .then(data =>console.log(data))
//     }
//   }
// })
// }
// deleteFunc()

