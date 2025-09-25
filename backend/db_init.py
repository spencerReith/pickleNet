## Initialize Database w Proper Schema
import sqlite3


def init():
    conn = sqlite3.connect('main.db')
    cursor = conn.cursor()
    query0 = "DROP TABLE IF EXISTS ARTICLES"
    query1 = """
            CREATE TABLE ARTICLES (
                AUTHOR TEXT,
                TIME_STR TEXT
                )
            """
    cursor.execute(query0)
    cursor.execute(query1)

init()