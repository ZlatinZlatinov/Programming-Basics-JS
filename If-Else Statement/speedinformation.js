/*Зад.6 Задание: Да се напише функция, която получава скорост (реално число) и отпечатва информация за скоростта. 
•	При скорост до 10 (включително) отпечатайте "slow"
•	При скорост над 10 и до 50 (включително) отпечатайте "average" 
•	При скорост над 50 и до 150 (включително) отпечатайте "fast"
•	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
•	При по-висока скорост отпечатайте "extremely fast"
*/ 
// вход: 8 / slow 
function speedInfo (input){
    let speed = Number(input[0]); 
    if (speed <= 10){
        console.log("slow"); // тряа го тествам в жъж кво дава с различните кавички, не ги зачита
    } else if (speed <= 50){
        console.log("average");
    } else if (speed <= 150){
        console.log("fast"); 
    } else if (speed <= 1000){
        console.log("ultra fast"); // naprao si samolet badka
    } else {
        console.log("extremely fast");
    }
} 
speedInfo(["1500"]); 


// 100/100 даде 10000010100 зелени тикчета 
// и да кавичките не ги зачита кви са, но все пак има значение
