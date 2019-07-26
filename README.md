# burger


Devour Your Burger!!!

This application allows user to put in the burgers they want to devour, and check them devoured if they did devour it.
It will keep the users data in the database in order for the user to know what has been devoured and what hasn't been devour yet.
This application uses the orm and model js to navigate to the database.  Then the controller will specifiy what the into to been taken
out of the database.  It also uses express handlebars in order to display the html.  Handlebar is an unique tool that allows the developer to easily handle their display, without having to right all the html code on their js. You can make handlebars model to make different pages that have to similar patterns with different info.  It will simplify the process by having a layout handlebar that the user can use without having to hard code same code.  

How this APP works:
1. Load the page.
2. Add a burger you are willing devourer.
3. Once you add a burger, it will show up on top of the page.
4. Now the user can choose to devour it if they did devour it.
5. Once the devour it has been clicked it will move down to the bottem where burgers that has been devoured will be placed.
6. Next time you load the page, it will keep track of what you have devoured and what has not been devour yet.