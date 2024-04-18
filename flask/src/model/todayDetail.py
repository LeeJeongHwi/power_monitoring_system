from model.models import conn_mysqldb
# from model.DateConfig import change_Today,hour
class todayDetail():
    def __init__(self,id,yus,yps,tus,tps):
        self.id = id
        self.yus = yus
        self.yps = yps
        self.tus = tus
        self.tps = tps
    
    @staticmethod
    def get(id,date,hour):
        mysql_db = conn_mysqldb()
        db_cursor = mysql_db.cursor()
        sql = """
            select today.id, today.date,yesterday.use_Sum as lastday_Use, yesterday.pre_Sum as lastday_Pre, today.use_Sum as today_use, today.pre_Sum as today_Pre
            FROM (select MP.id,MP.date,MP.use_Sum,PP.pre_Sum FROM (select id,date,round(sum(measure_power),2) as use_Sum from measure_power where id = {id} and hour(time) < {hour} group by date having date = "{date}") as MP
            INNER JOIN (select id,date,round(sum(predict_power),2) as pre_Sum from predict_power where id = {id} group by date having date = "{date}") as PP ON MP.id = PP.id and MP.date= PP.date) as today
            INNER JOIN (select MP_y.id, MP_y.date, MP_y.use_Sum,PP_y.pre_Sum FROM (select id,date,round(sum(predict_power),2) as pre_Sum from predict_power where id = {id} group by date having date = DATE_SUB("{date}", INTERVAL 1 DAY)) as PP_y
            INNER JOIN (select id,date,round(sum(measure_power),2) as use_Sum from measure_power where id = {id} group by date having date = DATE_SUB("{date}", INTERVAL 1 DAY)) as MP_y ON MP_y.id = PP_y.id and MP_y.date = PP_y.date) as yesterday
            ON today.id = yesterday.id;
              """.format(id=id,date=date,hour=hour)
        db_cursor.execute(sql)
        datas = db_cursor.fetchall()
        print(datas)
        db_cursor.close()
        print(date,hour)
        if not datas:
            return None
        return datas