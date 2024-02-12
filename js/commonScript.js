// -----------------------------SETTING THE DATE AND TIME FOR PROJECT UPDATION-------------------------
let projectGkSite = document.getElementById("project-gk-site");
projectGkSite.innerText = "Dec 2023";
let projectTextAnalyzer = document.getElementById("project-text-analyzer");
projectTextAnalyzer.innerText = "June 2023";
let projectChecklist = document.getElementById("project-checklist");
projectChecklist.innerText = "Jan 2024";
let projectNBBGCForcasting = document.getElementById("project-nbbgc-forcasting");
projectNBBGCForcasting.innerText = "March 2023";
let projectLaugnDude = document.getElementById("project-laugh-dude");
projectLaugnDude.innerText = "Dec 2022";
let projectEncryasmi = document.getElementById("project-encryasmi");
projectEncryasmi.innerText = "Sept 2022";
let projectAlphanews = document.getElementById("project-alphanews");
projectAlphanews.innerText = "Oct 2023";
let projectWinOverCrush = document.getElementById("project-win-over-crush");
projectWinOverCrush.innerText = "Feb 2024";



// --------------TRUNCATE TITLE AND DESCRIPTION OF THE PROJECT--------------

let projectDesc = document.querySelectorAll('.project-description');
let projectTitle = document.querySelectorAll('.project-title');

projectDesc.forEach(ele =>{
    if(ele.innerText.length > 150)
        ele.innerText = ele.innerText.substring(0, 150) + "...";
})

projectTitle.forEach(ele =>{
    if(ele.innerText.length > 40)
        ele.innerText = ele.innerText.substring(0, 150) + "..";
})