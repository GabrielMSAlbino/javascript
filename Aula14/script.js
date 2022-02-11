function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Mulher'
            
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','criança f.png' )
            } else if (idade < 21){
                img.setAttribute('src', 'adolecente f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto f.png')
            } else {
                img.setAttribute('src', 'idoso f.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Homem'
            
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','criança m.png' )
            } else if (idade < 21){
                img.setAttribute('src', 'adolecente m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto m.png')
            } else {
                img.setAttribute('src', 'idoso m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}