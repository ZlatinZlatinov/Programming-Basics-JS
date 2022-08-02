/*Зад.2 Задание: Котката Том обича по цял ден да спи, за негово съжаление стопанинът му си играе с 
него винаги когато  има свободно време. За да се наспи добре, нормата за игра на Том е 30 000  
минути в година. Времето за игра на Том зависи от почивните дни на стопанина му:
•	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
•	Когато почива, стопанинът му си играе с него  по 127 минути на ден.
Напишете програма, която въвежда броя почивни дни и отпечатва дали Том може да се наспи добре 
и колко е разликата от нормата за текущата година, като приемем че годината има 365 дни.
Пример: 20 почивни дни -> работните дни са 345 (365 – 20 = 245). Реалното време за игра 
е 24 275 минути (345 * 63 + 20 *127).  Разликата от нормата е 5 725 минути (30 000 – 24 275 = 5 725) 
или 95 часа и 25 минути.
Вход
Входът се чете от конзолата и се състои от едно число – броят почивни дни – цяло число в интервала [0...365]
Изход
На конзолата трябва да се отпечатат два реда.
•	Ако времето за игра на Том е над нормата за текущата година:
o	 На първия ред отпечатайте: “Tom will run away”
o	 На втория ред отпечатайте разликата от нормата във формат:
“{H} hours and {M} minutes more for play”
•	Ако времето за игра на Том е под нормата за текущата година:
o	На първия ред отпечатайте: “Tom sleeps well”
o	 На втория ред отпечатайте разликата от нормата във формат:
“{H} hours and {M} minutes less for play”
*/ // entry 1: 20 2: 113 
function catThomas(input){
    let pochivniDni = Number(input[0]); // вход от по задание 20
    const norma = 30000; // константа , минути в година за игра
    const rabotniDni = 365 - pochivniDni; // работни дни на стопанина
    const igraPochivniDni = 127 * pochivniDni; // общо време за игра през почивните дни
    const igraRabotniDni = 63 * rabotniDni; // общо време за игра през работните дни 
    const totalVremeIgra = igraPochivniDni + igraRabotniDni; // всичкото време за игра
    if (totalVremeIgra <= norma){
        console.log("Tom sleeps well"); 
        let freeTime = norma - totalVremeIgra; 
        let h = Math.floor(freeTime/60); 
        let m = freeTime % 60;
        console.log(`${h} hours and ${m} minutes less for play`); 
    }else{ 
        console.log("Tom will run away"); 
        let free = totalVremeIgra - norma; 
        let hh = Math.floor(free/60);
        let mm = free % 60; 
        console.log(`${hh} hours and ${mm} minutes more for play`);

    }

} 
catThomas(["20"]);  
// 100/100