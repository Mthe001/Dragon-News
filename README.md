# Dragoon News 🚀

**Dragoon News** is a responsive front-end web application built with React that delivers real-time news articles on a variety of topics. It includes **user authentication** for personalized access and provides seamless browsing across devices. The app ensures a smooth user experience, powered by modern web technologies and **Firebase Authentication** for secure login functionality.
for nothing it is for only js developer 

Let's build the project together. 😎
!!</>

---

## Table of Contentss 📑

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)
- [Layout Documentation](#layout-documentation)
- [How to Run the Project](#how-to-run-the-project)
- [Contributors](#contributors)

---

## Features ✨

- **Real-time News**: Get up-to-date news articles from various categories.
- **User Authentication**: Secure login and signup with Firebase Authentication.
- **Responsive Design**: Works seamlessly across all devices (mobile, tablet, desktop).
- **Category Filtering**: View articles from different categories like technology, sports, etc.
- **News Details**: Read full articles with detailed information.
- **User Personalization**: Customized experience after logging in.

---

## Technologies Used ⚙️

- **React**: For building the front-end user interface.
- **Firebase Authentication**: For secure user sign-up, login, and authentication.
- **CSS3 & Bootstrap**: For styling and responsive design.
- **React Router**: For navigation between different pages.
- **Programming Hero News API**: For fetching news articles and categories.

---

## API Documentation 📡

The Dragoon News project utilizes the **Programming Hero News API** to fetch news categories, articles by category, and detailed news information. Below are the endpoints used in this project.

### Base URL 🌐

The base URL for the API is:  
`https://openapi.programming-hero.com/api`

---

### Endpoints 📝

#### 1. **Get All News Categories**

- **URL**: `/news/categories`
- **Full URL**: `https://openapi.programming-hero.com/api/news/categories`
- **Method**: GET
- **Description**: Retrieves a list of all available news categories.

#### 2. **Get All News in a Category**

- **URL Format**: `/news/category/{category_id}`
- **Full URL Example**: `https://openapi.programming-hero.com/api/news/category/01`
- **Method**: GET
- **Description**: Retrieves all news articles within a specified category.

**Path Parameter**:
- `category_id` (string): The unique ID of the category.

#### 3. **Get News Detail by ID**

- **URL Format**: `/news/{news_id}`
- **Full URL Example**: `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
- **Method**: GET
- **Description**: Retrieves detailed information about a specific news article.

**Path Parameter**:
- `news_id` (string): The unique ID of the news article.

---

## Layout Documentation 🖥️

There are **three main layouts** for the Dragoon News app. Below are the layout structures with design descriptions:

### 1. **Home Layout** 🏠

The Home Layout displays an overview of the app, including the list of news categories and featured articles. Users can click on categories to view related articles.

*Design Description:*
- News Categories in a grid or list view.
- Featured articles with thumbnail images and brief descriptions.

**Home Layout Example Image:**

![Home Layout](https://github.com/ProgrammingHero1/dragon-news-resources/blob/main/design/home-layout.png)

---

### 2. **News-Details Layout** 📰

The News-Details Layout provides full access to a specific article, displaying detailed information, including the title, content, source, and publication date.

*Design Description:*
- Title and content of the news article.
- A clear call to action for sharing or bookmarking the article.

**News Details Layout Example Image:**

![News Details Layout](https://github.com/ProgrammingHero1/dragon-news-resources/blob/main/design/news-details-layout.png)

---

### 3. **Auth Layout** 🔒

The Auth Layout manages user authentication with login and signup forms. The user will be redirected to the Home Layout after successful authentication.

*Design Description:*
- Forms for login and signup.
- Authentication options (e.g., Google sign-in, email/password login).

**Auth Layout Example Image:**

![Auth Layout](https://github.com/ProgrammingHero1/dragon-news-resources/blob/main/design/auth-layout-login.png)
![Auth Layout](https://github.com/ProgrammingHero1/dragon-news-resources/blob/main/design/auth-layout-register.png)
---

## How to Run the Project 🚀

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps

1. **Clone the Repository**:

```bash
git clone https://github.com/yourusername/dragoon-news.git
