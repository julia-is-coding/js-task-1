announcement = alert("Введите данные для формулы расчёта цилиндра ");

do {
    r = +prompt("Укажите радиус цилиндра (число)");
} while (isNaN(r));
console.log(r);

do {
    h = +prompt("Укажите высоту цилиндра (число)");
} while (isNaN(h));
console.log(h);

V = Math.PI*h*r*r;
console.log(V);

S = V/h;
console.log(S);

alert("Объём цилиндра равен "+V);

stars = "<br/>**************<br/>";
lines = "<br/>-------------------<br/>";

document.write(stars+"Объём цилиндра с площадью основы *S* "+S+", "+"радиусом *R* "+r+" и высотой *H* "+h+" равен: "+lines+"V = "+V+lines+"end. ");
