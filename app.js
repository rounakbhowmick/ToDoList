const addForm = document.querySelector('.add');
const searchtodo = document.querySelector('.search');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//Add new todo
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item">
                <i class="delete far fa-trash-alt "></i>
                <span>${todo}</span>
            </li>
            `;
    list.innerHTML += html;
};

addForm.addEventListener('click', e => {
    document.getElementById("addtodo").style.display = "block";
});
searchtodo.addEventListener('click', e => {
    document.getElementById("searchid").style.display = "block";
});



addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        document.getElementById("addtodo").style.display = "none";
        addForm.reset();
    } else {
        document.getElementById("addtodo").style.display = "none";
    }
});

//Delete
list.addEventListener('click', e => {
    //console.log(e.target);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

//Search
const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));


};

//Search
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});
//Date
const now = new Date();
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let day = days[ now.getDay() ];
let month = months[ now.getMonth() ];
let finall=day+",  "+now.getDate()+ " "+ month;
document.getElementById("date").innerText = finall;
