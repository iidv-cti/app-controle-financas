//var itens=r.itens;

//for(i=0;i<=itens.lenght;I++){alert(items [i]["title"];}


const editarTrue=localStorage.getItem('editarTrue')



if(editarTrue==1){
    $(function (){
            
        const idCompra=localStorage.getItem('idEditar')
                    
        $.ajax({
    url:"https://api.institutoidv.org/api/v1.0/users/verUmaCompra",
    type:"get",
    dataType:"html",
    data:{
        
        idCompra:idCompra
        
    
    },
    success(data){
        const compra=JSON.parse(data)
        $('#nome').val(compra[0].nome)
        $('#descricao').val(compra[0].descricao)
        $('#valor').val(compra[0].valor)
        $('#local').val(compra[0].local)
        console.log("Pronto para editar")
    
    }
    
        })
    })
    
    
    
    // ATUALIZAR
    $('#formCadastro').submit(function(e){
        e.preventDefault();
        const comBordar={'border':'solid 2px red'}
        const sembordar={'border':'none'}
        if($('#nome').val()==""){
            $('#nome').css(comBordar).attr('placeholder','Campo Obrigatório').focus()
            
        
        }else if($('#descricao').val()==""){
            $('#descricao').css(comBordar).attr('placeholder','Campo Obrigatório').focus().blur()
            
        }else if($('#valor').val()==""){
            $('#valor').css(comBordar).attr('placeholder','Campo Obrigatório').focus().blur()
            
        }else if($('#local').val()==""){
            $('#local').css(comBordar).attr('placeholder','Campo Obrigatório').focus().blur()
          
        }
        else{
            confirmar()
        }
    
    // ao clickar ele tira a bordar de " campo em branco"
        tiraBorda()
    
        function tiraBorda(){
    
        if($('#nome').click(e=>$('#nome').css(sembordar))){
        }
        if($('#descricao').click(e=>$('#descricao').css(sembordar))){  
        }
        if($('#valor').click(e=>$('#valor').css(sembordar))){  
        }
        if($('#local').click(e=>$('#local').css(sembordar))){  
        }
    }
       
        function confirmar(){
            const idCompra=localStorage.getItem('idEditar')
        
        $.ajax({
                url:"https://api.institutoidv.org/api/v1.0/users/atualizarCompra",
                type:"get",
                dataType:"html",
                data:{
                    nome:$('#nome').val(),
                    descricao:$('#descricao').val(),
                    valor:$('#valor').val(),
                    local:$('#local').val(),
                    desativado:"0",
                    idCompra:idCompra
                    
                    
    
                },
                success(data){
                    localStorage.setItem('idEditar',"")
                    localStorage.setItem('editarTrue',"")

                    console.log("sucesso")
                    back()
                }
        })
        }
    })
    
    
    
    }else{
        adicionar()


    }




//ADICIONAR
function adicionar(){



$('#formCadastro').submit(function(e){
    e.preventDefault();
    const comBordar={'border':'solid 2px red'}
    const sembordar={'border':'none'}
    if($('#nome').val()==""){
        $('#nome').css(comBordar).attr('placeholder','Campo Obrigatório').focus()
        
    
    }else if($('#descricao').val()==""){
        $('#descricao').css(comBordar).attr('placeholder','Campo Obrigatório').focus().blur()
        
    }else if($('#valor').val()==""){
        $('#valor').css(comBordar).attr('placeholder','Campo Obrigatório').focus().blur()
        
    }else if($('#local').val()==""){
        $('#local').css(comBordar).attr('placeholder','Campo Obrigatório').focus().blur()
      
    }
    else{
        confirmar()
    }

// ao clickar ele tira a bordar de " campo em branco"
    tiraBorda()

    function tiraBorda(){

    if($('#nome').click(e=>$('#nome').css(sembordar))){
    }
    if($('#descricao').click(e=>$('#descricao').css(sembordar))){  
    }
    if($('#valor').click(e=>$('#valor').css(sembordar))){  
    }
    if($('#local').click(e=>$('#local').css(sembordar))){  
    }
}
   
    function confirmar(){

    
    $.ajax({
            url:"https://api.institutoidv.org/api/v1.0/users/adicionarCompra",
            type:"get",
            dataType:"html",
            data:{
                nome:$('#nome').val(),
                descricao:$('#descricao').val(),
                valor:$('#valor').val(),
                local:$('#local').val(),
                desativado:"0",
                idUsuario:localStorage.getItem("id")
                

            },
            success(data){
                console.log("sucesso")

                back()
            }
    })
    }
})



}

function back(){
    window.location='../telas/painel.html'
    localStorage.setItem('editarTrue',"")
}