import React,{useEffect,useState} from "react";
const DetailName = (props) => {
    const {building} = props;
    useEffect(()=>{
        if (Object.keys(building).length!=0){
            console.log("DetailName Mount");
            console.log(building)
        }
    },[building])
    const divStyle = {
        backgroundColor : "#EFFBF2",
    }
    const styleList = {
        nameStyle : {
            paddingTop :"8px",
            paddingLeft:"20px"
        },
        detailStyle : {
            paddingLeft : "17px",
            paddingBottom : "12px"
        }
    }
    return (
        <div style={divStyle}>
            <h1 style={styleList.nameStyle}>{building.name}</h1>
            <h5 style={styleList.detailStyle}>{building.detail}</h5>
        </div>
    )
}
export default DetailName;