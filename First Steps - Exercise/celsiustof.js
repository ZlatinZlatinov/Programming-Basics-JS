/*Задание Напишете програма, която чете градуси по скалата на Целзий (°C) и ги 
преобразува до градуси по скалата на Фаренхайт (°F). Потърсете в Интернет подходяща 
формула, с която да извършите изчисленията. Форматирате изхода до втория знак след десетичната запетая.  */ 
// 1 градус Ц се умножава по 1.8 и към полученото се прибавя 32 за да се получи във F-аренхайт 
// вход : 25 ; 
// формула : градус целзии * 1.8 + 32 
function celToFarenhait (input){
    let degreeCel = Number(input[0]); // променлива да чете входа
    const degreeToF = degreeCel*1.8 + 32; // формула за пресмятане на целзии във Ф 
    const decimal = parseFloat (degreeToF).toFixed(2); // превръщане на резултата в десетична дроб с 2 знака
    console.log(decimal); // отпечатване на резултата

} 
celToFarenhait(["25"]); // извикване на функцията с вход 25