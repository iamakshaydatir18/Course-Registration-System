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

##Project Setup
1. Install npm - for frontend build
2. Install Gradle - for 


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
Sangeet Saha(002246789): Full React setup, sass styling, Models, get requests
Anuj Sharma(): CSV, databases services for CSV read and write, get requests
Daniil Serpukhov(): Overall code skeleton, Gradle setup, Controllers, post requests

