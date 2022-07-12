//Objeto aonde contém as propriedades da Nave
let Nave = {
   nameNav: window.prompt('Insira o nome da Nave '),
   typeNav: window.prompt('Insira o tipo da Nave '),
   maxVelocity: parseInt(window.prompt('Insira a velocidade máxima da nave')),
   velocity: parseInt(0)

}


//Função de Menu aonde pergunta ao usuário se o mesmo necessita Aumentar o Diminuir a velocidade da Nave
function Menu(){
    do{
        let choice = window.prompt('Deseja Acelerar ou Parar a Nave? \n' + 
        ' 1 - Acelerar \n' +
        ' 2 - Parar \n' )

        if(choice == 1){
              let newvelocity = window.prompt('Insira a quantidade que deseja acelerar ')
              Nave.velocity = parseInt(Nave.velocity)+parseInt(newvelocity);
              alert('Velocidade Atual ' + Nave.velocity)
              CheckVelocity()
              Menu()
          }else if(choice == 2){
              alert('Nome da nave : ' + Nave.nameNav + ' \n'
              + 'Tipo de Nave : ' + Nave.typeNav +  '\n'
              + 'Velocidade que estava : ' + Nave.velocity)
          }
      }while(choice != 2)
      
    
}

//Função aonde checa o Nível de Velocidade da Nave
function CheckVelocity(){
    if(Nave.velocity > Nave.maxVelocity){
        alert('Velocidade máxima Ultrapassada!')
    }else if(Nave.velocity == Nave.maxVelocity ){
        alert('Velocidade Máxima Atiginda!')
    }else if(Nave.velocity < Nave.maxVelocity){
        alert('Abaixo da Velocidade Máxima!')
    }
}

//Função que direciona ao usuário para escolher a velocidade que deseja percorrer
Menu()

