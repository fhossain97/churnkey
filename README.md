# Netflix Mock-up

## Introduction

Welcome to the Netflix Mock-up app! This app allows users to browse through various categories of movies from The Movie Database (TMDB) API. Here’s what you can do:

- **Home Page ("/")**: View movies in four categories: "Now Playing", "Popular", "Top Rated", and "Upcoming". Hover over a movie to see its summary.
- **Navigation Bar**: Navigate to the home page, account management settings, and the search page. The search page allows users to input a query and see the search results.
- **Account Management Page**: View account details and cancel your subscription via the churnkey cancel flow.

## Running the Code Locally

To run the project locally, follow these steps:

1. Install all dependencies:

   ```sh
   npm i

   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

The app will run at http://localhost:3000

Wireframe Images
Mockup of the initial project:

Home Page: Displays movies and contains a navigation bar. Home Page
Account Management Page: Shows account details and a cancel button. Account Management Page
Onboarding Changes
Documentation Enhancements
TypeScript Syntax and Types: Adding documentation with proper TypeScript syntax and types will simplify the implementation of logic.
Script Placement: Provide guidance on placing the script element in various frameworks. For example, in the T3 stack, the custom script was placed in \_app.tsx where the Script tag for Next.js does not go in the head.
Generate Secure HMAC Hash: Show the data shape for req.body before destructuring customerId. It's useful to understand the structure even when the customer is hardcoded.
Launch Churnkey: Split the code into server and client logic to avoid beginners adding everything in one file. Include proper typing for window.churnkey.init and declare a global type to resolve typing issues.
Testing the Cancel Flow: It would be helpful to see a real-time customer cancellation pop-up in Churnkey instead of having a pre-existing customer account. This is a nice-to-have feature for understanding the process better.
Notes
Scrolling Through Movies: For this project, only the first page of the API results is rendered.
Screenshots of the App
Home Page:
Account Management (Settings):
Search Page:
Cancel Flow Window Popup and Confirmation of Services Canceled:
Video
Check out the video demo of the project: Video Demo
