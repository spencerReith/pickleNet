[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/uB4PX0S_)

# How to Use
**Set Up Frontend:** Navigate to frontendPickleNet. Ensure nec requirements installed. Only need to do this once. Ensure you are in frontendPickleNet (not sub directory) while doing this. See *npm_reqs.txt* for specifics.

then run
```
npm run dev
```
click link to open frontend server

**Set Up Backend:** Navigate to backend dir.
Set up virtual environment
```
## create environment w name venv. Only need to do this once.
python3 -m venv venv

## enter environment
source venv/bin/activate

## install nec. packages frozen in requirements.txt (distinct from self-made npm requirements doc in frontend)
pip install -r requirements.txt
```

To instantite database
```
## Create a file called 'main.db' in the top level of your backend directory.
## Then, need to create table w proper schema
## In your terminal navigate to backend directory. Ensure inside virtual environment. Then:
python db_init.py
## this just runs a function I made to instantiate db table
## now you're good to run the server
```

## to run backend server
````
flask run
```


no need to click on link just where server is hosted or smth.
If you add packages I mean you can freeze them into reqs (google will show) or just don't and I can install them.




# Hack Technology / Project Attempted


## What you built? 

TODO: Short description of what you attempted to build

Include some screenshots.
[How?](https://help.github.com/articles/about-readmes/#relative-links-and-image-paths-in-readme-files)

## Who Did What?

TODO: who worked on what part?

## What you learned

TODO: what worked / what didn't work

## Authors

TODO: list of authors

## Acknowledgments

TODO: cite any tutorials followed here
