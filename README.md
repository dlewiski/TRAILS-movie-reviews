# TRAILS MOVIE REVIEW APP CODING CHALLENGE

Deployed version can be found at [https://trails-movie-reviews.herokuapp.com/](https://trails-movie-reviews.herokuapp.com/)

### To Run app locally
* Clone to local machine
* Navigate to root directory
* Enter 'npm run dev' to start both server and react app

### Prompt
JavaScript Coding Challenge

Using JavaScript (Node, Express, MongoDB, and any front-end framework), create a movie review app that allows users to create movie listings (with name, year, and description), edit the listing, and write reviews for the existing movies (seed a few). No authentication is required. When creating a movie listing or writing a review, the user should see a preview of their listing or review as they type. No styling is required.


### User Stories
* View a list of movies
* Add movies that have a name, description, and year
* Add reviews to each movie
* Edit the movies
* See preview of review as it is being typed
* See preview of movie as it is being typed

### Technologies Used
* React.js
* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Heroku
* Bootstrap V4

### Known bugs
* Reviews do not show up after being added on featured movie page (requires page refresh)
* Could not proxy request error on development server
* Refreshing Movie List page and Create Movie page returns json (only on deployed version)
* Any issues with refreshing those pages can we worked around by navigating to the home page


### Next steps/Other tasks to be considered
* Validation
* Unit testing
* Integration testing
* Add users to have ownership to reviews and movie lists
* Allow users to edit and delete reviews
* Authentication
