import React from 'react';
import { TrafficLightProvider, TrafficLight } from '../context/TrafficLightContext';
export default function HandleTrafficLight(){
    // const color = [
    //     { id: 1, title: 'red', bgColor: 'red', baseColor: 'red' },
    //     { id: 2, title: 'yellow', bgColor: 'yellow', baseColor: 'yellow' },
    //     { id: 3, title: 'green', bgColor: 'green', baseColor: 'green' },
    //     ]
   
    
                {/* <div className="traffic-light" style={{backgroundColor: "red",
                                                        borderRadius: '50px',
                                                        height: '50px',
                                                        width: '50px',

                                                        }}>
                    
                </div>

                <div className="traffic-light" style={{backgroundColor: "yellow",
                                                        borderRadius: '50px',
                                                        height: '50px',
                                                        width: '50px',}}>
                    
                </div>

                <div className="traffic-light" style={{backgroundColor: "green",
                                                        borderRadius: '50px',
                                                        height: '50px',
                                                        width: '50px',}}>
                    
                </div> */}
    return (
        <TrafficLightProvider>
            <TrafficLight />
        </TrafficLightProvider>
    )       
       
    
}