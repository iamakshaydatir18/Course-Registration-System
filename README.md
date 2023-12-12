# Student Course Registration Webstie - CSYE6200 Final Project

Welcome to the Student Course Registration Website, a platform 
developed to streamline the course registration process for students. 
Leveraging  React for the frontend and Spring Boot to implement backend APIs, 
this project provides an efficient solution for students to manage their course selections. 
Users can log in, browse available courses, and add them to their personal bucket. 
Meanwhile, administrative users have the privilege to log in, add and delete courses, 
ensuring dynamic content management. All essential data, including student information and course registration 
details, is stored in two CSV files, namely CoursesList.csv and StudentList.csv.


## Implementations Used
1. Frontend: [React] 
2. Backend: [SpringBoot]
3. Databse: Data stored as csv files
4. Gradle: Build tool

## Project Setup

### Frontend Setup:


1. Install npm for frontend : install npm from https://nodejs.org/en/download

2. Install frontend dependencies : npm i


### Frontend Dependencies:

"axios": "^1.6.2",

"react": "^18.2.0",

"react-modal": "^3.16.1",

"react-router-dom": "^6.20.0",

"sass": "^1.69.5"


### Backend Setup:


3. Install Gradle for backend: https://gradle.org/install

4. invoke a declared version of Gradle: gradle wrapper

### Backend dependencies:

spring-boot-starter

spring-boot-starter-web

spring-boot-starter-test

gson:2.8.9


5. Build and start the application:

./gradlew clean build

./gradlew bootRUN


### Access the Application:

6. Navigate to http://localhost:8080 in any web browser.


## Project Implementation Overview
### Controllers
CourseController: Manages course-related requests, including retrieval, addition, and deletion.

StudentController: Handles student-related operations, such as retrieving information and managing registrations.

LoginController: Responsible for user authentication, verifying credentials, and granting access based on roles.

### Models
User Models (Abstract, User, Professor): Defines user entities, with abstract and role-specific attributes.

User Factories (Abstract, User, Professor): Implements factories for flexible user instantiation.

LoginCredentials Model: Represents user login credentials for authentication.

Course Model: Defines course entity attributes like code, title, professor, and availability.

### Services
DatabaseService Interface: Ensures a consistent interface for CSV-based data interaction.

Course Database Service: Manages course data with operations like reading, adding, and updating.

Registration Database Service: Handles student registrations using the DatabaseService interface.

Account Database Service: Manages user account information and roles via CSV interaction.

### Additional Components
AdminService: For administrative tasks, dependent on the completion of Course Database Service.


## Individual Contributions
1. Sangeet Saha(002246789): Full React setup, sass styling, Models, get requests
2. Anuj Sharma(002292431): CSV, databases services for CSV read and write, get requests
3. Daniil Serpukhov(001328035): Overall code skeleton, Gradle setup, Controllers, post requests
4. Abhishek Gopalakrishnan Unnithan(002839036): AdminServices, AdminController, AdminDB
5. Akshit Hasmukh Kumar Jain(002876444): AccountService, RegistrationService, Course Service, Course Controller

