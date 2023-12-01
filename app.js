// task-8800
//"Hello, Python!"  Mesajını çap edin. .

// console.log("Hello, Python!");

// task-8810
// Məktəb konsertində "a" tələbələr mahnı oxudu,"b" tələbələr rəqs etdilər və "c" tələbələr mahnı oxuyub, rəqs ediblər.
//  Ümumilikdə neçə iştirakçı var idi?

// let a=13;
// let b=9;
// let c=5;

// let student=a+b-c; //umumi telebenin sayini tapmaq ucun coxlud dusturu
// console.log(student);

// task-8812
// Əgər tərəflərinin uzunluqlarını biliriksə, düzbucaqlının perimetrini və sahəsini tapın.

// let a=3,b=7,P,S;
// P=2*(a+b);
// S=a*b;
// console.log(P);
// console.log(S);

// task-8813
// Ölçülərinə görə düzbucaqlı paralelepipedin səth sahəsini və həcmini tapın.

// let a=3,b=7,P,S;
// P=2*(a+b);
// S=a*b;
// console.log(P);
// console.log(S);

// task-8814
// Kvadratın a tərəfinin uzunluğu məlumdursa, onun perimetrini və sahəsini tapın.

// let a=3,P,S;
// P=4*a;
// S=a**2;
// console.log(P);
// console.log(S);

// task-8815
// Verilmiş ölçülərinə görə kubun səthinin sahəsini və həcmini hesablayın.

// let a=3,S,V;
// S=6*(a**2);
// V=a**3;
// console.log(S);
// console.log(V);

// task-8816
// a və n natural ədədləri verilir. a^n -in qiymətini hesablayın.

// let a=2,b=10;
// a**=10;
// console.log(a);

// task-8817
// Müsbət tam ədəd n verilmişdirsə, n -rəqəmli müsbət tam ədədin sayını çap edin .

// let n=1234;
// console.log(n.toString().length);

// task-8825
// Dəyişənin qiymətini tapın "y" dəyişənin verilmiş real dəyəri üçün "x".Output example:7.286

// let x,y;
// x=1;
// y=(x**3)-5*((x**2)/7)+(9*x)-(3/x)+1;
// console.log(y);

// task-8827
// "x" dəyişəninin verilmiş həqiqi qiyməti üçün "y" dəyişəninin qiymətini tapın .Output example:-1.000

// let x,y;
// x=1;
// y=(((x**2)+(3*x)-4)/((2*x)-3))-((x+2)/((x**2)-(5*x)+7));
// console.log(y);

// task-8831
// "x" və "y" dəyişənlərinin verilmiş qiymətləri üçün ifadənin qiymətini tapın .Output example:21.857(mence cixis qiymeti sehv verilib:))

// let x,y,k;
// x=1;
// y=2;
// k=(2*(x**2))-(4*x*y)+(3*(y**2))+((x+y)/7);
// console.log(k);

// task-8838
// Birinci böyük fasilədə Həsənin "m" qəpiyi vardır, ikinci fasilədə o acıdı və bütün pullarını dadlı pirojkiyə xərcləmək qərarına gəldi. Pirojki "n" qəpiyə satılırsa, Həsən neçə pirojki ala bilər?

// let m=27,n=10;
// m=parseInt(m/n);
// console.log(m);

// task-8839
// Əvvəlki tapşırığa bənzər bir süjetdə Həsənin nə qədər pul qoyduğunu tapmaq lazımdır.

// let m=27,n=10;
// m=m%n;
// console.log(m);

// task-8840
// Natural ədəd "n" . Giris:27 cixis:7

// let m=27;
// m=m%10;
// console.log(m);

// task-8841
// Natural "n" (n > 9) ədədi verilmişdir. n ədədinin sonuncudan əvvəlki rəqəmini (onluq rəqəmini) çap edin. Giris:27 cixis:2

// let m=27;
// m=parseInt(m/10);
// console.log(m);

// task-8844
// Natural "n" (n > 9) ədədi verilmişdir. "n" ədədinin axırdan ikinci rəqəmini (onluq rəqəmini) silin.Giris:512 cixis:52

// let n=512;
// function test(){
//     let num,res='';
//      num=n.toString().split("");
//      for(let i=0;i<num.length;i++){
//         if(i==1){
//             continue;
//         }
//         res+=num[i];
//      }
//      return Number(res);
// }
// console.log(test());

