---
sidebar_position: 1
---

# Introduction to Classes

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. A feature of objects is that an object's procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self"). In OOP, computer programs are designed by making them out of objects that interact with one another. OOP languages are diverse, but the most popular ones are class-based, meaning that objects are instances of classes, which also determine their types.

## What is a class?

A class is a blueprint for the object. A class can contain fields and methods to describe the behavior of an object. We can think about classes as a sketch (prototype) of a house. It contains all the details about the floors, doors, and windows. Based on these descriptions, we build the house. This is the same for objects. The class is like an empty form (prototype), which describes the behavior of an object.
Basically, a class can be defined as a template/blueprint that describes the behavior/state that the object of its type support.

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

The class `Person` contains to fields (`name` and `age`) and two methods (`getName` and `getAge`). The class `Person` can be used to create many objects of type `Person`. Each object will have its own `name` and `age` values.

## What is an object?

Okay, we already mentioned a lot that "objects". Now, let's talk about what it means.
`An object is an instance of a class`. This means that when a class is defined, no memory is allocated but when it is instantiated (i.e. an object is created) memory is allocated.

In the example we defined above, we have a class called `Person`. This class defines the behavior of a person, what props a person has, and what actions a person can do.

To create an object of type `Person`, we need to use the keyword `new`, it says to the JVM to allocate memory for the object and return a reference to its memory address. The `Person()` function is called a constructor, it is used to initialize the object. The constructor is called when the object is created. It can be used to set initial values for object attributes, in our example, we set the `name` and `age` of the person.

Take a look at the example below:

```java
Person person1 = new Person("John", 25);
Person person2 = new Person("Mary", 30);
```

In the example above, we created two objects of type `Person`. The first object is called `person1` and the second object is called `person2`. Each object has its own `name` and `age` values.
