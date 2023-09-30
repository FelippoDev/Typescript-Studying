User in typescript:
this is really interesting cause in python we dont declare the attribuites
for example:

```class User:
        def __init__(username, password):
            self.username = username
            self.password
```
In python we dont need to create a the attribuites inside the class, when we 
are in a method inside this class we can create thoses attribuits inside 
the same class, but that doesnt work for typescript

In typescript we need to create thoses attribuits for them, later, be created
in a constructor method or any method inside of this class.


We have the concept of public and private in TS, meaning that if there is 
a attribuit that u dont want to be shown u can declare this attribuit with
the keyword ``` private ``` then, every word declare with this keyword, it wont
be able to be shown in the code... if u dont declare an attribuit with keyword
of ``` private ``` then by default the keyword that will be used is ``` public ```
.

We also have the ``` private ``` functionallity in in javascript as well
but with a different approach... which is this: ```#<attribuit>```
so if you want to create a private attribuit u have to put an # concatened right
before the attribuit.