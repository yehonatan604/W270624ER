import { useEffect, useState } from "react";

const Now = () => {
  const [currentDate, setCurrenDate] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      setCurrenDate(new Date().toLocaleString());
    }, 1000);
    console.log("Now component rendered");
  }, []);

  //console.log("***************");

  return <>{currentDate}</>;
};

export default Now;
