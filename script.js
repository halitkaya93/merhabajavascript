//alert("Merhaba JS");
//console.log("Merhaba React");
let sayi1 =15;
sayi1 = 256;

const sayilar = [3,5,8,15,25];
//for (let i = 0; i < sayilar.length; i++) {
//    const element = sayilar[i];
//    console.log(element);
//}

sayilar.map((item)=>console.log(item)); //reactJS de for yerine kullanılan foreach benzeri yapılardır.
//$"{ad}" String Interpolation.

function adimisoyle(ad){ //parametre içinde herhangi bir tip söylenmesine gerek yok,    
    //return yarısını kullanılırsa geriye değer dönderebilir, kullanılmazsa void bir function oluyor
    console.log(`Merhaba: + ${ad}` ); //Burda da String Interpolation benzeri bir yapı var, (alt gr + , ile `` yazılıyor)
    
}
adimisoyle("Halit"); //adimisoyle('Halit') olarak da string tanımlanabilir ne ile başlandıysa onunla bitirilmesi yeterli 

//C# ve JavaScript te olan ve çok ksrıştırılsn bir konu;
//Ternary Operator if lerin kullanılamayacağı için kullanılan operator
let sayimiz = 5;
if(sayimiz%2 ==0)
{

}
else{

}
sayimiz%2==0 ? console.log("Sayımız Çift"): console.log("Sayımız Tek");

let obj = null;
//Null check işlemi
if(obj){
    console.log("obj undefined'dan farklı (Tanımlanmış)")
}
else{
    console.log("obj tanımlanmamış veya null");
}
//obj && obj. null check