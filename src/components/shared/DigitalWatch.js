'use client'
import React, { useState } from 'react';

const DigitalWatch = () => {
     let time = new Date().toLocaleTimeString();

     const [ctime, setCtime] = useState(time);

     const UpdateTime = () => {
          time = new Date().toLocaleTimeString()
          setCtime(time)
     }

     setInterval(UpdateTime, 1000)
     return (
          <div>
               <p>{ctime}</p>
          </div>
     );
};

export default DigitalWatch;