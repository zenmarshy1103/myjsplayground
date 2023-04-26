>> Javascript Overview

1. High Level: Does not have to managae resources asking memory from computer.

2. Garbage-collected: A algrathm automatically clean the memery 

3. Interpreted (Just in time compiled): computer understands 0 and 1 (JS engine automatically converes human code to machine code with 0 and 1s)

4. Multi-paradigm: An approach and mindset of structuring code, which will direct your coding style and technique.
    > 1) Procedural programming
    > 2) Object-Oriented Programming (OOp)
    > 3) Functional Programming (FP)

5. Prototype based object oriented: Almost everything in JS is object except string, primitive values.

6. First Class Function: Functions are treated as variables. We can pass them into other functions and return them from functions.

7. Dynamic: No data type definitions. Types becomes known at run time. And data type of variable is automatically changed if a value of different type is assigned ie:
>> let x = 23
>> let y = 10
>> x = "text" 
The type of the variable can be changed easily when we reasign variables

8. Single threaded: JS can only do one thing at the time

>> Concurrency Model - JS engine handles multiple tasks happening at the same time

9. Non Blocking event loop: Takes ling running tasks, executes them in the background and puts them back inthe main thread once they are finished

>> The Javascript Engine and Runtime

1. Javascript Engine: Program that execute JS code.
  >> Google Chrome V8 - JS and NODE

  >> JS engine contains:
     1. Call Stack: Where our code is executed using execution context

     2. Heap: Unstructured memory where objects are stored

    <Background-Info>
        >> Compilation: Entire code is convered into machine code at once, and written to a binary file that can be executed by a computer.

            [Source Code] -> Compilation Step -> [Portable File (Machine Code)] -> Execution Step -> [Program Running]

            Note: Execution step can happen way after compilation

        >> Integretation: Interpreter runs through the source code and executes it line by line.

            [Sorce Code] -> Execution Line by Line step -> [Program Running]

             Note: Code still needs to be converted to machine code

        >> Just in Time(JIT) Compilation: Entire code is converted into machine code at once then excuted immediately

            [Source Code] -> Compilation Step -> [Machine Code] -> Execution Step -> [Running Program]

            Note: There is no portabele file at the machine code stage and excution step happens immediately

    >> JS Enging 
       1. Parsing(reads) the code  
       2. During parsing the code is parsed into a data structure           (Abstract Syntax Tree (AST))
            >> Split up each line of code ie const let var and store into the tree in a structured way and checks if there are any syntax errors
        3. Compilation: Takes the AST and compile it to machine code
        4. Execution (loops execute -> optimisation -> compilation

    >> JS RUNTIME
       1. Includes the JS Engine
       2. WEb APIs  (DOM, Timers, Fetch API ... ) - Functionalities provided to the enging to access on window object
       3. Callback queue - ie callback event functions ie click, timer, data, ...
       4. Event Loop - Callback queue -> (JS ENGINE)Call Stack

       (NODE JS RUNTIME)
       1. Does not have web APIS but C++ bindings and thread tool

Execution Context (Environment where a piece of JS is executed. Stores all the necessary info for some code to be executed)
     >> Execution 
       1. Compilation -> creation of global execution context (Top level code) 
       -> Execution of top level code (insde global EC - Execution Contexxt) -> Execution of function and wait for callbacks, one execution context per function (For each function call a new EC is created)

    
    What is inside EC ( These are generated during creation phase right before execution)

    >> Variable Environment
        1. Let, const, var declaration
        2. functions
        3. arguments object (NOTE: Arrow functoins does not have this)
    
    >> Scope Chain

    >> this Keyward (NOTE: Arrow functoins does not have this)

CALL STACK
    >> Inside JS ENGINE. The Call Stack is piled up with the execution context in an order to keep track of where we are in the execution.
    The current execution is the top one in the call stack. When it reaches the return in the function the EC will be popped off then the next thing runs.

Scope and the Scope Chain

Executione Context (EC) contains:
    1. Variable Environment
    2. Scope Chain
    3. this Keyord

    >> Scoping: "Where do variables live?" or "Where can we accessa certain variable and where not" - How our programs variables are organised and accessed.

    >> Lexivcal Scoping - controlled by the placement of the functions and blocks in the codes

    >> Scope - Space or environment in which a certain variable is declared. There is Global Scope, Function Scope and block scope.
        1. Global Scope: 
           - Outside of any function or block
           - Variable declared are accessible everywhere

        2. Function Scope (Local Scope)
            - variables are accessible only inside function, not outside
            

        3. Block Scope (ES6)
            - Variables are accessible only inside block (ie if statment , for loop etc and blocks that needs { }, variable are only accessible between { }).
            - Only applies to let and const variables
            - Functions are also block scoped (only in strict mode)

    >> Scope of a variable - Region of our code whree a certain variable can be accessed.

    >> Scope Chain (Variables are looked up not down - ONLY parent scope can be used not child scope)
       - When a function is nested with function 1 and function 2 and there an a global variable. the inner function 2 (Child of function 1) can access its own variable and the variable set in function 1 and the variable in the gloval scope.
       - NOTE: Var varaibles are function scoped  

Hoisting and the Teporary Dead Zone(TDZ) - - - (Variable Environment)

    >>Executione Context:
        - 1. Variable Environment
        - 2. Scope Chain
        - 3. this Keyword

    Hoisting : Make some types of variable usable in the code before they are actually declared. 
    <Behind the Scene>
        - Before execution, code is scanned for variable declaratoin and for each variable, a new property is created in the variable environment object.


    >> TDZ 
        - 1. Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
        - 2. Make const variables actually work.

    >> Why Hoistering
        - 1. Using functions before actual declaration
        - 2. var hoisting is just a byproduct

    




        
        

        
 



