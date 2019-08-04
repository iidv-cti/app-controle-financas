function IIDVrouteConnect(route, fn, dataset){
    $.ajax({
        url:"https://api.institutoidv.org/api/v1.0/routes/"+localStorage.getItem("system")+"/"+route,
        type:"POST",
        processData: false,  // tell jQuery not to process the data
        contentType: false,  // tell jQuery not to set contentType
        data: dataset,
        success(data){
            fn(data);
        }
    
      });
}

function IIDVuserStatus(fn){
    $.ajax({
        url:"https://api.institutoidv.org/api/v1.0/users/verificarEstado",
        type:"get",
        dataType:"html",
        data: {
            uid: localStorage.getItem("uid"),
            token: localStorage.getItem("token"),
            system: localStorage.getItem("system")
        },
        success(data){
            //console.log(data);
            var dados=JSON.parse(data)

            if(dados.status==0){
              fn();
            } else{
              dados = dados.data;
              localStorage.setItem("uid",dados.uid)
              localStorage.setItem("token",dados.hash)
              fn(dados);
            }
        }
      })
}

function IIDVuserLogin(user, password, fn){
    $.ajax({
        url:"https://api.institutoidv.org/api/v1.0/users/verificarLogin",
        type:"get",
        dataType:"html",
        data:{
            cpf: user,
            password: password,
            system: localStorage.getItem("system")
        }, success(data){
            var dados=JSON.parse(data)

            if(dados.status==0){
              alert(dados.message)
            } else{
              dados = dados.data;
              localStorage.setItem("uid",dados.uid)
              localStorage.setItem("token",dados.hash)
              fn()
            }
        }
      })
}

function IIDVConfig(config){
  localStorage.setItem("system", config.system);
}

function IIDVLogOut(fn){
  $.ajax({
    url:"https://api.institutoidv.org/api/v1.0/users/logout",
    type:"get",
    dataType:"html",
    data:{
        uid: localStorage.getItem("uid"),
        token: localStorage.getItem("token"),
        system: localStorage.getItem("system")
    }, success(data){
        data = JSON.parse(data);
        if(data.status==0){
          localStorage.setItem("uid","")
          localStorage.setItem("token","")
          fn(0)
        } else if(data.status==1){
          localStorage.setItem("uid","")
          localStorage.setItem("token","")
          fn(1)
        } else {
          alert("Oops");
        }
    }
  })
}