const result = document.querySelector(".result");



window.addEventListener("load", async () => {
    const res = await fetch("pizza.json");
    const data = await res.json();
    console.log(data)

    let ouput = "";

    data.map(car => {
        ouput += `
                 <div class= "car">
                     <h2>Pizza : ${car.pizza} </h2>
                 </div>
            `
            ;
    }

    )
    result.innerHTML = ouput;
}

)

