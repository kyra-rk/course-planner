<bold> What is Columbia Course Campus? </bold>

## Inspiration

As computer science majors, we are all too familiar with the struggle of deciding which courses to take next to fulfill our major requirements in a way that fits into our schedule and also piques our interests. Especially with Columbia’s seemingly infinite course offerings and changing requirements, it’s very confusing to shift between different Quick Guide PDFs, information on Columbia Bulletin, VERGIL, and the CU Directory. We decided to use Hack to the Future to tackle this problem. 

## What it does

Columbia Course Compass is a user-friendly UI that allows students to easily track their degree progress. Upon logging on, you can select your college and major, track the courses you’ve taken, your remaining requirements, and even get personalized AI-generated recommendations of what to take next based on your history of courses. 

## How we built it

We first created an engaging UI mockup on Figma. We used various components and illustrations to show the layout and functionality of our final web app. You can find our Figma design here. After agreeing on our general layout and functions, we created a React-based website using the latest Next.js framework. We programmed in JavaScript, HTML, and CSS and pulled in data from .JSON files. All of our code can be seen on this GitHub repository. We used a combination of several different libraries to build a clean UI including MaterialUI and NextUI. We broke our program up into smaller, reusable components such as index.js (this was our landing/sign-up page), dashboard.js (this was the main dashboard where all classes are shown), and CourseButton.js (the single component representing a class). 

To integrate our AI-powered recommendation engine, we used the Cohere LLM and some prompt engineering. We passed in the classes that the user has taken along with the other class elective options to a prompt that asks the LLM to identify keywords in the classes taken and recommend classes from the remaining classes that are similar to the classes taken. This allows users to get personalized suggestions based on their interests.

## Challenges we ran into

Because of OpenAI’s rate limit and expiration, we were unable to use OpenAI’s API. Instead we opted for another powerful LLM, Cohere. We were used to integrating LLM APIs in Python, but to make it consistent and easier to integrate within the rest of our React.js application, we had to learn how to do API integration in JavaScript. Additionally, we ran into issues with storing our user data. We attempted to store it in local JSON files, global state variables, but ultimately decided to use the browser’s local storage class. Overall, these challenges allowed us to grow our software engineering skills and learn about different modules.

## Accomplishments that we're proud of

We are really proud that we were able to create a functioning and clean web application with React and a successful AI-integration to our project. We are very happy with our user design. It’s simple, clean, and convenient. We are also proud of our collaboration methods. We kept our working branches separate on GitHub and used good commenting and committing practice. 

While we came across several challenges along the way, we faced them all with a willingness to learn and a tenacious spirit. This was the first hackathon for two members of our team (half of our team!). Although there was a learning curve initially, we are so proud of how far we have come and everything we have achieved. We’ve connected with each other over the past 48 hours through excited brainstorming sessions and grating pair-debugging. 

## What we learned
We learned how to create the frontend and manage the backend using React.js. A few of us had to learn JavaScript, HTML, CSS from scratch. We learned how to create an API key and use it to prompt LLM engines. We learned how to manage packages and environments with GitHub. 

## What's next for Columbia Course Compass
In the future, we hope to:
Add all courses and majors offered at all 4 schools (CC, BC, SEAS, GS), so that everyone across all schools at Columbia can use our platform too. 
Automate web-scraping to capture all major/minor/concentration courses and information. 
Add progress bars / pie charts to our dashboard so users can see how much progress they have made with their major requirements.
Reduce hallucinations made by the Cohere LLM with more prompt engineering.
Create a course review forum for students to share and receive advice on courses to take. 
Connect to Vergil and extract classes from the transcript so that students don’t have to manually add their courses.

<bold>Environment Set Up</bold>
brew install tree
npm install -g npm@10.1.0
npm install -D tailwindcss postcss autoprefixer\n
npm install primereact\n
npm install next@latest react@latest react-dom@latest
npm install react-dropdown  --save
npm uninstall tailwindcss postcss autoprefixer\n
npm install tailwindcss@latest postcss@latest autoprefixer@latest
