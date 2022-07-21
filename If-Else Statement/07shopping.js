/*Зад.7 Задание: Петър иска да купи N видеокарти, M процесора и P на брой рам памет. 
Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната 
сметка. Важат следните цени:
•	Видеокарта – 250 лв./бр.
•	Процесор – 35% от цената на закупените видеокарти/бр.
•	Рам памет – 10% от цената на закупените видеокарти/бр.
Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
Вход
Входът се състои от четири реда:
1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
2.	Броят видеокарти - цяло число в интервала [0…100]
3.	Броят процесори - цяло число в интервала [0…100]
4.	Броят рам памет - цяло число в интервала [0…100]
Изход
На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
•	Ако бюджета е достатъчен:
"You have {остатъчен бюджет} leva left!"
•	Ако сумата надхвърля бюджета:
"Not enough money! You need {нужна сума} leva more!"
Резултатът да се форматира до втория знак след десетичната запетая.
*/ // вход: (["900","2","1","3"]) 
function linusTech(input){
    let budget = Number(input[0]); 
    let gpuCount = Number(input[1]); 
    let cpuCount = Number(input[2]); 
    let ramCount = Number(input[3]); 
    const gpuPrice = 250; 
    const totalGpuPrice = gpuPrice * gpuCount; 
    let cpuPrice = totalGpuPrice*0.35; 
    let ramPrice = totalGpuPrice*0.1; 
    const totalRamPrice = ramCount * ramPrice; 
    const totalCpuPrice = cpuCount * cpuPrice; 
    let totalCost = totalGpuPrice + totalRamPrice + totalCpuPrice; 
    
    
    if (gpuCount > cpuCount){
        totalCost *= 0.85;
    }  
    const difference = Math.abs(totalCost - budget).toFixed(2);
    if (totalCost <= budget){ 
        
        console.log(`You have ${difference} leva left!`); 

    } else if (totalCost > budget){
         
        console.log(`Not enough money! You need ${difference} leva more!`);
    }

    
} 
linusTech(["920.45","3","1","1"]); 
//100/100 3rd time 50/100 1st and 2nd

