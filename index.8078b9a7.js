!function(){let e=document.querySelector(".modal__form");document.querySelector("#submitButton");let t=document.querySelector("#errorMessage");e.addEventListener("submit",function(e){e.preventDefault();let l=document.querySelector("#name").value,u=document.querySelector("#surname").value,o=document.querySelector("#email").value,c=document.querySelector("#checkbox").checked;if(l&&u&&o&&c){t.style.visibility="hidden";let e=JSON.stringify({name:l,surname:u,email:o,accept:c},null,2);console.log(e)}else t.style.visibility="visible"})}();//# sourceMappingURL=index.8078b9a7.js.map

//# sourceMappingURL=index.8078b9a7.js.map