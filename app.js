const result = document.querySelector(".result");



window.addEventListener("load", async () => {
    const res = await fetch("pizza.json");
    const data = await res.json();
    console.log(data)

    let ouput = "";

    data.map(kaja => {
        ouput += `
                 <div class= "car">
                     <h2>Pizza : ${kaja.id} </h2>
                     <h2>Pizza : ${kaja.pizza} </h2>
                     <h2>Pizza : ${kaja.Evjarat} </h2>
                     <h2>Pizza : ${kaja.Extra} </h2>
                     <h2>Pizza : ${kaja.Ar} </h2>

                 </div>
            `
            ;
    }

    )
    result.innerHTML = ouput;
}

)

