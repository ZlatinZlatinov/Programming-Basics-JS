// вход: дъжлина 15 ; ширина 8,9  
// 1 работно място е 120х70 , 3 работни места са заети от катедрата и вратата и коридор с ширина 100см
// да са намери броя на работните места в залата; 
function uchZala(input){
    let daljinaM = Number(input[0]); // в метри
    let shirinaM = Number(input[1]); // в метри
    const daljinaBuro = 1.2; // в метри
    const shirinaBuro = 0.7; // в метри 
    const redove = daljinaM/daljinaBuro; 
    const koloni = (shirinaM-1)/shirinaBuro; 
    const broiMesta = Math.floor(redove) * Math.floor(koloni) - 3; 
    console.log(Math.floor(broiMesta)); 

} 
uchZala(["8.4" , "5.2"]); 
// работи ама за определени стойности , ся ако са вземат други стаа мазало, #оправих го деа
// при стойности за дължина 8.4 и ширина 5.2 работи, ама после стаа мазало 
// мхм имало и значение за десетичната запетая дали ше е на бг 
// иначе така изглежда по-добре ама трябва да се извади от някъде неизползваемата площ 
// еее брее стана е, ама тряа се ползва Math.floor да закръгля редовете/колоните 
// Ама то идеята беше да получа дадения отговор, дали е толкова нз, затуй е cheated xdd