
//CRUD

function excluir(id){

    $.ajax({
        url:"https://api.institutoidv.org/api/v1.0/users/excluirCompra",
        type:"get",
        dataType:"html",
        data:{
            
            idCompra:id,
            desativado:"1"
            

        },
        success(data){
            console.log(data)
            window.location="painel.html"
        }
}) 

}

function editar(id){

    localStorage.setItem('idEditar',id)
    localStorage.setItem('editarTrue',1)
    window.location="telaFinanca.html"

  
}

function detalhes(id){
    localStorage.setItem('idDetalhe',id)
    window.location="detalhes.html"
}   

function adicionarArquivo(id){
    alert(id)
}