// task-8845
// Natural "n" (n > 99) ədədi verilmişdir. "n" ədədinin axırdan üçüncü rəqəmini (yüzlük rəqəmini) silin.Giris:4625 cixis:425

// let n=4625;
// function test(){
//     let num,res='';
//      num=n.toString().split("");
//      for(let i=0;i<num.length;i++){
//         if(i==1){
//             continue;
//         }
//         res+=num[i];
//      }
//      return Number(res);
// }
// console.log(test());


// task-8849
// Verilmiş ikirəqəmli ədədin hər bir rəqəmini iki dəfə yazın.Giris:27 cixis:2277

// let n=27;
// n=(n*10)+7;
// n=(n*0.001)+2;
// n*=1000;
// console.log(n);

// task-8850
// Verilən üçrəqəmli natural ədədin rəqəmlərinin cəmini tapın.Giris:512 cixis:8

// let n=512;
// let teklik=n%10;
// let onluq=parseInt(n/10)%10;
// let yuzluk=parseInt(n/100);
// let sum=teklik+onluq+yuzluk;
// console.log(sum);
// console.log(teklik);
// console.log(onluq);
// console.log(yuzluk);

// task-8851
// Verilmiş dördrəqəmli natural ədədini tərsinə çevirin.Giris:1234 cixis:4321

// let n=1234;
// console.log(parseInt(n.toString().split('').reverse().join('')));

// task-8852
// Beşrəqəmli ədədin cüt mərtəbələrindəki (yəni 2 və 4-cü) rəqəmləri silin.Giris:12345 cixis:135

// let n=12345;
// function test(){
//     let num,res='';
//      num=n.toString().split("");
//      for(let i=0;i<num.length;i++){
//         if(i==1 || i==3){
//             continue;
//         }
//         res+=num[i];
//      }
//      return Number(res);
// }
// console.log(test());


// task-8853
// Beşrəqəmli ədədin tək mərtəbələrindəki (yəni 1, 3 və 5-ci) rəqəmləri silin.Giris:12345 cixis:24

// let n=12345;
// function test(){
//     let num,res='';
//      num=n.toString().split("");
//      for(let i=0;i<num.length;i++){
//         if(i==0 || i==2 || i==4){
//             continue;
//         }
//         res+=num[i];
//      }
//      return Number(res);
// }
// console.log(test());

// task-8854
// Beşrəqəmli ədədi tərsinə yazın.Giris:12345 cixis:54321

// let n=12345;
// console.log(parseInt(n.toString().split('').reverse().join('')));

// task-8860(bunu anlamadim)
// Verilmiş üçrəqəmli "n" ədədi üçün "n" ədədinin rəqəmlərinin,
//  o cümlədən eynisi də daxil olmaqla, bütün mümkün dəyişmələri ilə
//   əmələ gələn üçrəqəmli ədədlərin cəmini tapın.Giris:123 cixis:1332


// task-8862
// Verilən tam ədədin mənfi, sıfır və ya müsbət olmağından asılı olaraq çıxışa uyğun olaraq -1, 0 və ya 1 verin.

// let number=+prompt("Enter number:");
// if(number>0){
//     console.log(1);
// }
// else if(number<0){
//     console.log(-1);
// }
// else{
//     console.log(0);
// }

// task-8864
// İki sıfır olmayan "n" və "m" tam ədədləri verilmişdir. n və m tam ədədləri eyni işarəlidirlərsə 1, əks halda 0 çap edin.

// let number1=+prompt("Enter number1:");
// let number2=+prompt("Enter number2:");
// if(number1>0 && number2>0){
//     console.log(1);
// }
// else{
//     console.log(0);
// }

// task-8870
// Üç tam ədəd "a" ,"b" və "c" verilir. Onlardan ən kiçikini çap edin.Giris:7 2 4 cixis:2

// let a=7,b=2,c=4;
// if(a<b && b>c){
//     console.log(a);
// }
// else if(c>a && c<b){
//     console.log(b);
// }
// else{
//     console.log(b);
// }

// task-8871
// Üç tam ədəd "a" , "b" və "c" verilmişdir. Onlardan ən böyüyü çap edin.Giris:7 2 4 cixis:7

// let a=7,b=2,c=4;
// if(a<b && b>c){
//     console.log(c);
// }
// else if(c>a && c<b){
//     console.log(b);
// }
// else{
//     console.log(a);
// }

