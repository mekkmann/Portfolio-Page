# Portfolio-Page

## Conventions
| No  | Task          | Actions                                           | Target                          | Example |
| :-: | ------------- | ------------------------------------------------- |-------------------------------- | ------------------------------------------------- |
| 1   | Create issue  |    Add, Create, Implement, Modify, Debug, Close   | Feature / Function / File name  | Implement History / Add Makefile/ Create s_to_l() |
| 2   | Create branch |    PERSONAL ID + Add/ Create/ Implement/ etc.     | Feature / Function / File name  |  007-Implement History / 005-Add Makefile         |
| 3   | Create commit | Description of choice + "Fixes #<number of issue>"|               N/A               |  "I have fixed this thing. Fixes #4"              |
	

## Contributor Details

| ID    | Name                                    |
| :-:   | --------------------------------------- |
| 099   | [Vlad](https://github.com/VladDrag)     |
| 017   | [Pontus](https://github.com/mekkmann)   |
| 815   | [Eirik](https://github.com/EiriksLys)   |
	
## General Instructions

### Create Branch
	##### GIT PULL MAIN BEFORE STARTING TO WORK, then move on with the below branch creation
	A: Branch Creation:
		```git branch [BRANCH_NAME]``` OR ```git checkout -b [BRANCH_NAME]```
	   Switch to branch:
		```git checkout [BRANCH_NAME]```
	   Pushing created Branch:
		```git push --set-upstream origin [BRANCH_NAME]```
	   Pull request:
		- via Github

	B: Move commit from overmind to new branch:
	   Create new branch:
		```git branch [BRANCH_NAME]``` OR ```git checkout -b [BRANCH_NAME]```
	   Reset *if need be*:
		```git reset --hard HEAD~[N]``` # Go back [N] commits. You *will* lose uncommitted work. [N] is a number.
	   Switch to branch:
		```git checkout [BRANCH_NAME]```

