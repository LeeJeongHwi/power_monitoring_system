/*global kakao*/
import React, { useEffect, useState } from "react";
import Map_Data from "./Component/Map_Data";
export default function App() {
  const [visible, setVisible] = useState(true);
  const h1Style = {
    paddingTop:"5px",
    paddingBottom:"5px"
  }
  return (
    <div id="wrap">
      <h1 style={h1Style}>Power_Map</h1>
      {visible && (
        <>          
          <Map_Data/>
        </>
      )}
    </div>
  );
}
