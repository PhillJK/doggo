const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggo = document.querySelector(".doggos");
const button = document.querySelector(".refresh");


button.addEventListener("click", function(){
    const promise = fetch(DOG_URL);
    promise
    .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Cute Doggo";
        doggo.appendChild(img);
    });
});
 