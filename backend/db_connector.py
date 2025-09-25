## Class for performing database operations

import sqlite3
from datetime import datetime

class Connection:
    def __init__(self, db_path):
        self.conn = sqlite3.connect(db_path)

    def insert_author(self, author, articleText):
        time_str = Connection.get_timestr()

        cursor = self.conn.cursor()
        query = """
                INSERT INTO ARTICLES
                (AUTHOR, ARTICLE, TIME_STR)
                VALUES
                (?, ?, ?);
                """

        bindings = (author, articleText, time_str)
        print(cursor.execute(query, bindings))
        self.conn.commit()
        print("done")
    

    @staticmethod
    def get_timestr():
        timestamp = datetime.now()
        time_str = timestamp.strftime("%B %d, %Y, %I:%M %p")
        
        return time_str

