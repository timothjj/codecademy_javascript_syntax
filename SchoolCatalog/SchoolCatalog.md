# School Catalogue
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

School
Properties: _name (string), _level (one of three strings: 'primary', 'middle', or 'high'), and _numberOfStudents (number)
Getters: all properties have getters
Setters: the _numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: _pickupPolicy (string)
Middle
Includes everything in the School class, but nothing additional
High
Includes everything in the School class, plus one additional property
Properties: _sportsTeams (array of strings)
If you’re looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

Tasks
0/19 complete
Mark the tasks as complete by checking them off
Create ParentSchool Class
1.
Let’s start by making a parent class for Primary, Middle, and High classes. Create an empty class named School.

2.
Inside the School class, create an empty constructor() that accepts three parameters. The names of these parameters should correspond to the properties listed in the objective.

3.
Inside the constructor(), set the School properties based on the arguments passed in.

4.
Create name, level, and numberOfStudents getter methods. Each getter should return the value saved to the corresponding property from the previous step.

5.
Create a numberOfStudents setter. The method should first check if the input (newNumberOfStudents) is a number.

If it is a number, then set the _numberOfStudents property. If not, log, 'Invalid input: numberOfStudents must be set to a Number.'

6.
Under your getters, create a method named quickFacts that logs the following string to the console:

SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.

Copy to Clipboard

In place of SCHOOL NAME, substitute the instance’s _name value. In place of NUMBER OF STUDENTS, substitute the instance’s _numberOfStudents value. In place of LEVEL, substitute the instance’s _level value.

Use the respective getter methods to access the underlying properties.

7.
Under .quickFacts(), create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings.

Inside the method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array. Use this number to access and return the substitute teacher at that randomly generated index.

Create PrimarySchool Class
8.
Next, we’ll build a PrimarySchool class that extends School. If you feel comfortable building the PrimarySchool class on your own, give it a shot. If not, use the steps below to help you along the way.

Whether you want to follow the steps or not, it’s important to note that the PrimarySchool class only has one additional property, _pickupPolicy.

Create an empty PrimarySchool class that extends School.

9.
Inside the PrimarySchool class, create a constructor() that accepts three arguments.

10.
Call super() on the first line of the PrimarySchool‘s constructor(). Pass it any arguments that the parent constructor() uses.

Since this is the PrimarySchool class, pass 'primary' as the argument for the level parameter in the parent constructor.

11.
Use the remaining argument to set the _pickupPolicy property.

12.
Since our PrimarySchool class inherits Schools‘s properties and getters, we only need to create one new getter in the PrimarySchool class. Add this getter to the PrimarySchool class. Each getter should return the value saved to its respective underlying property.

Create HighSchool Class
13.
In this task, you will create a HighSchool class that extends the School class. In addition to the properties, getters, and methods in School, the HighSchool includes the following:

Properties: _sportsTeams (array of strings)
Getters: A getter for the _sportsTeams array. The getter should log all of the sports to the console.
Take a look at the Hint for step-by-step instructions.

Instances of PrimarySchool and HighSchool
14.
Create a PrimarySchool instance with the following properties:

Name: 'Lorraine Hansbury'
Number of Students: 514
Pickup Policy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
Save the instance to a constant variable named lorraineHansbury.

15.
Call .quickFacts() on the lorraineHansbury instance.

16.
The principal of Lorraine Hansbury needs a substitute teacher for the day.

Call .pickSubstituteTeacher() on School, and pass the following array as an argument:

['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

Copy to Clipboard

17.
Create a HighSchool instance with the following properties:

Name: 'Al E. Smith'
Number of Students: 415
Sports Teams: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
Save the instance to a constant variable named alSmith.

18.
Using the sportsTeams getter, retrieve the value saved to the _sportsTeams property in alSmith.

19.
Nice work! If you’ve made it this far, you have a strong understanding of class syntax and inheritance.

If you would like to continue working on this project, we have listed some avenues to build on your progress.

Create a middle school class
Add more properties to each class (_averageTestScores, _schoolOverview, etc.)
Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.