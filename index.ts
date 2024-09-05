//write a program that determines the day of week 
var dayofweek = 5
switch(dayofweek){
    case 1 :
        console.log("Monday")
        break;
    case 2 :
        console.log("Tuesday")
        break;
    case 3 :
        console.log("Wednesday")
        break;
    case 4 :
        console.log("Thursday")
        break;
    case 5 :
        console.log("Friday")
        break;
    default :
        console.log("Weekand")
        break ;
}
// write a prgram that print message "good morning"
var  currenthour = 5
if(currenthour > 12){
    console.log("Good Morning")
}
else if(currenthour < 12){
    console.log(" if-Good afternoon")
}
else{
    console.log(" Good Evening")
}
//switch statement
var  currenthour = 5
switch(currenthour){
    case 3 :
        console.log("Good Morning")
        break;
    case 4 :
        console.log("Good Afternoon")
        break;
    default :
        console.log(" switch-Good Evening")
        break; 
}
// write a program that simulates a simple ATM . ask the user for balance
var  accountbalance : number = 35000
var  pinnumber : number = 234
var  withdrawabalance = 25000
var  accountnumber = 5643
if(accountnumber == 5643 && pinnumber == 234){
    if( accountbalance >=   withdrawabalance)
    {
        accountbalance -= withdrawabalance
        console.log(`you have withdraw ${accountbalance}`)
    }
    else{
        console.log(`you have not enough money to withdraw`)
    }
}
else{
    console.log(`Account number and Pin number are wrong`)
}
// write a program that prints the name of study for a person
//if-elseif
var classnumber : number = 8
if(classnumber == 1){
     console.log("playgroup")
}
else if(classnumber == 2)
{  
    console.log("Nursey")
}
   else if(classnumber == 3)
{  
    console.log("kindergarton")
}
else if(classnumber == 4)
{  
    console.log("Elementary school")
}
else if(classnumber == 5)
{  
    console.log("Middle school")
}
else if(classnumber == 6)
{  
    console.log("High school")
}
else if(classnumber == 7)
{  
    console.log("intermediate")
}
else if(classnumber == 8)
{  
    console.log("Undergraduate")
}
else if(classnumber == 5)
{  
    console.log("Graduate")
}
else 
{  
    console.log("Invalid class number")
}
//switch statement
var roomnumber : number = 6
switch (roomnumber) {
case 1:
    console.log("playgroup")
    break;
case 2:
    console.log("Nursey")
    break;
case 3:
     console.log("kindergarton")
    break;
 case 4:
    console.log("Elementary school")
    break;
case 5:
     console.log("Middle school")
    break;
 case 6:
    console.log("High school")
    break;
case 7:
    console.log("Intermediate ")
    break;
case 8:
    console.log("Undegraduate")
    break;
case 8:
    console.log("Graduate")
     break;
default:
    console.log("Invalid Room nuumber")
     break;                                                                                                                  
}
// write a program that check ms weather if the is positive ,negative or zero
var number = 10
if(number > 0){
    console.log("Positive")
}
else if(number < 0){
    console.log("Negative")
}
else {
    console.log("Zero")
}
// write a program that 5 diferent number check is greatest and smallest
var number1 = 10
var number2 = 28
var number3 = 24
var number4 = 42
var number5 = 33
// check greatest number
if (number1 > number2 && number1 > number3 && number1 > number4 && number1 
    > number5){
    console.log("Number 1 is Max number")
    }
else if(number2 > number1 && number2 > number3 && number2 > number4 && number2
    > number5){
    console.log("Number 2 is Max number")
    }
 else if(number3 > number1 && number3 > number2 && number3 > number4 && number3
        > number5){
     console.log("Number 3 is Max number")
        }
 else if(number4 > number1 && number4 > number2 && number4 > number3 && number4
            > number5){
    console.log("Number 4 is Max number")
     }
else {
     console.log("Number 5 is Max number")
     }
// check smallest number
if (number1 < number2 && number1 < number3 && number1 < number4 && number1 
    < number5){
    console.log("Number 1 is Min number")
    }
else if(number2 < number1 && number2 < number3 && number2 < number4 && number2
    < number5){
    console.log("Number 2 is Min number") 
    }
else if(number3 < number1 && number3 < number2 && number3 < number4 && number3
    < number5){
    console.log("Number 3 is Min number") 
    }
else if(number4 < number1 && number4 < number2 && number4 < number3 && number4
    < number5){
     console.log("Number 4 is Min number") 
    }
else {
     console.log("Number 5 is Min number") 
     }