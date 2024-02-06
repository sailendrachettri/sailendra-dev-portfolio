let projectDesc = document.querySelectorAll('.project-description');

projectDesc.forEach(ele =>{
    // console.log(ele.innerText.length);
    if(ele.innerText.length > 150)
        ele.innerText = ele.innerText.substring(0, 150) + "...";
})