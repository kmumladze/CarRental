let cardsArea = document.querySelector('section')

let carUrl = 'https://rentcar.webwide.ge/api/Car';

fetch(carUrl)
.then(response => response.json())
.then(response => htmlRenderer(response));


function htmlRenderer(carList){
    console.log(carList)

    carList.forEach(item => {

        cardsArea.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="main">
            <h5 class="card-title">${item.brand}</h5>
            <p class="card-maintext"> ${item.model}/${item.year} წლის <i class="fa-solid fa-heart"></i></p>
        </div>

            <img src="${item.imageUrl1}" class="card-img-top" alt="...">

            <div class="card-body">
              <p class="card-text1"> <span class="fuel"><i class="fa-solid fa-gas-pump"></i> ${item.fuelCapacity}ლ </span> 
              <span class="transmission"><i class="fa-solid fa-gear"></i> ${item.transmission}</span> 
              <span class="capacity"><i class="fa-solid fa-user-group"></i> ${item.capacity}კაცი</span></p>
            </div>

            <div class="last-text">
                <p> <span class="lari"> ${item.price} <i class="fa-solid fa-lari-sign"></i>/</span><span class="lariWord">ლარი</span></p>
                <button> <a class="btn" href="https://rentcar-one.vercel.app/Login">იქირავე</a></button>
            </div>
            
          
            
        `
    })
}