







$('#formCadastro').submit(function(e){
  e.preventDefault();

  
  let cpf= $('#cpf').val()
  let senha=$('#senha').val()

 const validar= campoVazio(cpf,senha)
  if(validar[1]==true){
    $(function validarLogin(){

      $.ajax({
        url:"https://api.institutoidv.org/api/v1.0/users/verificarLogin",
        type:"get",
        dataType:"html",
        data:{
            cpf:$('#cpf').val(),
            senha:$('#senha').val()
            
            
    
        },
        success(data){
            const dados=JSON.parse(data)

            if(dados.status==0){
              dadosErrados()
            }
            else{
              localStorage.setItem("id",dados.id)
              window.location="telas/painel.html";
              console.log(dados.id)
            }
            
        }
    
      })
    })

  }
  else{
    focusCampo()
  }
 
   
  
  })

  function campoVazio(nome,senha){
    if(nome==""||senha==""){
      return ["Preencha os campos",false]
    }else{
      return['',true]
    }
    
  }

  tiraBorda()

function focusCampo(){


  const comBordar={'border':'solid 2px red'}
  
  if($('#cpf').val()==""){
    $('#cpf').css(comBordar).attr('placeholder','Campo Obrigatório').focus()
    

}else if($('#senha').val()==""){
    $('#senha').css(comBordar).attr('placeholder','Campo Obrigatório').focus()
}
}


function tiraBorda(){
  const sembordar={'border':'none'}
    
  if($('#cpf').click(e=>$('#cpf').css(sembordar).attr('placeholder','Senha'))){
  }
  if($('#senha').click(e=>$('#senha').css(sembordar).attr('placeholder','CPF'))){  
  }

}


function dadosErrados(){
  const comBordar1={'border':'solid 2px red'}
  $('#cpf').val("").css(comBordar1).attr('placeholder','Dados inválidos').focus()
  $('#senha').val("").css(comBordar1).attr('placeholder','Dados inválidos').focus()
}