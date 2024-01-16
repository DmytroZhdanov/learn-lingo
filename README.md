[![Netlify Status](https://api.netlify.com/api/v1/badges/55d6b2f5-9626-4fd4-9df5-2529f2fd3f88/deploy-status)](https://app.netlify.com/sites/learn-lingo/deploys)

# LearnLingo 🧑‍💻

Design - [Learn-Lingo Figma](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=4%3A142&mode=dev)  
Technical Specification - [English](https://docs.google.com/document/d/12npdw_x8UupKA88UWZneRYZCO4MdFiuhjAe_jI0dDhs/edit?usp=sharing) / [Ukrainian](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit?usp=sharing)

## Table of content

- [Routing](#routing)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
  <!-- - [API](#api) -->
- [Redux State](#redux-state)
- [Troubleshooting and FAQs](#troubleshooting-and-FAQs)

## Routing

The app uses React Router for navigation. The available routes are:

- `/` - Home Page

<img width="1470" alt="Знімок екрана 2024-01-16 о 10 14 56" src="https://github.com/DmytroZhdanov/learn-lingo/assets/119117057/9e8746f8-1b44-4b73-86c8-0021ae3d0582">

- `/teachers` - Teachers Page

There is a filter on Teachers page for specifying your preferences.

You can add or remove the advert to/from favorite list which displayed on Favorite page. (**This functionality is available only to authorized users**)

By clicking on "Read more" button you can discover more information about the teacher including reviews.

By clicking on "Book trial lesson" button you can fill the form with required info for your choosen teacher. 

<img width="1470" alt="Знімок екрана 2024-01-16 о 10 17 31" src="https://github.com/DmytroZhdanov/learn-lingo/assets/119117057/474a5093-9856-4694-8dc5-d0b39de751cc">

- `/favorites` - Favorites Page (**This functionality is available only to authorized users**)

Your favorite list is saved when you reload the page for convenient usage.

<img width="1470" alt="Знімок екрана 2024-01-16 о 10 20 44" src="https://github.com/DmytroZhdanov/learn-lingo/assets/119117057/13fcf640-ffd3-47bb-9ae4-f3614445ed63">

If a user tries to access a non-existent route, they will be redirected to the home page.

## Features

Implemented responsiveness and mobile menu for better UI.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DmytroZhdanov/learn-lingo.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser (Note: the port may be
   changed if 5173 port is occupied by another website).
6. To stop your local server enter in CLI: `control` + `C` for Mac or `CNTRL` + `C` for Windows.


<!-- Or if you want to use Docker, follow these steps (Note: You must have installed Docker app on your
computer):

1. Open CLI and enter the command:
   ```bash
   docker run -d --rm -p 5173:[port] --name car-rent dmytrozhdanov/car-rent
   ```
3. Open [http://localhost:[port]](http://localhost:[port]) in your browser.
4. To stop your local server enter in CLI:
   ```bash
   docker stop car-rent
   ```
   It will automatically delete the container.
  
   Replace `[port]` with desired port. You may replace it with the same `5173` port if it's not
   occupied currently by another website. -->

## Technologies Used

- React
- TypeScript
- Redux
- RTK Query
- React Router
- Axios (for API requests)
- Firebase (for authentication and realtime database)
<!-- - Docker -->

<!-- ## API

The application uses a mock API created with [Mockapi.io](https://mockapi.io/). The `adverts`
resource contains information about car listings. -->

## Redux State

The Redux store manages the state of the application, including user favorites and user data.

## Troubleshooting and FAQs

<dmytro.zhdanov97@gmail.com>
