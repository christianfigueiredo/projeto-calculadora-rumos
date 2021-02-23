
// funcao para inserir um valor numero ao objeto textbox direto no form += 1
function insere(numero){ 
    document.form.textbox.value = document.form.textbox.value + numero; 
}

function limpa(){ 
    document.form.textbox.value = ''; 
}

// funcao total atribuido o valor do textbox, realizando a operação de acordo com os valores escolhidos
function total(){ 
    var x = document.form.textbox.value; 
    if(x){ 
        document.form.textbox.value = eval(x); 
    }
}

// funcao de retorno, apaga o ultimo valor escolhido e mantem o anterior
function volta(){ 
    var exp = document.form.textbox.value; 
    document.form.textbox.value = exp.substring(0, exp.length-1); 
}