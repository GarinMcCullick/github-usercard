/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
import axios from "axios";
 
const result = axios.get("https://api.github.com/users/GarinMcCullick")
result.then(futureData =>{
  console.log(futureData)
  console.log(futureData.data)
})
.catch(err => {
  console.log(err)
})
const followersArray = [];
const entryPoint = document.body.querySelector(".card")

function cardMaker(obj){
  // create all my elements
  const divCard = document.createElement("div");
  const imgURL = document.createElement("img");
  const divInfo = document.createElement("div");
  const h3Name = document.createElement("h3");
  const pUserName = document.createElement("p");
  const pLocation = document.createElement("P");
  const pProfile = document.createElement("p");
  const link = document.createElement("a");
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");


  h3Name.textContent = obj.name;//finally
  pUserName.textContent = obj.username;
  pLocation.textContent = obj.location;
  pFollowers.textContent =obj.followers;
  pFollowing.textContent =obj.following;
  pBio.textContent = obj.bio;
  link.textContent = obj.html_url;
  pProfile.textContent = obj.html_url;

  //setting class names/ referencing urls.
  divCard.classList.add("card");
  divInfo.classList.add("card-info");
  h3Name.classList.add("name");
  imgURL.src = obj.avatar_url;
  link.href = obj.html_url;

  //heirarchy
  divCard.appendChild(imgURL);
  divCard.appendChild(divInfo);

  divInfo.appendChild(h3Name);
  divInfo.appendChild(pUserName);
  divInfo.appendChild(pLocation);
  divInfo.appendChild(pProfile);

  pProfile.appendChild(link);

  divInfo.appendChild(pFollowers);
  divInfo.appendChild(pFollowing);
  divInfo.appendChild(pBio);

  
  return divCard//returning this because its my largest div...
}
console.log(cardMaker(name));

axios
.get("https://api.github.com/users/GarinMcCullick")
.then(response=>{
  console.log("RESPONSE", response.data)
 const resp = response.data;
 resp.forEach(obj => {
    const card = cardMaker({obj})
    console.log(card)
    entryPoint.append(card)
  })
})
.catch((err) => {
  debugger;
});

fetch("https://api.github.com/users/GarinMcCullick")
  .then(res =>{
    return res.json()
  })
  .then(parsedJSON => {
    debugger;
  })
  .catch(err =>{
    debugger;
  })

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/