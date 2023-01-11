# portfolio-starter-kit

**STEP 1:** Fork this directory (only one person of each group! this will be your team's base repository)

**STEP 2:** Clone the forked directory so that each gets her copy in local

**STEP 3:** Then each one must create a new local working branch with "git branch <branch-name>" (we don't work directly on the master/main branch!) and use the checkout command to change to that new branch and start working there.

```sh
git branch <branch-name>
git checkout <branch-name>
```

**STEP 4:** Break design into user stories, brainstorm to create tasks, prioritize on Jira, create your first sprint, decide who is working on what and start working each on her assigned section. You could divide work among you by bigger sections (table, form, timeline) or by smaller tasks.

- you don't need to edit the common styles.css and navigation.css files, create a new css file for each section of the web (for example table.css, timeline.css, contactform.css)
- rememeber to do commits of your work once in a while so that you can later go back to previous versions if needed. You can use your terminal and commands "git add ." and "git commit -m <some message>") or even better do it directly through VSCode!

```sh
git add .
git commit -m <some message>
```

**STEP 5:** You can also "push" your branch on Github, so that the others can have a look! For this you need to use:

```sh
git push --set-upstream origin <your branch name>
```

if it is the first time you make a push, or simply:

```sh
git push
```

for all subsequent times.

**✨ NOTE:** You don't need to push every change you do online, only once you have something that you really wanna show/share to the rest of the team. But you do need to make commits locally often! This will help you get back and "undo" changes if you make some error or you simply wanna look how some previous version was.

**STEP 6:** Once everyone is finished and happy with her part, we would need to merge the sub-branches with the base one (main) so that we have one index.html with all sections completed. This part is a bit more complex since we were all working in the same index.html file and will for sure create some conflicts. We will solve that once the time comes... (Pull requests)
