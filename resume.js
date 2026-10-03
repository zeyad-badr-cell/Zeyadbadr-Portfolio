let downloadBtn = document.getElementById("downloadBtn");
let a = document.createElement('a');
downloadBtn.addEventListener('click',function(){
    a.href = 'Zeyad Mokhtar Badr CV.pdf'; 
  a.download = 'Zeyad Mokhtar Badr CV.pdf'; 
  a.click();
});