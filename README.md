# To-do List
###### More practice with Webpack, forms, and sorting

![](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/toDoList.gif)

## Links
[Try To-do List here!](https://tylphe.github.io/to-do-list/)

[Link to the assignment](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list)

## Features
- Clicking the colored tabs at the top filter tasks by color
- Overdue tasks are highlighted in red
- Today's tasks have the date removed to easily differentiate what needs to be completed
- Form has a minimum requirement of description, date/time, priority, and tag color
- Uses localStorage to save user tasks

## About
To do lists are a staple in beginning tutorials becuase they can be very simple but also leave room for improvement and extra features. The layout of the to-do items is supposed to resemble file folders.

## Challenges
### Date and time
I learned that setting a default date and time is very tricky. When the app is first loaded, the form will automatically enter the current date and time. This is a feature I wanted to add to save the user the work of constantly entering a date and time.

I dont think this is a pretty solution but it works:

```
  currentTime: () => {
    const currentYear = new Date().getFullYear();
    let currentMonth;
    if (new Date().getMonth() + 1 < 10) {
      currentMonth = `0${new Date().getMonth() + 1}`;
    } else {
      currentMonth = new Date().getMonth() + 1;
    }

    let currentDate;
    if (new Date().getDate() < 10) {
      currentDate = `0${new Date().getDate()}`;
    } else {
      currentDate = new Date().getDate();
    }

    let currentHour;
    if (new Date().getHours() === 0) {
      currentHour = '12';
    } else if (new Date().getHours() < 10) {
      currentHour = `0${new Date().getHours()}`;
    } else {
      currentHour = new Date().getHours();
    }

    let currentMinute;
    if (new Date().getMinutes() < 10) {
      currentMinute = `0${new Date().getMinutes()}`;
    } else {
      currentMinute = new Date().getMinutes();
    }

    return `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:${currentMinute}`;
```

I had a lot of edge cases to consider when writing this function. The input type is `datetime-local`, which requires a very specific format you will see in the `return` line.

Rendering the time to the to-do table was also a lot more coding than I thought! I added features, which converts the 24-hour format to 12. Also depending on the time, I would mark it as red for overdue or remove the date to only show time.

## How to handle editing
In this project, I handled editing by removing the item from the to-do list, and populating all the data back into the form, here the user is expected to change the values they want and resubmit the form. I added a blinking animation to the div to help the user see what is happening since it suddenly removes the user's task from the table the moment they click edit.

As a former instructional designer who creates training material for professionals, I know that when I design an app like this, users will get lost. I would love to watch people use my app to see where the confusing parts are.

The big bug with this app is if the user clicks the edit button of multiple tasks, it will overwrite what is currently on the form. I would need to add some code where it would prevent editing until at least the description field is blank.
