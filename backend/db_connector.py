## Class for performing database operations

import sqlite3
from datetime import datetime

class Connection:
    def __init__(self, db_path):
        self.conn = sqlite3.connect(db_path)

    def insert_author(self, author, articleText, ext):
        time_str = Connection.get_timestr()

        cursor = self.conn.cursor()
        query = """
                INSERT INTO ARTICLES
                (AUTHOR, ARTICLE, TIME_STR)
                VALUES
                (?, ?, ?);
                """

        bindings = (author, articleText, time_str)
        cursor.execute(query, bindings)
        self.conn.commit()
        rowid = cursor.lastrowid
        imageName = f"{rowid}{ext}"
        query = """
                UPDATE ARTICLES
                SET IMAGE_NAME = ?
                WHERE IMAGE_ID = ?
                """
        bindings = (imageName, rowid)
        cursor.execute(query, bindings)
        self.conn.commit()

        return rowid

    def get_content(self):
        cursor = self.conn.cursor()
        query = """
                SELECT * FROM ARTICLES
                ORDER BY IMAGE_ID DESC
                LIMIT 7;
                """
        res = cursor.execute(query)
        res = res.fetchall()
        content = []
        for tpl in res:
            content.append(list(tpl))
        
        return content
    

    @staticmethod
    def get_timestr():
        timestamp = datetime.now()
        time_str = timestamp.strftime("%B %d, %Y, %I:%M %p")
        
        return time_str

