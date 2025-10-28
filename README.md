# PickleNet, Pickleball News Website
A community-sourced website presenting up-to-date pickleball news. Any visitor can write an article and share a photo about their corner of the pickleball world. Articles appear on the 'Newsfeed' pages ordered by recency of uploading.

## Demo

## Setting Up
**Frontend:**
* Navigate to *frontendPickleNet*
* Use npm to install nec. requirements
* Run frontend server
    ```
    npm run dev
    ```

**Backend:**
* Navigate to *backend*.
* Set up virtual environment & install requirements
    ```
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```
* Set up database
    * Create a file called 'main.db'
    * Run the following program to set up table w/ proper schema
    ```
    python db_init.py
    ```
* Run backend server
    ````
    flask run
    ````

## Authors
Spencer Reith; Carolina Harr