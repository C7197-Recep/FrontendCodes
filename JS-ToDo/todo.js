let todo_input=document.getElementById("todo");
let add_button=document.getElementById("add");
let list_div_area=document.getElementById("list-div");
let feedback_area=document.getElementById("feedback");
var todo_array=[""];
var done_array=["fdasf", "dfassfd"];

try{
    todo_array=JSON.parse(localStorage.getItem("todo-list"));
    done_array=JSON.parse(localStorage.getItem("done-list"));
}catch (error){
    alert(error);
}

function add_to_list(){
    let new_todo=todo_input.value;
    todo_array.push(new_todo);
    localStorage.setItem("todo-list",JSON.stringify(todo_array));
    show_list();
}

function show_list(){
    list_div_area.innerHTML="";
    todo_array=JSON.parse(localStorage.getItem("todo-list")) || [];
    done_array=JSON.parse(localStorage.getItem("done-list")) || [];
    todo_array.forEach(pass_to_list_div);
    done_array.forEach(check_done);
}

function done(elem, item){
    elem.className="done";
    done_array.push(item);
    localStorage.setItem("done-list",JSON.stringify(done_array));
}

function pass_to_list_div(item, index){
    item=item||"";
    let div=document.createElement("div");
    div.setAttribute("class","todo-item-div");
    div.setAttribute("ondblclick", "done(this,'"+ item.split(" ").join("-") +"')");
    div.setAttribute("id",item.split(" ").join("-") );
    let p = document.createElement("p");
    p.innerText=item;
    let span=document.createElement("span");
    let i=document.createElement("i");
    i.setAttribute("class", "fa fa-trash");
    i.setAttribute("onclick", "remove('"+item.split(" ").join("-")+"')")
    span.appendChild(i);
    div.appendChild(p);
    div.appendChild(span);
    list_div_area.appendChild(div);
}

function check_done(item, index){
    item=item||"";
    document.getElementById(item).className="done";
}

function remove(item){
   todo_array.remove(item);
   done_array.remove(item);
    localStorage.setItem("todo-list",JSON.stringify(todo_array));
    localStorage.setItem("done-list",JSON.stringify(done_array));
    show_list();
}

function clear_all(){
    localStorage.removeItem("todo-list");
    localStorage.removeItem("done-list");
    todo_array=[];
    done_array=[];
    show_list();
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
show_list();