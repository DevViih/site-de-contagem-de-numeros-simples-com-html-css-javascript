function contar(){
  var co = document.getElementById('txtn1')
  var f = document.getElementById('txtn2')
  var p = document.getElementById('txtp')
  var res = document.getElementById('res')
  if (co.value.length == 0  ||f.value.length==0 || p.value.length == 0 ){
    window.alert('[ERRO] FALTAM DADOS')
  }else {
    
    res.innerHTML='contando:'
    var i = Number(co.value)
    var f = Number(f.value)
    var p = Number(p.value)
   if(p<=0){
     window.alert('PASSO INVALIDO CONSIDERANDO PASSO 1!!')
     p = 1
   }
   if ( i < f) {
    for(var c = i; c <= f; c+= p){
      //contagem crescente
      res.innerHTML += ` <strong>${c} </strong> \u{1F449}`
    }
   }else{
     for(var c = i ; c >= f ; c-= p){
       //contagem decresecente
       res.innerHTML += ` <strong> ${c}</strong> \u{1F449}`
     }
   }
        res.innerHTML += `\u{1F3c1}`
  }

}

