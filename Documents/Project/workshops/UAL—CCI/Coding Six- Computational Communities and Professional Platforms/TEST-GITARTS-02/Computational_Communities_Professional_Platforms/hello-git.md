# GIT — intro exercise 🖥️ 🦄💜

Open you computer terminal;
Choose a location for this exercise to be saved. Once you have decided for a folder
> cd PATHWAY-TO-FOLDER

Initialize an existing directory as a Git repository:

> git init

You will get a message "Initialized empty Git repository in..."

Let check the status:

> git status 

So far we have made no changes in this directory yet. Lets add an image from the internet to your directory:

_if on mac / linux:_

> curl -O https://upload.wikimedia.org/wikipedia/commons/4/48/Piet_Program_Hello_World.gif

_or on windows:_

> wget https://upload.wikimedia.org/wikipedia/commons/4/48/Piet_Program_Hello_World.gif

To see a list of files within your current directory, type:

> ls

Lets check again the status:

> git status

We can now add and commit the changes:

> git add CHANGES

> git commit -m “[descriptive message]”

See all the Commits along with the changes done in each Commit:

> git log

> git log -p


Lets create a __new branch__:

> git branch NAME-YOUR-NEW-BRANCH

> git checkout YOUR-NEW-BRANCH

Create a new folder:

> mkdir NAME-OF-YOUR-NEW-FOLDER

To change your location to the new directory, type:

> cd YOUR-NEW-FOLDER

Create a README file:

> touch README.md

Open the file using a text editor, add a # Hello world! Save the changes.

Go back one directory or file:

> cd ../

> git status

If you want to add all changes type:

> git add -A 

At last commit your changes:

> git commit -m “[descriptive message]”

See all the branches created by typing :

> git branch -a

Let's see what happens when we change branch to master:

> git checkout master


Lets __merge__ the two brances:

> git merge YOUR-NEW-BRANCH

See if there are conflicts to solve;

You can delete your second branch by typing in: 

> git branch -d YOUR-NEW-BRANCH

 

## More info:

* [On viewing the history here.](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

* [GIT on w3schools](https://www.w3schools.com/git/default.asp?remote=github)

* [Git sheet cheat](https://education.github.com/git-cheat-sheet-education.pdf)

* [Command Line sheet cheat (linux)](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)

* [Command Line sheet cheat (windows)](https://cheatography.com/boogie/cheat-sheets/windows-command-line/)
