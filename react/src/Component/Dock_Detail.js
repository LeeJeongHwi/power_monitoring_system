import React, {useState,useEffect,useRef,useCallback} from "react";
import axios from "axios";
import DetailName from "./Detail_Name";
import DetailGraph from "./Detail_Graph";
import DetailToday from "./Detail_Today";
import DetailCompare from './Detail_Compare';
const DockDetail = (props) => {
    const {nowMarker} = props;
    const [measure,setMeasure] = useState([]);
    const [building,setBuilding] = useState({});
    const [sumData,setSumData] = useState({});
    const today = new Date();
    const day = "2017-"+(today.getMonth()+1)+"-"+today.getDate();
    const hour = today.getHours();
    useEffect(()=>{
        const me_Data = [];
        let building_name = "";
        let building_Detail = "";
        const todayData = [];
        const fetchall = async() => {
            const response = await axios.get("http://localhost:8080/load_measure",{
                params:{
                    id:nowMarker,
                    day:day,
                    hour:hour
                }
            });
            const response_t = await axios.post("http://localhost:8080/compare_lastday",{
                params:{
                    id:nowMarker,
                    day:day,
                    hour:hour
                }
            })
            if (response.data){
                await response.data.map((data)=>{
                    me_Data.push({
                        id : data[0],
                        hour : data[4],
                        measure : data[5],
                        predict : data[6]
                    })
                    if (building_name!=data[1]){
                        building_name=data[1]
                    }
                    if (building_Detail!=data[2]){
                        building_Detail=data[2]
                    }
                    
                })
           }
           if (response_t.data){
               await response_t.data.map((data)=>{
                   todayData.push({
                       id:data[0],
                       y_useSum : data[2],
                       y_preSum : data[3],
                       t_useSum : data[4],
                       t_preSum : data[5]
                   })
               })
           }
           setMeasure(me_Data);
           setBuilding({
               name:building_name,
               detail:building_Detail
           })
           setSumData(todayData[0]);
        }
        fetchall();
    },[nowMarker])
    
    return (
        <div id ="detail_box">
            <div id="buildingName">
                <h4>{day}-{hour}</h4>
                <DetailName building={building}/>
                <DetailGraph measure={measure}/>
                <DetailToday today={sumData}/>
                <DetailCompare today={sumData}/>
            </div>
        </div>
    )
}

export default DockDetail;