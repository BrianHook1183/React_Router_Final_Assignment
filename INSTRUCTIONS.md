# React Router: Assignment
## Instructions
To complete this assignment, you will need to update existing code to make use of React Router. The existing code has no routes and shows every view on the same page.

[https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/e70b82f8b85f92fa0468bde49f1a0089-oject-unfinished.png]

Below and in the code are various TODO items that should help you build the project as expected. With that said, feel free to make the changes you feel are necessary to accomplish the tasks.

## Overview
You'll be fixing the routing for a community blog that shows multiple users and their multiple posts. All the views are already there -- you just need to add the routing.

## API
This project makes use of the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). It's a free API that can be used to test out services you're building. It's important to note that this API will not update any data. In this project, when you click the "Delete" button, no data will actually be deleted. This should not affect your completion of the project.

## Home
The home view (i.e. /) should only show a list of users.

![](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/ea5adc8db57115e822550473f7d5a356-project-home.png)

If you click on the user's name, it will bring you to the user's Profile view. If you click on the link underneath the user's name, it will bring you to the user's Posts view.

## Profile
The profile view (i.e. /users/:userId) shows a link to return to the home view and information about the user.

![](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/23ea178b5f6abf72d1fbc5d80f31dc7c-project-user.png)

If you click on the "Posts" tab, it will go to that user's Posts view.

## Posts
The posts view (i.e. /users/:userId/posts) shows all the posts by the user. By default, it will show a message that says no post is selected.

![](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/21958c47ddb60a12ae2429603cf711f7-posts-unselected.png)

If you click on one of the posts, it will show up with the content and a Delete button.

![](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/ac4676c2fbfb3c831192e76334187a25-t-posts-selected.png)

When the Delete button is clicked, the user should be brought back to the home view.