// task-8872(ede bilmedim)
// Proqramın girişində tək sətirdə boşluqla ayrılmış üç "a", "b" və "c" tam ədədləri verilmişdir.
//  Verilmiş ədədləri artma ardıcıllığında çap edin.Giris:7 2 4 cixis:2 4 7

// let a=7,b=2,c=4;


// task-8876
// n həqiqi ədədi verilmişdir. n tam ədəddirsə "Ok", əks halda "No" çap edin.

// let number=+prompt("Enter number:");
// if(Number.isInteger(number)){
//     console.log("Ok");
// }
// else{
//     console.log("No");
// }

// task-8877
// "n" natural ədədi verilmişdir. Əgər "n" ədədi hər hansı bir "m" natural ədədinin kvadratıdırsa, onda 
// "m" ədədini çap edin, əks halda "No" çap edin.

// let number=+prompt("Enter number:");
// let num=+prompt("Enter num:");
// if(num**2==number){
//     console.log(num);
// }
// else{
//     console.log("No");
// }

// task-8878(ede bilmedim)
// Proqram konsoldan N natural ədədini oxumalıdır . Əgər verilmiş N ədədi bərabərdirsə ,
//  yəni 10 10^Mrəqəminin hansısa gücüdürsə , cavab olaraq M ədədi çıxmalıdır . Əks halda Xeyr cavabını göstərin.


// task-8879
// Üç natural a, b və c ədədləri verilir. Əgər tərəfləri a, b, c olan üçbucaq mövcuddursa onda çıxışa ədədlərin cəmini verin, əks halda çıxışa No verin.

// let a=+prompt("Enter num:");
// let b=+prompt("Enter num:");
// let c=+prompt("Enter num:");
// if(a+b>c && a+c>b){
//     console.log(a+b+c);
// }
// else{
//     console.log("No");
// }


// task-8880
// Proqramın girişində bir sətirdə boşluqla yazılmış üç natural ədəd a , b və c var. Yan uzunluqları a , b , c olan bərabərtərəfli üçbucaq və əks halda No mesajı varsa, cavab olaraq verilmiş ədədlərdən hər hansı birinin kvadratını çıxarmalısınız .

// let a=+prompt("Enter num:");
// let b=+prompt("Enter num:");
// let c=+prompt("Enter num:");
// if(a==b && b==c && a==c){
//     console.log(a**2);
// }
// else{
//     console.log("No");
// }


// task-8881
// Üç natural ədəd verilmişdir a , b və c . Bu tərəflərin uzunluqlarına malik beraberyanli üçbucağın olub olmadığını müəyyən edin.

// let a=+prompt("Enter num:");
// let b=+prompt("Enter num:");
// let c=+prompt("Enter num:");
// if(a==b){
//     console.log(a+b+c);
// }
// else{
//     console.log("No");
// }

// task-8882
// Dörd natural a, b, c, d ədədləri verilmişdir. Tərəflərinin uzunluğu a, b, c, d olan kvadrat mövcuddursa, verilmiş ədədlərdən hər hansı birinin kvadratını, əks halda No çap edin.

// let a=+prompt("Enter num:");
// let b=+prompt("Enter num:");
// let c=+prompt("Enter num:");
// let d=+prompt("Enter num:");

// if(a==b && a==c && a==d){
//     console.log(a**2);
// }
// else{
//     console.log("No");
// }

// task-8883
// Dörd natural ədəd verilmişdir a , b , c , d . Yan uzunluqları a , b , c , d olan düzbucaqlı varsa, verilmiş ədədlərin cəmini tapın . Əks halda "Xeyr" yazın .

// let a=+prompt("Enter num:");
// let b=+prompt("Enter num:");
// let c=+prompt("Enter num:");
// let d=+prompt("Enter num:");

// if(a==b && c==d){
//     console.log((a+c)*2);
// }
// else{
//     console.log("No");
// }

// task-8884
// Proqramın girişində üç natural ədəd a, b və c boşluqla verilir. Çıxışa aşağıdakı cavablardan birini vermək lazımdır:

// equilateral, əgər tərəflərinin uzunluqları a, b, c olan üçbucaq bərabərtərəfli olarsa;

// isosceles, əgər tərəflərinin uzunluqları a, b, c olan üçbucaq bərabəryanlı olarsa;

// versatile, əgər tərəflərinin uzunluqları a, b, c olan üçbucaq müxtəliftərəfli olarsa;

