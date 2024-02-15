
import React, { useEffect, useState } from 'react';

const DigitalWatch = () => {
     const [currentTime, setCurrentTime] = useState(new Date());

     useEffect(() => {
          const intervalId = setInterval(() => {
               setCurrentTime(new Date());
          }, 1000);

          return () => clearInterval(intervalId);
     }, []);

     const hours = currentTime.getHours().toString().padStart(2, '0');
     const minutes = currentTime.getMinutes().toString().padStart(2, '0');
     const seconds = currentTime.getSeconds().toString().padStart(2, '0');
     const date = currentTime.getDate().toString().padStart(2, '0');

     return (
          <div>
               <h1>{`Date${date} Hour:${hours} Minit:${minutes} Secend:${seconds}`}</h1>
               
          </div>
     );
};

export default DigitalWatch;