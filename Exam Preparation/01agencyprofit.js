/* Напишете програма, която изчислява печалбата на агенция за продажба на самолетни билети. 
Агенцията продава самолетни билети на различни авиокомпании. Ще получите информация за броя продадени 
билети за възрастни и броя продадени детски билети. Нетната цена на билета за възрастен се определя от 
авиокомпанията, а детският билет е със 70% по-евтин. Агенцията добавя към нетната цена на всеки билет 
такса обслужване.  Крайната печалба на Агенцията е 20% от общата цена на всички билети.
Вход:
От конзолата се четат 5 реда:
1.	Име на авиокомпанията - текст
2.	Брой билети за	 възрастни – цяло число в диапазона [1…400]
3.	Брой детски билети – цяло число в диапазона [25…120]
4.	Нетна цена на билет за възрастен – реално число в диапазона [100.0…1600.0]
5.	Цената на такса обслужване - реално число в диапазона [10.0…50.0]
Изход:
Да се отпечата на конзолата крайната печалбата от продажбите, в следния формат:
•	"The profit of your agency from {име на авиокомпанията} tickets is {печалба за агенцията} lv."
Цената на печалбата да бъде форматирана до втората цифра след десетичния знак.
 */ 
function agency (input){
    let companyName = input[0]; 
    let ticketsElders = Number(input[1]); 
    let ticketsChildren = Number(input[2]); 
    let netPriceOld = Number(input[3]); 
    let taxSurvice = Number(input[4]); 
    let netPriceChildren = netPriceOld * 0.3; 
    const ticketsPrice = ticketsChildren* (netPriceChildren + taxSurvice) + ticketsElders*(netPriceOld + taxSurvice); 
    const finalPrice = (ticketsPrice * 0.2).toFixed(2); 
    console.log(`The profit of your agency from ${companyName} tickets is ${finalPrice} lv.`);

} 
agency(["WizzAir" , "15" , "5" , "120" , "40"]); // 100/100 ezz