# Social Media Plateform

## Project Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or higher)
- MySQL database

### Installation

1. Clone the repository: `git clone https://github.com/younes1231/social_media_pr.git`
2. Navigate to the project directory: `cd social_media_pr`
3. Install dependencies: `npm install`

### Configuration

1. Create a `.env` file in the root directory.
2. Add environment variables:

   ```
   PORT=3000
   MySql: username:
          password:

   ```

## API Endpoints and Usage

### Authentication

- **POST /api/auth/register**: Register a new user.

  - Request body: `{ "username": "example_user", "email":"jhonsmith@gmail.com", "password": "example123", "firstname":"jhon", "lastname":"smith", "date_of_birth":"11-11-2002", "profile-pic-url":"image.jpg", "bio":"hardworking and dediacted.." }`
  - Response: `{ "message": "User registered successfully" }`

- **GET /api/auth/login**:
  - Request body: `{ "username": "example_user", "password": "example123" }`
  - Responce:`{"Token":"jdjkdjhdjdbjwpe2##O#3o#jej-12}`

### user-related Endpoints

- **GET /api/users**: Retrieve all available users.
- **Post /auth/login**: login using username and password.
- **post /auth/register**: Register a user with all required info.
- **GET /api/user/:id**: Retrieve a user by ID.
- **Delete /api/user/:id**: Delete user by ID.

### Post-related Endpoints

- **GET /api/posts**: Retrieve all available posts.
- **Post /api/posts/post**: Upload a post by a user.
  - Request body: `{ "user_id": "2", "content": "Cover letter text","created_at":"11-11-2018 }`
- **GET /api/posts/:id**: Retrieve a post by ID.
- **Delete /api/posts/:id**: Delete post by ID.

### likes-related Endpoints

- **GET /api/likes/likes**: Retrieve all available likes.
- **Post /api/likes/like**: insert a like on a post.

  - Request body: `{ "user_id": "2", "post_id": "3","created_at":"11-11-2018 }`

- **GET /api/likes/:id**: Retrieve a like by ID.
- **Delete /api/likes/like/:id**: Delete like by ID.
- **GET /api/likes/user/likes**: Retrieve the likes by s user.
- **GET /api/likes/post/likes**: Retrieve the likes by a post.

### Friendship-related Endpoints

