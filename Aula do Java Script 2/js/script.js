function botao() {
    //variavel = documento selecionado pelo ID
    corpinho = document.getElementById("corpo");
    box = document.getElementById("caixa");

    
    classe = corpinho.className;
    caixa = box.className
    

    classSeparado = classe.split(" ")
    classJunto = caixa.split(" ")
    

    for (cont = 0; cont < classSeparado.length; cont++) {
        if (classSeparado[cont] == 'tomato') {
            corpinho.classList.remove("tomato")
            corpinho.classList.add("skyblue")

        } 
        
        if (classSeparado[cont] == 'skyblue') {
            corpinho.classList.remove("skyblue")
            corpinho.classList.add("tomato")
        }
    }

    for (cont = 0; cont < classSeparado.length; cont++) {
        if (classJunto[cont] == 'skyblue') {
            box.classList.remove("skyblue")
            box.classList.add("tomato")

        } 
        
        if (classJunto[cont] == 'tomato') {
            box.classList.remove("tomato")
            box.classList.add("skyblue")
        }
    }





}