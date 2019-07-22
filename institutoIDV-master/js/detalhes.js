

$(function (){
            
    const idCompra=localStorage.getItem('idDetalhe')
                
    $.ajax({
url:"https://api.institutoidv.org/api/v1.0/users/verDetalhes",
type:"get",
dataType:"html",
data:{
    
    idCompra:idCompra
    

},
success(data){
    const compra=JSON.parse(data)
    $('#nome').html(compra[0].nome)
    $('#descricao').html(compra[0].descricao)
    $('#valor').html(`${compra[0].valor} $`)
    $('#local').html(compra[0].local)
    console.log("Pronto para editar")

}

    })
})



function voltar(){
    window.location="painel.html"
}