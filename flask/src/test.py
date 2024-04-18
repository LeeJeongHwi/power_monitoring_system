import mariadb
import sys
try :
    conn = mariadb.connect(
        user='root',
        password='dkimsmu',
        host='db',
        port=3306,
        database='testVersion'
    )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB PlatForm: {e}")
    sys.exit(1)

cur = conn.cursor()

cur.execute(
    "CREATE TABLE testTable (id varchar(255),age int);"
)