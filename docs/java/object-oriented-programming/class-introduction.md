---
sidebar_position: 1
---

# Introduction to Classes

> Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. A feature of objects is that an object's procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self"). In OOP, computer programs are designed by making them out of objects that interact with one another. OOP languages are diverse, but the most popular ones are class-based, meaning that objects are instances of classes, which also determine their types.

## What is a class?

A class is a template, a blueprint, a model, a description, or a definition of a behavior.
The class, alone, does not do anything, it just defines types of properties and methods that objects of this class will have.

Take a look at the example below:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
```

The class `Person` contains two fields (`name` and `age`) and two methods (`getName` and `getAge`). The class `Person` can be used to create many objects of type `Person`. Each object will have its own `name` and `age` values.

## What is an object?

Okay, we already mentioned a lot that "objects". Now, let's talk about what it means.
`An object is an instance of a class`. This means that the object is a concrete representation of the class, it implements the behavior defined by the class.

In the example we defined above, we have a class called `Person`. This class defines the behavior of a person, what props a person has, and what actions a person can do.

To create an object of type `Person`, we need to use the keyword `new`, it says to the JVM to allocate memory for the object and return a reference to its memory address. The `Person()` function is called a constructor, it is used to initialize the object. The constructor is called when the object is created. It can be used to set initial values for object attributes, in our example, we set the `name` and `age` of the person.

Take a look at the example below:

```java
Person person1 = new Person("John", 25);
Person person2 = new Person("Mary", 30);
```

In this example, we created two objects of type `Person`. The both objects have the same structure, but they have different values for their fields. They used the same class "template" to create themselves, but they are different objects, different references to different memory addresses, with different values inside.
