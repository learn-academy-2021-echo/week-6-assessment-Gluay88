# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?


  Your answer: 
  I'll do this in order:
  - rails g migration Student add_foreign_key
  - AddForeignKey class and use add_column :student_id, :integer
  - rails db:migrate
  - foreigh key should be in Student model and has_many should be in Cohort


  Researched answer:
  To create the association between the Cohort and Student table we had to assign a foreign key to Student. The foreign key always goes on the belongs_to side. By convention the foreign key should always be the modelname_id (student_id) and the data type should be integer. The has_many model is singular, the belongs_to model is plural. A Cohort (singular) has_many students (plural). Like this example below
  belongs_to :author, :class_name => "User", :foreign_key => "author_id"


2. Which RESTful routes must always be passed params? Why?

  Your answer: 
  These RESTful routes: show, update and destroy, must always be passed in params. They has strick params to allow certain properties to be accessible. For example, we need to pass the id to be passed in order to delete the item we want to delete.
  

  Researched answer: 
  Parameters are a set of parameters attached to the end of the URL. Additionally, it helps to retrieve specific data and performs actions based on the inputs passed by the user. And show, update and destroy RESTful routes must always be passed params.


3. Name three rails generator commands. What is created by each?

  Your answer:
  - rails g model Animal name:string description:string
  Create a table animals and has two column name and decription
  -rails g resource
  Create a model, controller, rspec file, and restful routes for the app
  - rials g controller
  Create a controller for the app which is coordinates the interaction between the user, the views, and the model.


  Researched answer:
  rails g model Animal
  A Rails Model is a Ruby class that can add database records (think of whole rows in an Excel table), find particular data you're looking for, update that data, or remove data. These common operations are referred to by the acronym CRUD--Create, Remove, Update, Destroy.

  rials g controller
  RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications.

  rials g controller
  The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model. The controller is also a home to a number of important ancillary services.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students === index (to show all of students) students/index 

action: "POST"   route: /students === create (to creat a new student) stusdents/create
 
action: "GET"    route: /students/new === new (return an HTML form for creating a new students)

action: "GET"    route: /students/2 === show (to display specific student)

action: "GET"    route: /students/2/edit === edit (return an HTML form for editing a student)

action: "PATCH"  route: /students/2 === update (update a specific student)

action: "DELETE" route: /students/2 === destroy (delete a specific student)



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

Create a table to keep track of 10 users and their tasks:
I will have a table User and have a name, task, status, and deadline
- name (it will have their names)
- task (it will have name of their tasks)
- status -- (it will have the status of task "in progress" or "completed")
- deadline -- when is the deadline (it will have the deadline when we expect this project to be done)


