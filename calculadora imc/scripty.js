function Calcular(){
    var resp = document.getElementById('res')
    var pe = document.getElementById('peso')
    var alt = document.getElementById('altura')
    if (alt){
        alert('DIGITE A ALTURA EM METROS, NÃO ESQUEÇA DO PONTO')
    }
    var clas = document.getElementById('clasi')
    if (pe.value.length == 0 || alt.value.length == 0){
        alert('ERRO, Revise os campos!')
    }else{
        resp.innerHTML=''
        clas.innerHTML=''
        var p = Number(pe.value)
        var a = parseFloat(alt.value)
        var resultado = p/(a*a)
        resp.innerHTML += `Seu IMC: ${resultado.toFixed(2)}`
        }if(resultado <= 18.50){
            clas.innerHTML += 'ABAIXO DO PESO'
        } else if (resultado <= 25.50){
            clas.innerHTML += 'PESO NORMAL'
        } else if (resultado <= 28.6){
            clas.innerHTML = 'SOBREPESO'
        } else if (resultado > 28.6){
            clas.innerHTML = 'OBESIDADE'
        }
    }