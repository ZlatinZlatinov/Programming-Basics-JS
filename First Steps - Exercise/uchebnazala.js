/*Задание: Учебна зала има правоъгълен размер w на h метра, без колони във вътрешността си. 
Залата е разделена на две части – лява и дясна, с коридор приблизително по средата. 
В лявата и в дясната част има редици с бюра. В задната част на залата има голяма входна врата. 
В предната част на залата има катедра с подиум за преподавателя. Едно работно място заема 70 на 
120 cm (маса с размер 70 на 40 cm + място за стол и преминаване с размер 70 на 80 cm). 
Коридорът е широк поне 100 cm. Изчислено е, че заради входната врата (която е с отвор 160 cm) 
се губи точно 1 работно място, а заради катедрата (която е с размер 160 на 120 cm) се губят точно 
2 работни места. Напишете програма, която въвежда размери на учебната зала и изчислява броя работни
 места в нея при описаното разположение 
 Вход
От конзолата се четат 2 числа, по едно на ред: w (дължина в метри) и h (широчина в метри).
Ограничения: 3 ≤ h ≤ w ≤ 100.
Изход
Да се отпечата на конзолата едно цяло число: броят места в учебната зала.
вход: 15 - дължина в метри ; 8,9 - ширина в метри
 */  
// ся ше проам първо да сметна площа на залата, после ще извадя от нея площа на коридора и площа на 3те 
// 3те работни места, после разултата ше го разделя на площа на 1 работно място и да видим ко ши са получи
function uchebnaZala(input){ 
    let daljina = Number(input[0])*100; 
    let shirina = Number(input[1])*100; 
    /* const broiBuraPoShirina = shirima / 70; 
    const broiBuraPoDaljina = daljina / 120;  туй ся даже и не са сятам зако съм го писал */ 
    const ploshtZala = daljina * shirina; 
    const ploshtKoridor = (daljina - 280) * 100; // или с дължина или с ширина
    const ploshtRabotnoMqsto = 120*70; 
    const svobodnoMqsto = (ploshtZala - ploshtKoridor) - ploshtRabotnoMqsto*3; 
    const broiMesta = Math.floor(svobodnoMqsto) / ploshtRabotnoMqsto ; 
    /* const proba1 = broiMesta*ploshtRabotnoMqsto; // ще даде максималната площ на работни места
    const proba2 = ploshtZala - proba1; тва тука няква проба ама мое са доработи, показва цялата площ ама изпозлваемата е по-малко */
    console.log(Math.floor(broiMesta));  
// няма да е лошо резултата да е цяло число ама едва ли хдд 
// па близко беше, отговора 129 аз 138.073234234 
// ся някъде тряа се закръгли дооре, със math.floor закръгляме на цяло число; 
// пример: console.log(Math.floor(5.95)) ще изведе в резултата 5
} 
uchebnaZala(["15" , "8.9"]); 
// добре ама тва смята цялата реална площ дето има, а използваемата площ е по-малко 
// тряа се извади някъв процент или да се пресметне колко е използваемата площ 
// тъй де за сега ще го зарежа. ще чийтна и ще го сметна по друия начин