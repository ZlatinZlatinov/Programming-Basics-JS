/*Зад.1 Задание: Да се напише функция, която чете оценка, получена като аргумент и отпечатва 
"Excellent!" ако оценката е 5.50 или по-висока. */ 
function otlichnik (input){
    let ocenka = Number(input[0]); 
    if (ocenka >= 5.50){
        console.log('Excellent!'); 

    }
} 
otlichnik([2.55]); 
// дооре, не съм я пускал в жъж г/д това са иска по задание, мое са добави и един else да отпечатва ерор 
// 100/100 minawa