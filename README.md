NC News Frontend

This is the frontend of the NC News application, a news aggregation platform built with React. Users can view articles, vote on them, and comment on them. The frontend communicates with the backend to fetch data about articles, topics, comments, and more.
Features

    Article Listing: View a list of articles, sorted by date or vote count.
    Article Details: View detailed information about each article, including comments and vote count.
    Voting: Users can vote on articles to upvote or downvote.
    Commenting: Users can add comments to articles.
    Topics: Browse articles related to specific topics.
    User Context: Manage user information and avatar for displaying in the app.


Technologies Used

    React: A JavaScript library for building user interfaces.
    JavaScript: The core programming language used for the logic and functionality of the app.
    React Router: A library for handling routing and navigation in the React app.
    CSS: For styling the components and layout of the app.
    Axios (or Fetch API): Used in api.js to make HTTP requests to the backend API.
    Context API: For managing global state related to the user, provided via UserContext.js.
    HTML: For the basic structure of the web page.
    Node.js (Development environment): Used for local development and running the app.

api.js

The api.js file is responsible for making API calls to the backend to fetch articles, topics, comments, and more. It provides utility functions like:

    getArticles()
    getArticlesById()
    getTopics()
    getArticlesByTopic()
    getCommentsByArticleId()
    postComment()
    updateVotes()
    deleteComment()

These functions use Axios or Fetch API to interact with the backend and retrieve or manipulate data, enabling dynamic interactions within the frontend.

Project Structure

The frontend project is organized into the following structure:

nc-news-frontend/
│
├── public/                  # Public assets and index.html
│
├── src/                     # Main source code for the frontend
│   ├── components/          # React components
│   │   ├── ArticleCard.jsx          # Displays individual articles in a list
│   │   ├── ArticlePage.jsx         # Page for viewing individual article
│   │   ├── ArticlePageCard.jsx    # Displays article details in ArticlePage
│   │   ├── AddVote.jsx          # Handles voting on articles
│   │   ├── CommentCard.jsx      # Displays individual comments
│   │   ├── CommentForm.jsx      # Allows user to submit new comments
│   │   ├── Header.jsx          # Displays the app header with user info
│   │   ├── NavBar.jsx           # Navigation bar with links to pages
│   │   ├── NotFoundPage.jsx     # Page for displaying 404 errors
│   │   ├── TopicArticlePage.jsx   # Displays articles related to a specific topic
│   │   ├── TopicCard.jsx        # Displays topics with first article thumbnail
│   │   ├── TopicPage.jsx         # Page for listing all available topics
│   │   └── UserContext.jsx      # Manages user data across the app
│   │
│   ├── api.js                 # API functions for interacting with the backend
│   ├── App.jsx                 # Main app component containing routes
│   ├── Main.jsx                # Entry point for rendering App
│   ├── index.css               # Global styles for the app
│   └── index.js                # React entry point for mounting the app
│
├── package.json               # Project metadata and dependencies
└── README.md                  # This file

Component Tree

Here’s a visual representation of the component hierarchy in this application:

App
├── Header               // Displays site title and user info
├── NavBar               // Navigation bar with links
├── Routes
│   ├── / (ArticlesContainer)
│   │   ├── ArticleCard  // Displays articles in the list
│   ├── /articles/:article_id (ArticlePage)
│   │   ├── ArticlePageCard
│   │   ├── AddVote      // Allows users to vote on the article
│   │   ├── CommentForm  // Allows users to post comments
│   │   ├── CommentCard  // Displays individual comments
│   ├── /topics (TopicsPage)
│   │   ├── TopicsCard   // Displays each topic with its first article
│   ├── /topics/:topicSlug (TopicArticlePage)
│   │   ├── ArticleCard  // Displays articles related to a specific topic
│   └── * (NotFoundPage) // Displays when route is not found
└── UserContext (UserProvider wraps the entire app for user data management)

Explanation of Key Components

    App: The root component that contains the routing logic and the main structure of the app.
    Header: Displays the app name and user information (username and avatar).
    NavBar: Provides navigation links to various pages (Home, Topics).
    ArticlesContainer: Displays a list of articles.
    ArticlePage: Displays detailed information about an individual article, including comments and voting functionality.
    TopicPage: Displays a list of topics available in the system.
    TopicArticlePage: Displays articles related to a specific topic.
    AddVote: Allows users to vote on an article by clicking "upvote" or "downvote".
    CommentForm: Allows users to post new comments on articles.
    CommentCard: Displays individual comments on articles.
    NotFoundPage: Displays a message when a page is not found (404 error).
    UserContext: Manages the logged-in user’s data (username, avatar, etc.) using React Context.

API Integration

This frontend interacts with a backend API for the following functionalities:

    Get articles: Fetch articles from the backend.
    Get topics: Fetch topics to categorize articles.
    Post comments: Allow users to post comments on articles.
    Delete comments: Allows user to delete comments made by them.
    Update votes: Allow users to vote on articles.

The API functions are encapsulated in the api.js file.
