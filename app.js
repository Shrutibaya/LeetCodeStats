const BASE_URL="https://leetcode-stats-api.herokuapp.com/";
let box=document.querySelector(".box");
let submit=document.querySelector(".submit")
let username=document.querySelector(".para");
let easy=document.querySelector(".Easy");
let medium=document.querySelector(".Medium");
let hard=document.querySelector(".Hard");
let acceptancerate=document.querySelector(".ar");
let tq= document.querySelector(".tq");
let rank=document.querySelector(".rank");
window.addEventListener("load", async () => {
  const my_url = `${BASE_URL}shruti_baya05`;

  try {
    const my_response = await fetch(my_url);
    const my_data = await my_response.json();

    easy.textContent = `Easy : 0/${my_data["totalEasy"]}`;
    medium.textContent = `Medium : 0/${my_data["totalMedium"]}`;
    hard.textContent = `Hard : 0/${my_data["totalHard"]}`;
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
});

async function fetchUserData(user) {
  if (!user) return alert("Please enter a username!");
  const URL = `${BASE_URL}${user}`;
  console.log("Fetching:", URL);
  box.value="";
  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (data.status === "success") {
      username.innerText = `${user}`;
      easy.innerText = `Easy : ${data.easySolved}/${data.totalEasy}`;
      medium.innerText = `Medium : ${data.mediumSolved}/${data.totalMedium}`;
      hard.innerText = `Hard : ${data.hardSolved}/${data.totalHard}`;
      acceptancerate.innerText = `${data.acceptanceRate} %`;
      tq.innerText = `${data.totalSolved}/${data.totalQuestions}`;
      rank.innerText = `${data.ranking}`;
    } else {
        alert("Invalid Username!!")
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    alert("Unable to fetch data. Please try again later.");
  }
}

// ✅ When user clicks submit
submit.addEventListener("click", async () => {
  const user = box.value.trim();
  fetchUserData(user);
});

// ✅ When user presses Enter in the input box
box.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const user = box.value.trim();
    fetchUserData(user);
  }
});


// submit.addEventListener("click",async()=>{
//     let user=box.value;
//     const URL=`${BASE_URL}${user}`;
//     console.log(URL);
//     let response=await fetch(URL);
//     let data= await response.json();
//     if(data["status"]=="success"){
//         console.log(data);
//         username.innerText=`${user}`;
//         easy.innerText=`Easy : ${data["easySolved"]}/${data["totalEasy"]}`;
//         medium.innerText=`Medium : ${data["mediumSolved"]}/${data["totalMedium"]}`;
//         hard.innerText=`Hard : ${data["hardSolved"]}/${data["totalHard"]}`;
//         acceptancerate.innerText=` ${data["acceptanceRate"]} %`;
//         tq.innerText=` ${data["totalSolved"]}/${data["totalQuestions"]}`;
//         rank.innerText=` ${data["ranking"]} `;
//     }
//     else{
//         const URL=`${BASE_URL}shruti_baya05`;
//         response=await fetch(URL);
//         data= await response.json();
//         username.innerText=`INVALID USER`;
//         easy.innerText=`Easy : 0/${data["totalEasy"]}`;
//         medium.innerText=`Medium : 0/${data["totalMedium"]}`;
//         hard.innerText=`Hard : 0/${data["totalHard"]}`;
//         acceptancerate.innerText=` 0`;
//         tq.innerText=` 0/${data["totalQuestions"]}`;
//         rank.innerText=` 0 %`;
//     }
// });
