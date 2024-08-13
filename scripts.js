let paraNumb = document.getElementById("para-value");
let generateBtn = document.getElementById("generate-btn");
let ipsumPara = document.getElementById("ipsum-para");
let ipsumUrl = "https://api.api-ninjas.com/v1/loremipsum?paragraphs="
let apiKey = "Add your Api Key";
let copyText = document.getElementById("copy-text");


function ipsumGenerator(){
    config = {
        method:"GET",
        headers: { 'X-Api-Key': apiKey}
    }
    fetch(ipsumUrl+paraNumb.value,config)
    .then(res=>res.json())
    .then(result => ipsumPara.innerText = result.text)
    .catch(err=>console.log(err));
}
copyText.addEventListener("click",()=>{
    // to copy text to the clipboard
    navigator.clipboard.writeText(ipsumPara.innerText);
})

generateBtn.addEventListener("click",ipsumGenerator);
window.addEventListener("load",ipsumGenerator); 