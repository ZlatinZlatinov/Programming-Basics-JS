/*Задание: Ресторант отваря врати и предлага няколко менюта на преференциални цени: 
•	Пилешко меню –  10.35 лв. 
•	Меню с риба – 12.40 лв. 
•	Вегетарианско меню  – 8.15 лв. 
Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
Цената на доставка е 2.50 лв и се начислява най-накрая.  
Вход
От конзолата се четат 3 реда:
•	Брой пилешки менюта – цяло число в интервала [0 … 99]
•	Брой менюта с риба – цяло число в интервала [0 … 99]
•	Брой вегетариански менюта – цяло число в интервала [0 … 99]
Изход
Да се отпечата на конзолата един ред:  "{цена на поръчката}"
*/ 
// Потребителски вход: ["2 ","4 ","3 "] 
function foodDelivery(input){
    let broiPileshkiMenuta = Number(input[0]); // променлива да чете вход брой пилешки менюта
    let broiRibeshkiMenuta = Number(input[1]); // чете брой рибени менюта
    let broiVegetarianskiMenuta = Number(input[2]); // брой вегетариански менюта 
    const cenaPile = 10.35 ; // константа по задание цената на пилета
    const cenaRiba = 12.40 ; // по задание цена на рибата
    const cenaVegan = 8.15 ; // по задание цена за вегетариански менюта
    const cenaDostavka = 2.50; // по задание цената за доставката
    const otstupka = 0.2; // можеше и без тоя ред ама цена на отстъпката в десетично
    const finalPile = cenaPile * broiPileshkiMenuta; // смятаме крайната цена за пилешките менюта
    const finalRiba = cenaRiba * broiRibeshkiMenuta; // крайната цена за рибните менюта
    const finalVegan = cenaVegan * broiVegetarianskiMenuta; // крайна за вегетариански менюта
    const cenaBezDesert = finalPile + finalRiba + finalVegan; // крайна цена без десерта
    const cenaDesert = cenaBezDesert * otstupka; // крайна цена със десерта, който е 20% от сметката
    const totalSum = cenaBezDesert + cenaDesert + cenaDostavka; // общо колко са платили с десерта и доставката
    console.log(totalSum); // отпечатване на касов бон хдд

} 
foodDelivery(["2 ","4 ","3 "]); 
// работи и показва 116.2 ама на скапания жъж му дойдаха много 2 реда код сега ше го разширявам хдд 
// 2ri opit pak proval ... ddz 6e definiram cena dostavka li nz
// сигурно от 5тия път ама закот забрайх да го копирам със скобата } ... 
