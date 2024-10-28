# Comments in JavaScipt

- Comments in JavaScipt are made basically just the same as most of the other programming langauges(if you have interacted with any in the past).

## One-Line Comments

- For a one line comment we have 2 types of comments.
  - Line Comment
  - In-Line Comment

    ### Line Comment
- In this tyoe of comment, we declared the whole line a comment. This is done using the syntax `//` at the beginning of the line.

    ```javascript
    //This a function that adds two numbers
    function add(a, b){
        return a + b;
    }
    ```

    ### In-Line Comment
- In this type of one-line comment we have two options, yet again. We might wanna declare whatever comes after a specific code snippet as a comment to the end of the line, then we will use the syntax we learnt earlier.

    ```javascript
    function add(a, b){
        return a + b;//this is the add logic
    }
    ```

- Otherwise, if our comment is going to be like a lable in our code, we'll need to apply a new syntax to the wrap the comment individually:

    ```javascript
    function add(a, b){
        return a /*first variable*/+ b;
    }
    ```

## Multiline Comments

- Commenting multiple lines, also vary.
- We could have 2 ways to express this.
  - Either:

```javascript
function modulo(a, b){
    /*return a + b;
    return a -b;
    return a / b;*/
    return a % b;
}
```

or : 

```javascript
function modulo(a, b){
    //return a + b;
    //return a -b;
    //return a / b;
    return a % b;
}
```

