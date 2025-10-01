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
````


no need to click on link just where server is hosted or smth.
If you add packages I mean you can freeze them into reqs (google will show) or just don't and I can install them.



# Hack Technology / Project Attempted


## What you built? 

We built a pickleball news website. There are two main pages. The first page is the "Write" page, where users can write their article/caption and also upload an associated image. The second page is a "Headlines" page, where users can see the 7 most recent articles, with their associated images. There is a navigation bar at the top, where users can navigate between the pages.

Here are images of the two pages:
[Headlines Page](HeadlinesPageImage.png)
[Write Page](WritePageImage.png)


Include some screenshots.
[How?](https://help.github.com/articles/about-readmes/#relative-links-and-image-paths-in-readme-files)

## Who Did What?

<u>Spencer:</u>
**Basic Set-Up**
Create frontend & backend directories. Set up React app (frontend directory).
Installing Node: https://nodejs.org/en/download

<u>Spencer:</u>
**Dummy Pages**
Simple dummy text on the main ‘Headlines’ page where you open the app. Non-functional link to route to main ‘Write’ page. Same for the write page.

<u>Spencer:</u>
**‘Routing’**
TSet up routing between pages (React Router DOM). Ensure clickability between pages.
https://www.geeksforgeeks.org/reactjs/reactjs-router/

<u>Spencer:</u>
**Post Author on Write Page; Corresponding Backend Endpoint** 
Set up endpoint to send ‘Author’ to backend thru Axios post request. Button sends it thru. Store it in sqlite table. Create separate class to instantiate DB connection.
Link is for Axios Post Request using ‘then’. IMO easier to make function async & use ‘await’. https://www.geeksforgeeks.org/reactjs/axios-in-react-a-guide-for-beginners/

<u>Carolina:</u>
**Post Article Text on Write Page; Corresponding Backend Endpoint**
Page contains a text area where you write text of your article; have char limit. Same ‘Send’ button as Author field. Utilize same endpoint to send to backend through axios post request. Create new method in DB connection class to or adjust current method to insert in DB. Final DB row should include ID, text, time posted, author.

<u>Spencer:</u>
**Image Post Functionality on Write Page; Backend Endpoint**
Upload image & endpoint to send to backend (don’t let post without uploaded image). Receive in backend, store in local ‘Images’ directory, with name {postID}.img.

<u>Spencer:</u>
**Headlines Page Endpoints**
Get request to retrieve the latest [7?] posts. Backend endpoint queries SQL table, creates dict {“1” : [author, text]}. Queries corresponding image IDs to send images to frontend: [image1, image2, ...]. Display images in correct order with corresponding metadata underneath (author, text).

<u>Carolina:</u>
**Overall Styling**
Index.html styled to have:
PickleNet displayed in text at the top of the page
‘Headlines’ and ‘Write’ both written out on the navbar to the right of ‘PickleNet’
have whichever page we’re on in bold
Some sort of coloring that looks good?

<u>Spencer:</u>
**Styling for Headlines**
Flexbox layout for headline page
Images inside of box, author & text content inside of box.
Assign dummy locations of images & text to proper locations
Make it look good
Flexboxes: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

<u>Carolina:</u>
**Styling for Write**
Canvas style upload image box 
Text insert: for author
Text insert: for post text content
submit button, which doesn’t work and is grey until all of ^those boxes have content


## What you learned / what didn't work

TODO: what worked / what didn't work

We learned a lot from this project:
- How to debug CSS issues (too much margin or padding on different components)
- How to host images from a flask backend so you don't have to send the photos from back to front through binary
- How to use SQLite databases, and pull certain information. We had to be creative, as you can't store images here, only image names.

It worked really well that we set out all the steps for the project in the beginning. We made a list of "tickets" that needed to get done and separated who was going to get what done. Nothing persay "didn't work," but I think in the future when we have more people, I think it would be helpful to list which tickets are dependent on one another because the tickets could be worked on out of order.

## What we would do if we had more time
If we had more time, we would host this on a server, so that the site could be used by more than just me and Spencer. It is a fun and funny site that would be fun toshare with friends!

## Authors

Carolina Harr; Spencer Reith

## Acknowledgments

Flexboxes: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Axios post request: https://www.geeksforgeeks.org/reactjs/axios-in-react-a-guide-for-beginners/

Installing Node: https://nodejs.org/en/download

Nav bar: https://www.sitepoint.com/creating-a-navbar-in-react/