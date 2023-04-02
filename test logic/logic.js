// Soal 1

// const ChangeFormat = (input)=>{

//     var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//     if(format.test(input.toString())){
//         return 'Wrong Format';
//     }else{
//         let arrayToString = input.toString().toLowerCase().split(' ').join('-');
//         return arrayToString.charAt(0).toUpperCase()+ arrayToString.slice(1);
//     };
// };
// console.log(ChangeFormat('Selamat Pagi_DuNia'));

// Soal 2

// let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Soal 3

// const CountCharacter = (paragraf,find)=>{
//     let array = paragraf.toLowerCase().split('');
//     let character = array.filter((v,i)=>{
//             return v.includes(find.toLowerCase());
//     });
//     return character.join('').length;
// };
// console.log(CountCharacter(text,'a'));

// const deretAngka = (angka) =>{
//     let deretPertamana = []
//     for(let i = 0; i<=angka; i++){
//         deretPertamana.push(Math.pow(i,2))
//     }
//     return {deretPertamana}
// }
// console.log(deretAngka(10))

// Soal 4

const seriesNumber = (angka) =>{
    let deleteString = angka.replace(/[a-z]/g,'');
    let deleteSpace = deleteString.replace(/ /g,',')
    let angkaArray = deleteSpace.split(',')
    let angkaFilter= angkaArray.filter((v)=>v !=='')
    let number = angkaFilter.map((v)=>Number(v))
    let total = 0
    number.forEach(element => {
        total += element
    });
    let max = Math.max(...number) 
    let min = Math.min(...number)
    let rata = total/number.length
    return {total,max,min,rata}
    
};
console.log(seriesNumber( '20,21, 80a,21, 5d5, 31 22'))
