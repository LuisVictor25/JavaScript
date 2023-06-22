var agora = new Date()
var diaSem= agora.getDay()
/*0 Domingo
  1 Segunda-Feira
  2 Terça - Feira 
  3 Quarta-Feira
  4 Quinta - Feira
5 Sexta-Feira
  6 Sábado*/
  console.log(diaSem)
    switch(diaSem){
        case 0:
         console.log(`Domingo`)
        break
        case 1:
         console.log(`Segunda-feira`)
        break
        case 2:
         console.log(`Terça-feira`)
        break
        case 3:
         console.log(`Quarta-feira`)
        break
        case 4:
         console.log(`Quinta-feira`)
        break
        case 5: 
         console.log(`Sexta-feira`)
         break
         case 6:
         console.log(`Sábado`)
         break
         defaut:
         console.log(`[Erro] Dia inválido`)
        }
    
   