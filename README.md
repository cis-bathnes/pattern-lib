# BATHNES Toolkit

## Getting started

### Downloading the repo

Download the repo

If you clone a project with the toolkit submodule installed you will need to initialise the submodule with the following command:

`$ git submodule init`

This pulls down the files from the submodules.

To update the toolkit to the latest version you can use:

`$ git submodule update`

Or, if you're using Sourcetree, you can double click on the submenus to update them and make sure the files have been pulled down.

Source: https://github.com/alphagov/govuk_frontend_toolkit#using-git-submodules

### Starting the toolkit

In terminal, in the root:

`npm start`



### Updating the submodules

The 'git submodule update' command actually tells Git that you want your submodules to each check out the commit already specified in the index of the superproject. If you want to update your submodules to the latest commit available from their remote, you will need to do this directly in the submodules.

So in summary:

`git submodule add ssh://bla submodule_dir`
`git submodule init`

time passes, submodule upstream is updated
and you now want to update

change to the submodule directory
`cd submodule_dir`

checkout desired branch
`git checkout master`

update
`git pull`

get back to your project root
`cd ..`

now the submodules are in the state you want, so
`git commit -am "Pulled down update to submodule_dir"`

Or, if you're a busy person:

`git submodule foreach git pull origin master`

## About

Created by [fffunction](https://fffunction.co)

Uses on Fabricator: <http://fbrctr.github.io/>

[Read the docs →](http://fbrctr.github.io/docs)

## Purpose