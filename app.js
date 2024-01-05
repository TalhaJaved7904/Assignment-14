// chapter 1
alert("First Name")
alert("Last Name")
alert("Email")
alert("Phone Number")
alert("Password")
alert("You're Learning JavaScript!")
alert("Knowledge is of no value unless you put it into practice.")

// Chapter 2
var firstName = "Talha"
var nationality
nationality = "Pakistani"

var teamName = "Ace"

alert(teamName)
var bestMan = "Charlie"
bestMan = "Newton"

// chapter 3

var caseQty = 144
var num = "9"
var marks = 74
marks +2
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal)

var value = 58
value = 58+58
console.log(value)

// chapter 4
var productCost = 3.45
var nameOfBand;
var topi = 250;
var firstNameLastName = "Talha Javed"
// illegal
// var product cost
// var "productcost"
// var alert

// legal
// var productCost
// var product_cost

// Chapter 5
// Modulus operator "%""
var number = 20%6
console.log(number)
var largeNum = 1000*2000
console.log(largeNum)
var total = number-largeNum
console.log(total)
alert(largeNum)

// Chapter 6
var x = 16
var y  = ++x
console.log(y)

var a = 100
var b = --a
console.log(b)

var x = 50;
var y = x++;
console.log(y)
// value of y is 50

var y = 50;
var z = --y;
console.log(z)
// value of z is 49

var e = 49
var f = --e
console.log(f)

// chapter #7
var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum) 

var calculatNum = (2 + 2) * 6;
console.log(calculatNum)

var calNum = (2 + 2) * (4 + 2);
console.log(calNum)

var calculateNum = ((2 + 2) * 4) + 2;
console.log(calculateNum)

var num =  (2 + 2) * (4 + 10)
console.log(num)

var nuM =  2 + (2 * 4) + 10
console.log(nuM)

var Num = 4 / (2 * 4)
console.log(Num)

// chapter 8
var nUm = "2"+"2"
console.log(nUm)

var message = ("Hello," + "Dolly");
console.log(message)

alert("33" + 3);

alert("Pakistan"+"Zindabad")

// chapter 9
var name = prompt("Enter first name")
var response = name
console.log(response)

var defaultname = "china"
var country =prompt ("Enter Your Country" , defaultname)
var countryResponse = country
console.log(countryResponse)

// chapter 10

var city  = prompt("You city")
if (city=="karachi"){
    
    console.log("The City Of Lights")
}


var zipcode = prompt("Enter your zipcode")
if(zipcode == "10010"){
    console.log("Karachi")
}

var h = 13
var g = 13
if(g==h){
    console.log("true")
}

// chapter 11
var l = 1
var o = 2
if(l!=o){
    console.log("False")
}

var w = "xyz"
var v = prompt("Enter Your Name")
if(w!=v){
    console.log("No match")
}

// CHAPTER 12
var s = 69
var t = 75
if(s>=t){
    console.log("Greater than")
}else{
    console.log("Less than")
}

var a = 20
if(a==10){
    alert("a is 10")
}else{
    alert("The Correct Value Of a is 20")
}

// chapter 13
var SAT = 13
var avg = 10

if (SAT > avg || GPA > 2.5 || sport === "football") {
     alert("Welcome to Bubba State!");
     } else {
 alert("Have you looked into appliance repair?");
 }
    
//  chapter 14
var passWord = 8
if(passWord != 0){
    if(passWord<=5){
        alert("Password must be greater than 5")
    }else{
        alert("OK")
    }
}

// chapter 15
var array = []
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
var alphabet = ["h","i","j","k"]
alert(alphabet[2])

 var Alphabet=["h","i","j","k", "l ", "m " , "n" , "o"]
console.log(Alphabet)

// chapter 16
var pets = ["cats","dogs","fishes","cows","goats"]
console.log(pets)

pets.push("camel","elephant")
console.log(pets)

pets.pop()
console.log(pets)

pets.shift()
console.log(pets)

pets.unshift("ferret")
console.log(pets)

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice( 2 , 0, "L")
console.log(sizes)


var newSizes = sizes.slice(0 , 3)
console.log(newSizes)

// chapter 17-20
for (var i = 0; i <= 10; i++) 
console.log(i)

for (var i = 0; i <= 12; i++) 
console.log(i)

var firstArr = ["a","b","c","d","e","f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for(var i = 0; i <= firstArr.length; i++){
    for(var j = 0 ; j <= secondArr.length ; j++){
        console.log(firstArr[i] + secondArr[j])
    }
}

// chapter 21
// var allLower = userInput.toLowerCase();
// x = x.toLowerCase();

var originalVariable = "KARACHI"; 
var newVariable = originalVariable.toLowerCase();
console.log(newVariable)

// chapter22 - 25
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);
console.log(slicedPart)