// --------------TRUNCATE TITLE AND DESCRIPTION OF THE PROJECT--------------

let projectDesc = document.querySelectorAll('.project-description');
let projectTitle = document.querySelectorAll('.project-title');

projectDesc.forEach(ele =>{
    console.log(ele.innerText.length);
    if(ele.innerText.length > 150)
        ele.innerText = ele.innerText.substring(0, 150) + "...";
})

projectTitle.forEach(ele =>{
    console.log(ele.innerText.length);
    if(ele.innerText.length > 40)
        ele.innerText = ele.innerText.substring(0, 150) + "..";
})