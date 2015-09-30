//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here

  var me = {
    name: "Roberto",
    age: 36
  };

  document.write(me.name);

//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
  var favoriteThings = {
    band: "The Head and The Hearts",
    food: "Sushi",
    person: "Me",
    book: "The Davinci Code",
    movie: "The Matrix",
    holiday: "Halloween"
  }

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
  favoriteThings["car"] = "FJ Cruiser";
  favoriteThings["brand"] = "Toyota";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here
  favoriteThings["food"] = "Lettuce";
  favoriteThings["book"] = "50 Shades of Gray";

  //var output = '';
  document.write("<br />");
  for (var key in favoriteThings) {

    document.write(key + ": " + favoriteThings[key] + "<br />");
  }

  //document.write(favoriteThings);



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here
  var backPack = {}
  var item = "firstPocket";
  backPack["item"] = item;
  backPack.color = "red";

  

//After you do the above, alert your entire backPack object.

  //Code here
  document.write("<br />");
  for (var key in backPack) {

    document.write(key + ": " + backPack[key] + "<br />");
  }

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here

  //Code here
  document.write("<br />");
  for (var key in backPack) {

    document.write(key + ": " + backPack[key] + "<br />");
  }


//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here
  var me = {
    name: "Roberto",
    age: 36,
    height: "5'7",
    married: "No",
    eyeColor: "Brown",
    hairColor: "Black"
  };

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here

  document.write("<br />");
  for (var key in me) {

    document.write(key + ": " + me[key] + "<br />");
  }


//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here
    var album = {
      title1: "5:00",
      title2: "5:40",
      title3: "3:02",
      title4: "2:12",
      title5: "1:30" 
    };

//Now, loop through your album object alerting every song title individually.

  //Code Here
  document.write("<br />");
  for (var key in album) {

    document.write(key + ": " + album[key] + "<br />");
  }  



//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here
  var state = {
    AK: 20000,
    CA: 50000,
    UT: 30000,
    OR: 40000,
    WA: 10000
  };

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here

  document.write("<br />");
  for (var key in state) {
    if (state[key] > 30000){
      document.write(key + "<br />");
    }
  }


//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

  document.write("<br />");
  for (var key in user) {

    document.write(key + ": " + user[key] + "<br />");
  }
   document.write("<br />");
  for (var key in user) {
      // if(!user[key]){
    if (user[key] == false || user[key] == 0 || user[key] == "" || user[key] == null || user[key] == undefined || user[key] == NaN){
     delete user[key]; 
    }
  }
  document.write("<br />");
  for (var key in user) {

    document.write(key + ": " + user[key] + "<br />");
  }

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here




//NEXT PROBLEM
user.name = "Roberto";
user.email = "rmc1579@gmail.com";
user.pwHash = "1234546";
user.birthday = "06-15-79";
user.username = "rmc1579";
user.age = 36;

document.write("<br />");
  for (var key in user) {

    document.write(key + ": " + user[key] + "<br />");
  }



var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here
user.name = "Tyler S. McGinnis";
user.email = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here

  document.write("<br />");
  user.sayName();


//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here
  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here
  methodCollection = {
    alertHello: function(){
      alert ("hello");      
    },
    logHello: function(){
      document.write("hello");
    }
  } 

//Now call your alertHello and logHello methods.

  //Code Here
  document.write("<br />");
  methodCollection.alertHello();
  methodCollection.logHello();


//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  //Code Here
  function MakePerson(name,birthday,ssn){
    return info = {
      name: name,
      birthday: birthday,
      ssn: ssn
    };
  }

  MakePerson("Roberto","jun",123);

  

//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  //Code Here
  
  function MakeCard(number,expdate){
    var newcard = {
      number: number,
      exp: expdate
    };
    return newcard;   
  }
  MakeCard(123,12345678);
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  //Code Here

  function bindCard(MakePerson,MakeCard){
    var bindcard = {};
    for (var key in MakePerson) {
      bindcard.name = MakePerson[key];
      bindcard["birthday"] = MakePerson[key];
      bindcard["ssn"] = MakePerson[key];
    }
    for (var key in MakeCard){
      bindcard["number"] = MakeCard[key];
      bindcard["expdate"] = MakeCard[key];
    }
    return bindcard;
  }
  document.write(bindCard(MakePerson,MakeCard));