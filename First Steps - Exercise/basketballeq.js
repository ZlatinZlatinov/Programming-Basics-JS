/*Задание: Джон Сина решава, че иска да се занимава с баскетбол, но за да тренира е 
нужна екипировка. Напишете програма, която изчислява какви разходи ще има Джеси, 
ако започне да тренира, като знаете колко е таксата за тренировки по баскетбол за 
период от 1 година. Нужна екипировка: 
•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
Вход
От конзолата се четe 1 ред:
•	Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]
Изход
Да се отпечата на конзолата колко ще са разходите на Джеси, ако започне да спортува баскетбол.
*/ 
// потребителски вход: 365 
function equipment(input){
    let godishnaTaksa = Number(input[0]); // деклрарира се променлива да чете потребителския вход
    const cenaKecove = godishnaTaksa - godishnaTaksa*0.4; // константа да смята цената на кецовете като от годишната такса извадим 40% от годишната такса
    const cenaEkip = cenaKecove - cenaKecove*0.2; // константа за цената на екипа, която е цената на кецовете - 20% от цената на кезовете
    const cenaTopka = cenaEkip*0.25; // цената на топката е 1/4 от цената на екипа
    const cenaAksesoari = cenaTopka*0.2; // цената на аксесоарите е 1/5 от цената на топката
    const totalSum = godishnaTaksa + cenaKecove + cenaEkip + cenaTopka + cenaAksesoari; // събираме общия резултат + годишната такса
    console.log(totalSum); // отпечатваме резулатата

} 
equipment(["365"]); 

// 100/100 ma beh zabrail da dobavq kum totalsum i godishnaTaksa xDD