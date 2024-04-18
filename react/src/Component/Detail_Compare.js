import React,{useEffect,useState} from "react";
import ReactApexChart from "react-apexcharts"; 
const DetailCompare = (props) => {
    const {today} = props;
    const [useSum,setUseSum] = useState([]);
    const [preSum,setPreSum] = useState([]);
    const config = {
        series: [{
            name : "Measure_Sum",
            type : "column",
            data : useSum
        },{
            name : "Predict_Sum",
            type : 'scatter',
            data : preSum
        }],
        options:{
            plotOptions:{
                bar:{
                    columnWidth:"50%"
                }
            },
            stroke:{
                width:[0,4]
            },
            title: {
                text: '전력수요 그래프'
            },
            dataLabels:{
                enabled : false,
                enabledOnSeries : [1]
            },
            marker :{
                size:6
            },
            labels:["YesterDay","Today"],
            xaxis:{title:{text:"Day"}},
            yaxis:[{
                title:{
                    text:"Measure",
                },
            },
            {
                opposite:true,
                title:{
                    text:"Predict"
                }
            }]
        }
    }
    useEffect(()=>{
        if (Object.keys(today).length !== 0){
            const list_m = [];
            const list_p = []; 
            list_p.push(today.y_preSum);
            list_p.push(today.t_preSum);
            list_m.push(today.y_useSum);
            list_m.push(today.t_useSum);
            setUseSum(list_m);
            setPreSum(list_p);
        }
    },[today])
    useEffect(()=>{

    },[useSum,preSum])
    return (
        <div>
            <h3>Detail Today</h3>
            <ReactApexChart options={config.options} series={config.series} type="scatter" height={350}/>
        </div>
    )
}
export default DetailCompare;