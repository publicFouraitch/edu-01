
function isPrime(a)
{
    var prime = true;
    for(var i=2; i<=Math.sqrt(a); ++i)
        if(a % i)
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
    while(n)
    {
        if(isPrime(a))
            --n;
        ++a;
    }
    return a-1;
}



var d = new Date();

console.log(prime(13465));


var d1 = new Date();
var ms1 = d1.getTime();

console.log((ms1 - ms)/1000);
