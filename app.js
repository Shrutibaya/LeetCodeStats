const BASE_URL="https://leetcode-stats-api.herokuapp.com/";
let box=document.querySelector(".box");
let submit=document.querySelector(".submit")
submit.addEventListener("click",async()=>{
    let user=box.value;
    const URL=`${BASE_URL}${user}`;
    console.log(URL);
    let response=await fetch(URL);
    let data= await response.json();
    console.log(data);
    if(data["status"]=="success"){
        let username=document.querySelector(".para");
        username.innerText=`${user}`;
        let easy=document.querySelector(".Easy");
        easy.innerText=`Easy : ${data["easySolved"]}/${data["totalEasy"]}`;
        let medium=document.querySelector(".Medium");
        medium.innerText=`Medium : ${data["mediumSolved"]}/${data["totalMedium"]}`;
        let hard=document.querySelector(".Hard");
        hard.innerText=`Hard : ${data["hardSolved"]}/${data["totalHard"]}`;
        let acceptancerate=document.querySelector(".ar");
        acceptancerate.innerText=` ${data["acceptanceRate"]} %`;
        let tq= document.querySelector(".tq");
        tq.innerText=` ${data["totalSolved"]}/${data["totalQuestions"]}`;
        let rank=document.querySelector(".rank");
        rank.innerText=` ${data["ranking"]} `;
    }
    else{
        let username=document.querySelector(".para");
        username.innerText=`INVALID USER`;
        let easy=document.querySelector(".Easy");
        easy.innerText=`Easy : 0/888`;
        let medium=document.querySelector(".Medium");
        medium.innerText=`Medium : 0/1893`;
        let hard=document.querySelector(".Hard");
        hard.innerText=`Hard : 0/859`;
        let acceptancerate=document.querySelector(".ar");
        acceptancerate.innerText=` 0`;
        let tq= document.querySelector(".tq");
        tq.innerText=` 0/3640`;
        let rank=document.querySelector(".rank");
        rank.innerText=` 0 %`;

    }
});