
function isPrime(a)
{
    var prime = true;
    for(var i=2; i<=Math.sqrt(a); ++i)
        if(a % i == 0)
        {
            prime = false;
            break;
        }
    return prime;
}

//console.log(isPrime(13));


function prime(n)
{
    var a = 2;
    while(n != 0)
    {
        if(isPrime(a))
            --n;
        ++a;
    }
    return a-1;
}



var d = new Date();
var ms = d.getMilliseconds();
var s = d.getSeconds();
var m = d.getMinutes();
s = ms/1000;
s = s % 3600;
m = s / 60;
s = s % 60;

console.log(prime(549424));

var d1 = new Date();
var ms1 = d1.getSeconds();
var s1 = d1.getSeconds();
var m1 = d1.getMinutes();
s1 = ms1/1000;
s1 = s1 % 3600;
m1 = s1 / 60;
s1 = s1 % 60;

if(m || m1)
    console.log(m1 * 60 * 1000 + s1 * 1000 + ms1 - m * 60 * 1000 + s * 1000 + ms);
else if(s || s1)
    console.log( s1 * 1000 + ms1 - s * 1000 + ms);
else if(ms || ms1)
    console.log(ms1 - ms);
