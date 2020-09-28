# ACS_Assist
You will need [Node.js](https://nodejs.org/en/download/) installed

You should also already have a repository before you take the steps below, but if not, follow the steps on how to create a repository here: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository

## Using the ACS_Assist.git Project
To run this ACS_Assist.git project as a command line tool you should Clone it first. To clone take the following steps:

From the directory where you want to save/clone the project type:
`git clone https://github.com/saidah-neves/ACS_Assist.git`

This will download the project to a folder named ACS_Assist.git (this Git repository). If you however want a different folder name, simply specify it as the last parameter like this:
`git clone https://github.com/saidah-neves/ACS_Assist.git YourFolderNameHere`

Press Enter to create your local clone

You can type `git status` followed by hitting Enter to see all the files

**NOTE:** 
Send me an email at saidah_neves@us.ibm.com for the API Key so that you can add it to the `.env` file you copied locally

In addition, you will need to provide the file you want to Add. This can be done on the code line:
`file: fs.createReadStream('./YourFileHere.html'),`
where `./YourFileHere.html `is the file that will be analyzed
You can also send me an email or ping me for a file sample

**Now you can run the script from command line.**
From your Terminal on macOS/Linux make sure you are in the directory (cd to it if not) where you saved/cloned the files from the ACS_Assist repo (i.e. where the AddDocs.js file is saved)

From there simply type the following command line, which will run the code:
`AddDocs`
