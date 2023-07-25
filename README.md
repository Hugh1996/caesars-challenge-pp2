# Caesars Challenge: A Roman History Quiz

Caesars Challenge is an engaging quiz centered around the history of the Roman Empire.

This quiz caters to users with varying levels of knowledge about ancient Rome, making it suitable for both enthusiasts and those simply seeking to learn more about its history.

![Responsiveness](/documentation/rep.jpg)

# User Experience (UX)

## User Stories

- First Time User Goals

  - As a first time user, I want a brief introduction available that explains how to navigate and take the quiz, so I can quickly understand how it works.

  - As a first time user, I want an intuitive inteface to be able to start the quiz without any confusion.

  - As a first time user, I want the questions to cover a broad range of topics related to the Roman Empire, providing me with a comprehensive quiz experience.

- Returning User Goals

  - As a returning user, I want the quiz to contain new and different questions each time I return, ensuring the experience remains fresh and challenging.

  - As a returning user, I want to be able to start the quiz without having to view an introduction, as I am already familiar with how the quiz works.

- Frequent User Goals

  - As a frequent user, I want a wide pool of questions, to prevent encountering the same questions too often.

## Design

- ### Color Scheme

  - Red was chosen as the main color throughout the site due its historical signficance as the main color of the Roman army, symbolizing their god of war, Mars. The colors association with war and battle aligns well with the context of the website, given that its a quiz based on a historically violent empire.

  - Additionally, red being an attractive, attention-grabbing color is also an important consideration to catch the users eye, particularly for the central quiz container.

  - The use of black text to contrast with the dominant red color, ensures the text is easily readable for the user.

  - All buttons have a white background. White was chosen due to its clean aesthethic while ensuring they stand out against the red background and black text, to maintain readability.

  - Each button has a hover effect to transform from white into Roman imperial purple. This continues with the theme of historical accuracy throughout the site. The cursor also changes to a sword when hovering over the button. These both help to reinforce the interacivity of the bottons.

- ### Typography

  - The Libre Bodoni font is the main font used throughout the website, chosen for its elegant style. There is a fallback of Sans Serif, should the font not be imported correctly.

## Features

- ### Main Image

  - The main background image will be one of the first things the user sees. It portrarys a roman centurion in the midst of chaos and battle.

  - The image's coloring follows the main color theme throughout the site, maintaing a visually appealing experience for the user.

- ### Main Page

  - Centered in the main page is a container where users will interact with the site. The title of the page is displayed first, providing information about the site's name and purpose.

  - Below the title, there is an input field where users must enter their username. Once entered, the username will be stored, and users won't need to input it again. The user's final score will be displayed along with their username.

  - The user can start the quiz by selecting the 'Start Quiz' button.

  - Additionally, there is a question mark icon displayed at the bottom right of the container. Clicking on it will show a list of instructions explaining how the quiz works.

  - In the bottom left of the container, there is a volume icon that provides users with the option to play Roman-themed audio. The audio is not set to automatically play, ensuring that users have the choice to engage with it at their discretion, rather than being forced into it.

![Main Page](/documentation/mainpage.jpg)

- ### Quiz Page

  - Once the user selects 'Start Quiz', they are presented with a question and four options. The user must select one of the four options as their answer.

  - During the quiz, the user will be informed about their progress by displaying the current question number at the top of the container.

  - The quiz consists of five questions in total. These questions are chosen randomly from a pool of twelve possible questions to prevent repetitiveness should the user attempts the quiz again.

  - If the user selects the correct answer, its border will be highlighted in green as feedback for the user to confirm their answer was correct. Additionally, the user's score will be increased by 20 points for each correct answer, and the total score will be displayed at the bottom of the container.

  - If the user selects an incorrect answer, the border of the chosen option will be highlighted in red, providing feedback to confirm that the answer selected is incorrect. Additionally, the correct answer will be briefly displayed just below the four possible options, allowing the user to see the right answer.

![Quiz Page](/documentation//quests.jpg)

- ### Instructions

  - If the user selects the question mark icon on the main page, an unordered list will be displayed that instructs the user on the functionality of the quiz.

  - Additionally, below the isntructions is a 'Back' button the user can select to return to the main page.

![About Page](/documentation/rules.jpg)

- ### Final Score

  - Once the user has answered all questions, there final score will be displayed alongside their selected username.

  - Depending on the users result, one of three different messages will appear.

  - This page also consists of two buttons below the results. The first 'Play Again' button will allow the user to immediately start the quiz again and the 'Exit' button will return the user to the main page, where they may change their username or view the instructions again.

![End Page](/documentation/endscores.jpg)

- ### Features left to implement

  - The addition of a ten second timer that counts down. If the user answers correctly in this timeframe, bonus points are awarded.

  - The addition of a High Score page, where the user can return to and view their previous scores, comparing their results. 

## Testing

### Validator Testing

- HTML

  - The [W3C Markup Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fhugh1996.github.io%2Fcaesars-challenge-pp2%2F) service was used to validate to ensure no errors occurred.

- CSS

  - The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fhugh1996.github.io%2Fcaesars-challenge-pp2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) service was used to validate to ensure no errors occurred.