// invalid, əgər tərəflərinin uzunluqları a, b, c olan üçbucaq mövcud deyilsə.

// let a=+prompt("Enter num:");
// let b=+prompt("Enter num:");
// let c=+prompt("Enter num:");

// if(a==b && a==c){
//     console.log("equilateral");
// }
// else if(a==b){
//     console.log("isosceles");
// }
// else if(b==c){
//     console.log("invalid");
// }
// else{
//     console.log("versatile");
// }

// task-8885
// Tam n ədədi verilmişdir. n ədədindən əvvəlki tək ədədi çap edin.

// let n=+prompt("Enter num:");
// if(n%2==1){
//     console.log(n-2);
// }
// else{
//     console.log(n-1);
// }

// task-8886
// Tam n ədədi verilmişdir. n ədədindən əvvəlki cüt ədədi çap edin.

// let n=+prompt("Enter num:");
// if(n%2==0){
//     console.log(n-2);
// }
// else{
//     console.log(n-1);
// }

// task-8889
// Beşrəqəmli natural ədəd n verilmişdir . İçindəki tək rəqəmlərin sayını tapın.

// let n=12345;

// function test() {
//     let num = n.toString();
//     let count = 0;
//     for (let i = 0; i < num.length; i++) {
//         let nums = parseInt(num[i]);
//         if (nums % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(test());

// task-8890
// Beşrəqəmli natural ədədi verilir. Bu ədədin cüt rəqəmlərini 1 vahid artırın.

// let n=12345;
// let res='';
// let num = n.toString();
// function test() {
//     for (let i = 0; i < num.length; i++) {
//         let nums = parseInt(num[i]);
//         if (nums % 2 == 0) {
//             nums++;
//         }
//         res +=nums;
//     }
//     return parseInt(res)
// }

// console.log(test());

// task-8893
// Verilmiş n ədədinə görə növbəti şərtlərdən hər biri doğrudursa YES, əks halda NO çap edin.

// n ədədi üçə tam bölünür;

// n ədədi cütdür və ikirəqəmlidir.

// let num=+prompt("Enter num:");
// if(num%3==0 && num%2==0 && num>9 && num<100 ){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// task-8895
// a, b, və c tam ədədləri verilir. Bu ədədlərdən ən azı biri müsbət və ən azı biri mənfidirsə çıxışa YES, əks halda NO verin.

// let a=+prompt("Enter num:");
// let b=+prompt("Enter num:");
// let c=+prompt("Enter num:");

// if(a>0 && b<0){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

// task-8896
// Proqram üçrəqəmli N ədədi daxil edir. N ədədinin bütün rəqəmləri fərqlidirsə çıxışa YES, əks halda NO verin.

// let n=123;
// let num=n.toString();
// function test(){
//      for(let i=0;i<num.length;i++){
//         if(num[i]!==num[i+1]){
//             console.log("Yes");
//         }
//         else{
//             console.log("No");
//         }
//      }
// }
// test();

// task-8897
// Tam n ədədi verilir. n-dən böyük və 10-a tam bölünən ən kiçik ədədi tapın.

// let n=+prompt("Enter num:");
// console.log(n + (10 - (n % 10)));

// task-8898(ede bilmedim)
// Proqram natural n ədədini daxil edir. n-dən böyük və tam kvadrat olan ən kiçik ədədi tapın.

// let n=+prompt("Enter num:");

// task-8899(ede bilmedim)
// Proqram n natural ədədini daxil edir. n-dən böyük və ikinin qüvvəti olan ən kiçik ədədi tapın.

// task-8900(ede bilmedim)
// n tam ədədi verilir. n-dən böyük olan və 7-yə tam bölünən ədədlərdən ən kiçiyini tapın.


// task-8901(ede bilmedim)
// Natural n ədədi verilmişdir. Rəqəmlərinin sayı n ədədinin rəqəmlərinin sayından çox olan ilk ən kiçik ədədi çap edin.

// let n=+prompt("Enter num:");


// task-8902
// n natural ədədi verilmişdir. n-dən böyük olan, 2, 3 və 5-ə bölünməyən ən kiçik natural ədədi çap edin.

// let n=+prompt("Enter num:");
// if((n+1)%2!==0 && (n+1)%3!==0 && (n+1)%5!==0){
//     console.log(n+1);
// }
// else{
//     console.log("yoxdur");
// }