- **GET /api/friendships/friendships/**: Retrieve all available friendships.
- **Post /api/friendships/friendship/**: craete a friendship btw 2 usres.
  - Request body: `{ "user_id_1": "2","user_id_2": "3", "status": "rejected","created_at":"11-11-2018 }`
- **GET /api/friendships/:id**: Retrieve a friendship by ID.
- **Delete /api/friendships/friendship:id**: Delete friendship by ID.
- **GET /api/friendships/user/friendships**: Retrieve a friendship by a user.

### comments-related Endpoints

- **GET /api/comments/comments/**: Retrieve all available comments.
- **Post /api/comments/comment/**: insert a new comment on a certain post.
  - Request body: `{ "user_id": "2","post_id": "3", "content": "u are joli"}`
- **GET /api/comments/comment/:id**: Retrieve a comment by ID.
- **Delete /api/comments/comment:id**: Delete a comment by ID.
- **GET /api/comments/user/comments/:id**: Retrieve all comments by a user.
- **GET /api/comments/post/comments/:id**: Retrieve all comments by a post.

# Database Schema Description

## Users Table

The `users` table stores information about registered users.

### Columns

- `user_id`: Unique identifier for each user (INT).
- `username`: Username of the user (TEXT).
- `email`: Email address of the user (TEXT).
- `password`: Password of the user (TEXT).
- `first_name`: First name of the user (TEXT).
- `last_name`: Last name of the user (TEXT).
- `date_of_birth`: Date of birth of the user (DATETIME).
- `profile_pic_url`: URL of the user's profile picture (TEXT).
- `bio`: Biography or description of the user (TEXT).
- `registered_date`: Date and time of user registration (DATETIME).

## Posts Table

The `post` table contains information about the posts made by users.

### Columns

- `post_id`: Unique identifier for each post (INT).
- `user_id`: Identifier linking the post to the user who created it (INT).
- `content`: Content or message of the post (TEXT).
- `created_at`: Date and time when the post was created (DATETIME).

## Comments Table

The `comments` table stores comments made on posts.

### Columns

- `comment_id`: Unique identifier for each comment (INT).
- `user_id`: Identifier linking the comment to the user who posted it (INT).
- `post_id`: Identifier linking the comment to the post it belongs to (INT).
- `content`: Content or message of the comment (TEXT).
- `created_at`: Date and time when the comment was created (DATETIME).

## Likes Table

The `likes` table contains records of likes given to posts.

### Columns

- `like_id`: Unique identifier for each like (INT).
- `user_id`: Identifier linking the like to the user who liked the post (INT).
- `post_id`: Identifier linking the like to the post that was liked (INT).
- `created_at`: Date and time when the like was created (DATETIME).

## Friendship Table

The `friendship` table manages friendships between users.

### Columns

- `friendship_id`: Unique identifier for each friendship record (INT).
- `user_id_1`: Identifier linking the friendship to one user (INT).
- `user_id_2`: Identifier linking the friendship to another user (INT).
- `created_at`: Date and time when the friendship record was created (DATETIME).
- `status`: Status of the friendship, can be 'Pending', 'Accepted', or 'Rejected' (ENUM).

# Third-Party Tool Integration

## Express-Parser

The project extensively utilizes the Express-Parser middleware to handle incoming requests and parse data efficiently. Express-Parser simplifies the process of handling various types of data such as JSON, URL-encoded, and multipart data, enhancing the functionality of our Express.js application.

For more information about Express-Parser, please refer to the official documentation: [Express-Parser GitHub Repository](https://github.com/expressjs/body-parser)

## JSON Web Token (jsonwebtoken)

The application employs the `jsonwebtoken` library for generating and verifying JSON Web Tokens (JWTs). JWTs are used for secure user authentication and authorization mechanisms within the system. This library facilitates the creation and validation of tokens, ensuring secure transmission of information between parties.

For more details on `jsonwebtoken` implementation, consult the official documentation: [jsonwebtoken GitHub Repository](https://github.com/auth0/node-jsonwebtoken)

## Express Validator

`express-validator` is integrated into the project to handle validation and sanitization of incoming request data within Express.js routes. This middleware simplifies the validation process by providing a set of robust and flexible validators to ensure the correctness and security of user-provided data.

For more information about `express-validator`, please refer to the official documentation: [Express Validator GitHub Repository](https://github.com/express-validator/express-validator)

# Running and Testing the Application with Postman

## Prerequisites

- Ensure the application server is running and accessible.
- Download and install [Postman](https://www.postman.com/downloads/).

## Testing Endpoints

1. **Start the Server:**

   Ensure your application's server is running on the specified port (e.g., `localhost:3000`).

2. **Import the Collection:**

   - Open Postman.
   - Click on `Import` in the top-left corner.
   - Choose the collection file (if available) or manually create requests.

3. **Set Environment Variables (if required):**

   - If your API requires authentication tokens or specific environment variables, set them in Postman's environment or global variables.

4. **Send Requests:**

   - Choose the HTTP method (GET, POST, PUT, DELETE, etc.) for the endpoint you want to test.
   - Enter the endpoint URL (e.g., `http://localhost:3000/api/users`).
   - Add any required headers, query parameters, request body, etc.
   - Click on `Send` to execute the request.

5. **Verify Responses:**

   - Check the response received from the server.
   - Ensure the status code is correct (e.g., 200 for a successful GET request).
   - Validate the response body against expected data.
   - Verify if the headers, cookies, or any other metadata are as expected.

6. **Handle Authentication (if required):**

   - For endpoints requiring authentication (using JWT or other methods), handle the authentication process within Postman. This might involve obtaining tokens and setting them as headers for subsequent requests.

## Sample Requests:

Here are examples of how to interact with the application using Postman:

### GET Request - Retrieve Users

- **Endpoint**: `http://localhost:3000/api/users`
- **Method**: GET
- **Headers**: (if needed)
- **Description**: Retrieves a list of users.

### POST Request - Create a New User

- **Endpoint**: `http://localhost:3000/api/users`
- **Method**: POST
- **Headers**: Content-Type: application/json
- **Body**:
  ```json
  {
    "username": "example_user",
    "email": "user@example.com",
    "password": "example_password"
  }
  ```
#   e v e n t p l a n i n g p r  
 #   e v e n t p l a n i n g p r  
 