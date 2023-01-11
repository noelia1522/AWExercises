import _ from 'lodash';
import type {Task} from './interfaces';
import { addListItem } from "./addListItem";
import * as activity from './getActivities';
import { getQuotes } from './getQuotes';

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

const tasks: Task[] = [];

// const form1 =document.getElementById("new-task-form") as HTMLFormElement;

let result = await activity.getActivities();
console.log(result);
const activityItem = document.createElement("div");
activityItem.innerHTML = result.activity;
document.body.append(activityItem);


let quotes = await getQuotes("Thomas Edison");
console.log(quotes);




form?.addEventListener("submit", e =>{
  e.preventDefault(); //prevent any default thing that may happen here
  if(input?.value == null || input?.value == "") return;

  //check later- no error
  const newTask: Task ={
    id: "1234",
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask);
  console.log(tasks);

  const item = addListItem(newTask);
  console.log(item);

  list?.append(item);
})
