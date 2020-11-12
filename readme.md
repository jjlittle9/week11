CRUD APPS!
C = create

R = read

U = update

D = delete

 

Over the next few weeks, we're going to be building a web application that allows us to save (persist) data and manage it by adding new records, deleting old ones, and updating existing ones. You will need to pick out the 'theme' of your application. You can CRUD clothes, games, sports, etc. Just pick a topic and use it.

 

Index

In your respository, create 3 files: index.html, new.html, and edit.html
Create a "javascript.js" file and a "style.css" file as well
In your index page, create a table to display the items you are CRUDing
 When the page loads, you should pull out all of the previously saved items in local storage and display them in the table
One of the pieces of information in the table for the item should be a link that directs the user to "edit.html"
We are going to do any editing this week, but just get the navigation setup
There should be a link at the top of the page that will send the user to new.html
New

There should be a form on the page with at minimum 3 text inputs
feel free to use other form inputs if you want though
The form should have an input with the type of submit to submit the form
On form submission, make sure to prevent the default action that the browser tries to do
Synthesize/message/create a basic object from the form data by serializingArray() with jQuery
Save the new object into the array in local storage
Make sure you check for an existing array first, and make a new one if needed
Make sure to stringify your javascript before saving to localstorage
After saving, redirect the user back to index