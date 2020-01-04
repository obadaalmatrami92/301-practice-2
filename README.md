# 301-practice-2

#Question 1 :
In a Handlebars template, what does {{city}} refer to?

When the template is executed, these expressions are replaced with values from an input object.

#Question 2 :
Explain how the following code in a Node-express server is triggered to run, and what it's output is

server.get('/list', (request, response) => {
   let animals = ['Cat','Dog','Sheep'];
   response.send(200).json(animals);
});

first of all the server route and send request and response
if it`s work correctly it will give us the array items which is Cat Dog Sheep 


#Question 3 :
Write a Constructor function that can create an instance of a person, with a name and an age, given 2 arguments

function Person (name , age ){
this.name = name ;
this.age = age;

}



