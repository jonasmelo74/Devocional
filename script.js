function carregar() {
var data_id = window.document.getElementById('data_do_dia'); 
var tema_config = window.document.getElementById('tema');
var resumo = window.document.getElementById('resumo');
var explicacao = window.document.getElementById('explicacao');
var data = new Date();

var hora = data.getHours();
var dia = data.getDate();
var mes = data.getMonth();
var ano4 = data.getFullYear();

data_id.innerHTML = `Data: ${dia}/${mes+1}/${ano4}`;

function texto_par(){
    let tema_atual = tema_config.innerHTML = `Assistencialismo não é tudo: Atos 3:3`;
    let resumo_atual = resumo.innerHTML = `“Vendo-o a Pedro e João, que iam entrar no templo, implorava que lhe dessem uma esmola.”`;
    let explicacao_atual = explicacao.innerHTML = `A moeda que foi dada ao coxo nunca o curou, mas a oração sim. Assistencialismo é importante, porém não é só isso para nós cristãos, precisamos sair da nossa zona de conforto e assumir todo o poder e conhecimento que Deus colocou em nossas mãos como Pedro e João que oraram por ele e ele foi curado.`;
    
    return tema_atual, resumo_atual, explicacao_atual;
}


function texto_impar(){
    let tema_atual = tema_config.innerHTML = `Arrepender vai levar a cura: Atos 3:19`;
    let resumo_atual = resumo.innerHTML = `“19 Arrependei-vos, pois, e convertei-vos para serem cancelados os vossos pecados.”`;
    let explicacao_atual = explicacao.innerHTML = `Graças a vinda de Jesus temos a honra de estarmos sendo curados de nós mesmos dos nossos pecados, pois quando fizemos isso, temos a chance de recomeçar e aprender, para ter força de resistirmos dessa batalha tão forte que é a vida, porém só teremos vitória quando entendermos que arrependimento é a base de uma cura e transformação.`;
    
    return tema_atual, resumo_atual, explicacao_atual;
}

function texto_reserva(){
    let tema_atual = tema_config.innerHTML = `Arrepender vai levar a cura: Atos 3:19`;
    let resumo_atual = resumo.innerHTML = `“19 Arrependei-vos, pois, e convertei-vos para serem cancelados os vossos pecados.”`;
    let explicacao_atual = explicacao.innerHTML = `Graças a vinda de Jesus temos a honra de estarmos sendo curados de nós mesmos dos nossos pecados, pois quando fizemos isso, temos a chance de recomeçar e aprender, para ter força de resistirmos dessa batalha tão forte que é a vida, porém só teremos vitória quando entendermos que arrependimento é a base de uma cura e transformação.`;
    
    return tema_atual, resumo_atual, explicacao_atual;
}

if (dia % 2 == 0){ 
    texto_par()
}else if (dia == 31 || (mes == 2 && dia == 29)){
    texto_reserva()
    } else {
        texto_impar()
    }
}
