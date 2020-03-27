import React, { useState, useEffect } from "react";
import axioswithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    axioswithAuth().get('/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getColors()
  }, [])

  return (
    <>
      <ColorList getColors={getColors} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
