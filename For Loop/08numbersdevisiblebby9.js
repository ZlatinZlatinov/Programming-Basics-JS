function numbersdevisible(input){
    let numA = Number(input[0]); // начално число
    let numB = Number(input[1]); // крайно число
    let sum = 0;  // променлива за пресмятане на смата
    let outputNumbers = '' ; // променлива за отпечатване на числата
    for(let i = numA; i <= numB; i++){ // фор цикъл и = нач. число, изпълнява се през 1 стъпка докато и <= на крайно число
         
        if (i % 9 === 0){ // ако няма остатък при делене на 9 
          
          sum += i; // се отпечатва сборът от числата делящи се на 9
          outputNumbers += `${i}\n`; // а с тази команда отпечатва всяко следващо на нов ред, които се делят на 9
          
        }
       
    } 
    console.log("The sum: "+sum); 
    console.log(outputNumbers);
} 
numbersdevisible(["100" , "200"]); // ddz nikva ideq
// Програма, която да получава 2 числа и да премсята всички в диапазона, които се делят на 9 и ги отпечатва всяко на следващ