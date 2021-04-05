# Bootstrap

## Overview

* Front-end framework for faster and easire web development
  * HTML and CSS based design templates for typography, buttons, forms, tables, navigation, modals, image carousels and many more
* Responsive design and mobile first approach

## Set-up

* Navigate into the directory of your project and run the following command:

  ```
  //download and install the dependencies in the node_modules
  $ npm install popper.js@latest jquery@latest bootstrap@latest --save
  
  // run the application (you can use npm start but I prefer using yarn)
  $ yarn start
  ```

## Responsive Design

* Adapting to the user's **viewport** so you can view the same website in different screen sizes and layout
* Mobile First Design
  * Looks at designing a website for a mobile device first and then increasing the content/details as the size of the sceen increases as well

### Foundations for Responsive Design

#### **Grid System**
  * This system can be applied using the **viewport** meta tag
    * Ensures the screen width is set to the device width and content is rendered appropriately
  * **Bootstrap Grid System**
    * https://getbootstrap.com/docs/4.6/layout/grid/
      ```
      <html>
      <head>
      ...
      <meta name="viewport" content="width=device=width,initial-scale=1, shrink-to-fit=no">
      </head>
      ...
      </html
      ```
    * Makes use of the **CSS Flexbox Layout** (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    * Bootstrap Grid Classes:
      |                     | Extra Small <576px                      | Small ≥576px                                      | Medium ≥768px                                     | Large ≥992px                                      | Extra Large ≥1200px                               |
      |---------------------|-----------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|
      | Grid Behaviour      | Horizontal at all times                 | Collapsed to start,  horizontal above breakpoints | Collapsed to start,  horizontal above breakpoints | Collapsed to start,  horizontal above breakpoints | Collapsed to start,  horizontal above breakpoints |
      | Max container width | None (auto)                             | 540px                                             | 720px                                             | 960px                                             | 1140px                                            |
      | Class Prefix        | .col-                                   | .col-sm-                                          | .col-md-                                          | .col-lg-                                          | .col-xl-                                          |
      | No. of Columns      | 12                                      | 12                                                | 12                                                | 12                                                | 12                                                |
      | Gutter Width        | 30px (15px on each  side of the column) | 30px (15px on each  side of the column)           | 30px (15px on each  side of the column)           | 30px (15px on each  side of the column)           | 30px (15px on each  side of the column)           |
      | Nestable            | Yes                                     | Yes                                               | Yes                                               | Yes                                               | Yes                                               |
      | Offsets             | Yes                                     | Yes                                               | Yes                                               | Yes                                               | Yes                                               |
      * The table above shows the default values of Bootstrap Grid division
      * Bootstrap divides the entire screen width range into 5 classes:
        1) `default` targets all screen sizes (i.e. extra small to extra large)
        2) `sm` for small
        3) `md` for medium
        4) `lg` for large
        5) `xl` for exta large screen sizes
    * Usage: `.col-*, .col-sm-*, .col-md-*, .col-lg-*`
      * the `*` can be replaced with 
        * a number to specify how much column size it will occupy; must total to 12
          * e.g. `<div class="col-sm-5></div><div class="col-sm-7"></div>` 
        * with nothing to divide the 12 columns into how many equal parts
          * e.g. `<div class="col-sm"></div><div class="col-sm"></div><div class="col-sm"></div>`
          * e.g. `<div class="col=sm"></div><div class="col-sm-6></div><div class="col-sm"></div>`
    * How it works: 
      * Apply a `container` class to the **outermost layer**
      * Inside this, the **content** is laid out in the form of `rows`
      * And each row can be subdivided into multiple **12 equal sized** `columns`
        ```
        <div class="container">
          <div class="row">
            < div class="column"></div>
          </div>
        </div>
        ```
* **Fluid Images**
  * Images in your website will automatically adapt to screen size
* **Media Queries**
  * CSS Technology to apply styles based on the size of the viewport
    * From CSS code, you can query the size of the media and adjust the CSS classes to fit the size of the screen
      ```
      // You can create one media query per width to support different viewports
      @media (min-width: 992px){
        .container {
          width: 960x;
          max-width: 100%;
        }
      }
      ```
  * Bootstrap does this...

#### Nav Bar and Breadcrumbs

* NavBar can be added as: 
  ```
  <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
       <div class="container">
           <!-- For mobile devices, add a Toggle button to show and hide the links of the navbar for small screens -->
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
               <span class="navbar-toggler-icon"></span>
           </button>
           <a class="navbar-brand" href="./index.html">Ristorante con Fusion</a>
           <!-- Show or hide this Navigation list depending on the device; show this for larger screens-->
           <div class="collapse navbar-collapse" id="Navbar">
               <ul class="navbar-nav mr-auto">
                   <li class="nav-item"><a href="./index.html" class="nav-link">Home</a></li>
                   <li class="nav-item active"><a href="#" class="nav-link">About</a></li>
                   <li class="nav-item"><a href="#" class="nav-link">Menu</a></li>
                   <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
               </ul>
           </div>
       </div>
   </nav>
  ```
* Breadcrumbs can be added as: 
  ```
  <!-- Adding the Breadcrumb -->
  <ol class="col-12 breadcrumb">
      <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
      <li class="breadcrumb-item active">About Us</li>
  </ol>
  ```

#### Icon Fonts

* Sets of symbols and glyphs used as regular fonts; more information (https://fontawesome.com/)
* There are many icon font packs available:
  * Font Awesome (most popular!!)
    * Usage:
      * Include the CSS files and font files into your project
      * You can then start adding:
        ```
        <i class="fa fa-phone"></i>
        ```
  * Bootstrap-social
    * Uses Bootstrap and Font Awesome icons to create buttons for social media sites
    * Usage:
      * Include the `bootstrap-social.class` into your project
      * You can then start using it
        ```
        <a class="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id=">
           <i class="fa fa-facebook"></i>
        </a
        ```
* Set-up:
  ```
  // fetch font-awesome classes
  $ npm install font-awesome@latest --save
  // install it into your project
  $ npm install bootstrap-social@latest --save
  ```
* Usage
  * You can either use `<span>` or `<i>` for this and mix the `bootstrap-social` with `font-awesome` classes
    ```
    <div class="col-12 col-sm-4 align-self-center">
        <div>
            <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i> Google+</a>
            <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i> Facebook</a>
            <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i> LinkedIn</a>
            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i> Twitter</a>
            <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i> YouTube</a>
            <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i>Mail</a>
        </div>
    </div>
    ```

#### Button Groups

* Usage
  ```
  <!-- Creating a button group and buttons -->
  <div class="btn-group" role="group">
      <!-- Create a call button to allow users to make a phone call -->
      <a role="button" class="btn btn-primary" href="tel:+12345678"><i class="fa fa-phone"></i> Call</a>
      <!-- This does not do much -->
      <a role="button" class="btn btn-info"><i class="fa fa-skype"></i> Skype</a>
      <!-- Create a call button to allow users to send and email -->
      <a role="button" class="btn btn-success" href="mailto:confusion@food.com"><i class="fa fa-envelope-o"></i> Email</a>
  </div>
  ```
