const show=document.querySelector(".show");
const img=show.querySelector("img")
const h4=show.querySelector("h4")
const p=show.querySelector("p")
const button=show.querySelector("button")

const dadJokes = async () =>{
    const responce= await fetch(`https://icanhazdadjoke.com`,{
        method: "GET",
        headers:{
            Accept: "application/json"
        }
    });

    const thisData=await responce.json();
    return thisData.joke
}



const comeOnJoke = async () => {
    p.textContent="Loading.....";
    const newJoke=await dadJokes();
    p.textContent=newJoke;
}

comeOnJoke()

button.addEventListener("click", ()=>{
    comeOnJoke();
    button.textContent="New Joke"
})