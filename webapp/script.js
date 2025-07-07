function generateRandom(max_num)
{
    var randNum = Math.floor(Math.random() * max_num + 1);
    return randNum;
}

document.getElementById("btnGenerateNumber").addEventListener("click", function()
{
    var num = generateRandom(10000);
    alert("Your Generated Number is: " + num);
    document.getElementById("randomNumber").innerHTML = num ;
    
});
