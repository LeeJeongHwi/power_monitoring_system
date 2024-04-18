from model.models import conn_mysqldb
# from model.DateConfig import change_Today,hour
class meausreInfo():
    def __init__(self,id,title,hour,power,types):
        self.id = id
        self.title = title
        self.hour = hour
        self.power = power
        self.types = types
    @staticmethod
    def get(id,date,hour):
        mysql_db = conn_mysqldb()
        db_cursor = mysql_db.cursor()
        sql = """
        select PP.id, B.name, B.detail_addr, PP.date, hour(PP.time), MP.measure_power, PP.predict_power FROM predict_power PP 
        INNER JOIN building B ON PP.id = B.id LEFT JOIN (select id,date,time,measure_power from measure_power where id = {id} and date = '{date}' and hour(time) < {hour}) as MP
        ON MP.id = PP.id AND MP.date = PP.date AND MP.time = PP.time WHERE PP.id = {id} and PP.date = '{date}'; 
        """.format(id=id,date=date,hour=hour)
        db_cursor.execute(sql)
        datas = db_cursor.fetchall()
        db_cursor.close()
        print(date,hour)
        print(sql)
        if not datas:
            return None
        return datas

