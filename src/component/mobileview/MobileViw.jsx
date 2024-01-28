import React, { useEffect, useState } from "react";
import Mobiledevice from "./Mobiledevice";

import Header from "../Navbar/Header";
export default function MobileViw() {
  const [mobile, setMobile] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setMobile(window.innerWidth);
      // Set the height in state as well as the width
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  console.log(mobile);
  return (
    <>
       <div>{mobile < 775 ? <Mobiledevice /> : <Header />}</div> 
    </>
  );
}
