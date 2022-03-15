
/* Apresentação Modal*/

setTimeout(ApresentarModal, 5000);

function ApresentarModal(){
    var modal = document.querySelector(".modal")
    if(modal != null){

        document.querySelector(".modal").style.display = "block";
        document
            .querySelector(".modal a") 
            .addEventListener("click", function(){
                 document.querySelector(".modal").style.display = "none";
            });
            }
        }  

/* Validação modal (Página Inicial) */

if (document.forms["modal_form"] != undefined){
    //validação
    var form = document.forms["modal_form"];
    form.addEventListener("submit", validarFormModal);
    form.addEventListener("keyup", function(){
        form.email.className="";
    document.querySelector(".nao_validspano").style.display = "none";
    
    }) }

    function validarFormModal(evt){
        var form = document.forms["modal_form"];
        var inputEmail = form.email;
        var valorEmail = form.email.value;
        var posicaoArroba = valorEmail.indexOf("@") 
        
            if(
                valorEmail != "" &&
                valorEmail.indexOf("@") > 3 &&
                valorEmail.lastIndexOf(".") > posicaoArroba
                 ){
                     
            }else{
                    
                    inputEmail.className = "nao_valido";
                    document.querySelector("span.nao_valido").style.display = "block";
                    
                     evt.preventDefault();
                 }
                }


        
