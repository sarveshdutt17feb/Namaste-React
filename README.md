# reactcode

Chapter 01 - Inception

Link to my Code Theory -
●	What is Emmet?

○	“Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow:” 
○	And Emmet does fulfill what they promise, you can use short expressions to generate HTML markup, CSS.

●	Difference between a Library and Framework?

 

●	What is CDN? Why do we use it? 

“A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.”
				Or
A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are.

●	Why is React known as React?

And it's called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.”


	What is crossorigin in script tag?

“The crossorigin attribute on a <script> tag specifies that CORS is supported when loading an external script file from a third party server or domain.”

●	What is diference between React and ReactDOM

React is the core libarary who is responsible to build the tag like h1,h2 ,div and so on and React DOM gives access to DOM(Document object model).

●	What is difference between react.development.js and react.production.js files via CDN?

○	The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
○	The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. 


●	What is async and defer? - see my Youtube video ;) 

●	Coding -
●	Set up all the tools in your laptop
○	VS Code
○	Chrome
○	Extensions of Chrome
●	Create a new Git repo
●	Build your first Hello World program using,
○	Using just HTML
○	Using JS to manipulate the DOM
○	Using React
■	use CDN Links
■	Create an Element
■	Create nested React Elements
■	Use root.render

●	Push code to Github (Theory as well as code)
●	Learn about Arrow Functions before the next class

Arrow functions were introduced in ES6. 
Arrow functions allow us to write shorter function syntax:
let myFunction = (a, b) => a * b;
        Before Arrow: 
hello = function() {
  return "Hello World!";
}
With Arrow Function:
hello = () => {
  return "Hello World!";
}
It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello = () => "Hello World!";

Note: This works only if the function has only one statement.

Arrow Function With Parameters:
hello = (val) => "Hello " + val;
In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello " + val;


References:
-	https://beta.reactjs.org/apis/react/createElement
-	https://www.youtube.com/watch?v=IrHmpdORLu8
