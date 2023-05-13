# Advanced Programmin 2 - Task 1 Part 2
Eden Berman & Liad Brettler

## Description
This project involved creating a chat webpage app with three different displays: a Login page, a Register page, and a Chats page. To design these pages, we made use of CSS and Bootstrap, while React was used to implement the app's functionality.
It is worth mentioning that the app is currently unable to receive messages from other users because it's not yet connected to a web server. Our main goal for this project was to establish the webpage's functionality, rather than its connection to external servers.

## Instructions
To start using the app, go to the directory where the files are located in your terminal and enter the command "npm start".

This will launch the app and open the login page in your browser. The login page is the main interface where you can enter your username and password. After clicking on the "Login" button, registered users will be directed to their personalized Chats page. If you haven't registered yet, click on the "Register" button, which will take you to the registration page where you can provide your information. Once you have filled in all the required fields, click on the "Register" button to redirect to the login page.
Once you are in the Chats page, you will see a split-screen interface. The left side displays your chats with your friends, while the right side shows the chat that you are currently viewing. To log out, click on the door icon on the top left bar. This will redirect you back to the login page.

To close the app, use the keyboard shortcut "Ctrl+C" and then type "Y" to confirm.

## Webpages
* Login - The main page of our app is the login page, which features a form with input boxes for the user's username and password. The page also includes buttons that allow users to access their personal chat page or the registration page. The username input box verifies whether the username is already registered, while the password box ensures that the entered password matches the username. If either of these fields is left blank or does not match, an error message will be displayed. Once the user enters the correct login credentials, they can access their personalized chat page by clicking on the "Login" button. If the user hasn't registered yet, they can click on the "Register" button, which will redirect them to the registration page.

* Register - The Register page of our app features a form that requires users to fill in mandatory fields such as username, password, password verification, and display name, while uploading a profile picture is optional. Certain fields have restrictions. The username must be unique in a case-insensitive manner. The password field must contain at least five characters, one digit, one uppercase letter, and one lowercase letter. Furthermore, the verify password field must match the password field. The display name field does not have any restrictions, but it is mandatory to fill it. Users can choose their profile picture, which will be previewed below as it would appear. If the user chooses not to upload an image, the default image will be displayed.
If any of the mandatory and restricted fields are not filled in properly, an appropriate error message will appear, and the user will not be able to register. Once the user completes the form, they can click on the Register button to be redirected to the login page. If the user has already registered, they can click on the right-hand link to be directed to the login page.

* Chats - //////////The Chats page displays all of the user's ongoing conversations. On the left side, there is a list of all the chats with friends, which includes their name, image, the last message received, and its date and time. At the top of this area, the user's image and name are shown along with an icon to add a new friend. On the right side of the page, the current chat with a selected friend is displayed, which shows the full chat history between the user and the friend, including the timestamps for each message. At the top of this area, the name and image of the friend with whom the user is currently chatting are displayed.

To ensure consistent and cohesive design throughout the app, each webpage has a corresponding CSS file that applies its unique design elements.
