import type {Task} from './interfaces'

export function addListItem(task:Task) {

  const item = document.createElement('li');
  const label= document.createElement("label");
  const checkbox= document.createElement("input");

  checkbox.addEventListener("change", () =>{
    task.completed = checkbox.checked;
  })

  checkbox.checked = task.completed;
  checkbox.type = "checkbox";

  label.append(checkbox, task.title);
  item.append(label);
  return item;

}