- JavaScript

  - The [JSHint JavaScript Validator](https://jshint.com/) service was used to validate to ensure no errors occurred.

  - The following metrics were returned on JSHint.
  - There are 11 functions in this file.
  - Function with the largest signature take 1 arguments, while the median is 0.
  - Largest function has 32 statements in it, while the median is 5.
  - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

  I also confirmed the colors and font are easy to read and accessible using lighthouse in devtools.

  ![Lighthouse](/documentation/light.jpg)

### Testing User Stories from User Experience (UX)

- ### User Stories

- #### First Time Users

- As a first time user, I want a brief introduction available that explains how to navigate and take the quiz, so I can quickly understand how it works.

  - The title Caesars Challenge: The Roman Empire Quiz alerts the user the main purpose of the site.

  - The user can select the question mark icon on the bottom that will lead them to a page, explaining how the quiz functions.

- As a first time user, I want an intuitive inteface to be able to start the quiz without any confusion.

  - The quiz container is centrally displayed on the screen, with no header or footer, or any other containers to distract from the center piece.

  - The 'Start Quiz' button is enlarged and centred in the container so the user can easily see and know exactly what to select to begin the quiz, after inputting their username.

- As a first time user, I want the questions to cover a broad range of topics related to the Roman Empire, providing me with a comprehensive quiz experience.

  - The questions vary from the very founding of the city of Rome to the late Empire with some general Roman trivia, ensuring the user gets the full learning experience throughout its history.

- #### Returning Users

- As a returning user, I want my previous username stored.

  - The username is stored in local storage and will automatically populate when the user returns.

  - Once a user saves their username before starting the quiz

- As a returning visitor, I want the quiz to contain new and different questions each time I return, ensuring the experience remains fresh and challenging.

  - The user is asked a total of five questions which are generated at random from a pool of twelve questions. This ensure the returning user will not have the exact same experience each time it is played.

- As a returning visitor, I want to be able to start the quiz without having to view an introduction, as I am already familiar with how the quiz works.

  - While the user can view an introduction by selecting the question mark icon, it is not necessary to view before starting the quiz.

- #### Frequent Users

- As a frequent user, I want a wide pool of questions, to prevent encountering the same questions too often.

  - The user is asked a total of five questions which are generated at random from a pool of twelve questions. This ensure the returning user will not have the exact same experience each time it is played.

- ### Further Testing

  - I tested this page works in different browsers: Google Chrome, Microsoft Edge and on different devices e.g. Laptops, phones both Android and Apple .

  - I confirmed the project is responsive on all standard screen sizes using Google Chrome dev tools and [Am I Responsive](https://ui.dev/amiresponsive).

  - Friends and family confirmed the site color scheme and font style works well together. They alos confirmed the quiz as well structured and fun to utilize.

  - I confirmed the username saves in local storage. 

  - I confirmed all buttons work.

  - I confirmed the question count and scores increment correctly.

  - I confirmed the final score and message shows correctly. 

### Bugs

- When reviewing the quiz on an Apple phone, browser on that phone had automatically set the font color to blue, which has been rectified.

- Initally I was unable to input a favicon for my website. I discovered this was due to the file being named as .png as opposed to .ico.

- The audio initially worked on my preview but not the live site. I discovered this was due to the spacing in the file name which I rectified.

## Deployment

- The site was deployed using GitHub Pages. To deploy, follow the below steps;

- In the repository, click on 'Settings'.

- Scroll down on the left hand side and select 'Pages'.

- Here will you will find a link to the live webpage.

- View the live website here - [Caesars Challenge](https://hugh1996.github.io/caesars-challenge-pp2/).

## Technologies Used

- ### Languages

  - HTML5
  - CSS3
  - JavaScript

- ### Libraries and Programs

  - Google Fonts
  - Git
  - Github
  - Codeanywhere

## Credits

- ### Content

  - Quiz questions inspiration were taken from [Britannica](https://www.britannica.com/) and [Beano](https://www.beano.com/).

- ### Media

  - The main background image was taken from [Wallpaper Cave](https://wallpapercave.com/).

  - The cursor image used on hover effects was taken from [Cursors-4U](https://www.cursors-4u.com).

  - The question mark and volume icons were taken from [Font Awesome](https://fontawesome.com/).

  - The favicon image was taken from [Clipart](https://clipart-library.com/) and converted from a png to ico using a [Favicon Generator](https://favicon.io/favicon-converter/).

  - The audio file was taken from [Youtube](https://www.youtube.com/), which cost the cheap price of €1. It was then converted from a video file into an audio file.
