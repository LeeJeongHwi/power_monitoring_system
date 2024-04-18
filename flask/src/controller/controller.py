from flask import Flask,Blueprint,render_template,jsonify,redirect,url_for,request,make_response,request
from model.mapinfo import mapinfo
from model.measureInfo import meausreInfo
from model.todayDetail import todayDetail
main_view = Blueprint('mains',__name__)

@main_view.route("/load-map", methods=['POST','GET'])
def load_map():
    if request.method == 'POST':
        data = request.get_json()
        if data == None:
            print(request.headers)
        map_info = mapinfo.get()
        return jsonify(map_info)

@main_view.route("/load-measure",methods=['POST',"GET"])
def load_info():
    if request.method == "GET":
        data = request.args.get("id")
        day = request.args.get("day")
        hour = request.args.get("hour")
        if data == None:
            print(request.headers)
        meausre_info = meausreInfo.get(data,day,hour)
        return jsonify(meausre_info)

@main_view.route("/compare-ytday",methods=["POST"])
def compare_lastday():
    if request.method=="POST":
        data = request.get_json()
        if data == None:
            print(request.headers)
        todayInfo = todayDetail.get(data['params']["id"],data["params"]["day"],data["params"]["hour"])
        return jsonify(todayInfo)