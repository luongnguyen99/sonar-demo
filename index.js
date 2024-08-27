function exampleVarUsage() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
// Example 2: Using 'var' instead of 'let' or 'const'
function exampleVarUsage() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}

// Example 3: Nested function (SonarQube may flag this as a code smell)
function outerFunction() {
    function innerFunction() {
        console.log("Inner function");
    }
    innerFunction();
}

// Example 4: Duplicate code
function duplicateCode() {
    console.log("This is duplicate code");
    console.log("This is duplicate code");
}

// Example 5: Potential security vulnerability (eval is dangerous)
function evaluateCode(userInput) {
    eval(userInput); // Dangerous!
}

// Example 6: Empty catch block (ignoring errors)
try {
    var x = y + z;
} catch (error) {
    // Empty catch block
}

// Example 7: Hardcoded credentials
const username = "admin";
const password = "password123";

// Example 8: Unnecessary console logs in production code
console.log("Debugging log");
