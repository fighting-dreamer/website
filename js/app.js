const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");

const list = document.getElementById("list");

const input = document.getElementById("input");

/*
let list = []; // empty list of to-do items.
let id = 0;

list[0] -> {
                name = "Drink Cofee",
                id = 0,
                done = false,
                trash = false
           }

list[1] -> {
                name = "Workout",
                id = 1,
                done = true,
                trash = false
           }

*/

const CHECK = "fa-check-cicle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "linethrough";

// we add element to existing list : 
function addToDo(toDo, id, done, trash) {
    // if trash is true, then no need to run or do anything.
    if (trash) {
        return ; 
    }

    // we need to add the classname based on done or trash is true or false
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const text = `<li class="item"> 
                <i class="co fa ${DONE}" job="complete" id="${id}"></i>
                <p class="text ${LINE} "> ${todo} </p>
                <i class="de fa fa-trash-o" job="delete" id="${id}"></i>
             </li>`
    const position = "beforeend"
    list.insertAdjacentElement(position, text)
}

// when the user have added the to do, the enter key needs to be pressed, how to add that event here : 
document.addEventListener(keyup, function(event) {
    if (event.keyCode == 13) { // 13 is for pressing Enter key
        const todo = input.value; // we take the todo in the input field.
        // check  to add only-if the todo is not an empty string 
        if (todo) {
            addToDo(todo, id, false, false);
            list.push (
                {
                    name : todo,
                    id : id,
                    done: false,
                    trash: false
                }
            );
        }

        // set the input value back to empty 
        input.value = "";
        id++; // increment id
    }
})

// when someone press the radio-button.
function completeToDo(element) {
    elelemt.classList.toggle(CHECK);
    elelemt.classList.toggle(UNCHECK);

    // select the text of the element(radio-button)
    // when task completes, we strike-it-through.
    elelemt.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    // udpate the done property :
    list[element.id] = list[element.id].done ? false : true;
}

// when we delete the task : 
function deleteToDo(element) {
    // element here is the delete button
    // task entry is the element.parentNode
    // list is parent of task which will now need to be updated.

    task = element.parentNode
    list = task.parentNode
    list.removeChild(task);

    list[element.id].trash = true;
}

list.addEventListener("click", function(event) {
    let eleement = event.target;
    const elementJob = event.target.attributes.job.value; // it will be either delete of complete
    if (elementJob == "complete") {
        completeToDo(element)
    }else if (elementJob == "delete") {
        deleteToDo(eleement)
    }
})
