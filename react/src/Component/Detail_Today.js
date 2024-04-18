import React,{useEffect,useState} from "react";

const DetailToday = (props) => {
    const {today} = props;
    const divStyle = {
        backgroundColor : "#CEF6F5",
    }
    const styleList = {
        todayStyle : {
            paddingTop :"10px",
            paddingLeft:"90px"

        },
        detailStyle : {
            paddingLeft : "17px",
            paddingBottom : "12px"
        }
    }
    return (
        <div>
            <h3>Detail Today</h3>
            <div style={divStyle}>
                <h3 style={styleList.todayStyle}>현재 사용량 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{today.t_useSum}</h3>
                <h3 style={styleList.todayStyle}>오늘 예측량 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{today.t_preSum}</h3>
                <h3 style={styleList.todayStyle}>어제 사용량 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{today.y_useSum}</h3>
            </div>
        </div>
    )
}
export default DetailToday;