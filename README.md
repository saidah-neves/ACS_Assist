# ACS_Assist

You should already have a repository before you take he steps below,but if not, follow the steps on how to create a repository here:
https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository

From your repository name, click Clone or download
In this exercise you will clone the repository using HTTPS, so under "Clone with HTTPS", click on the clipboard to copy the URL

- Open you terminal on macOS/Linux
- Change your current directory to where you want to the cloned directory to be (i.e user/username/Desktop)
- Enter the following commands to clone the repository git clone,
- Paste the URL you copied in Step 2 above 
- Press Enter and your local clone will be created

Now you can run the script from command line.
- Make sure you are in the directory (cd to it) where the above files are
- Enter the following command: node .
- This should print “Hello World”
Note that in the index.js file’s the code on line 6 will grab all given command line arguments after the third. On line 9, it will print out Hello World, and any provided arguments
i.e. 

>> node . John
Hello World John

>> node . 1,2,3,4,5,6
Hello World 1,2,3,4,5,6
