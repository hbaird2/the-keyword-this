//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //A reserved key word to reference an object.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //1. Implicit Binding
            //*uses whatever is left of the dot as your object.
      //2. Explicit Binding:
            //*bind() - binds the this keyword to a specific object.
            //*call() - takes in a reference object then N number of parameters.
            //*apply() - takes in a reference object then an array of arguements.

  // 3) What is the difference between call and apply?

      //Call takes parameters passed individually. Apply takes parameters as an array.

  // 4) What does .bind do?

      //binds the the this keyword to a specific object for future calls.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: 'hbaird',
      email: 'hunter@gmail.com',
      getUsername: function() {
        return this.username;
      }
    }

user.getUsername();

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  var Car = function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function () {
      return this.move += 10;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
