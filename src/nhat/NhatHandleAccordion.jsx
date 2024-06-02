import { useState } from "react";

export default function NhatHandleAccordion(){
    const [toggleIndex, setToggleIndex] = useState(false);

    const data = [
        {   id: 0,
            title: 'CONSTRUCTION',
            content: "CONSTRUCTION content",
        },
        {   id: 1,
            title: 'INTERNAL GAIN',
            content: "INTERNAL GAIN content",
        },
        {   id: 2,
            title: 'AIRFLOW',
            content: "AIRFLOW content",
        },
        {   id: 3,
            title: 'HEATING & COOLING',
            content: "HEATING & COOLING content",
        },
        {   id: 4,
            title: 'LOCATION, CLIMATE & WEATHER',
            content: "LOCATION, CLIMATE & WEATHER",
        },
      ];
    function handleToggle() {
        setToggleIndex(prevState => !prevState );
          }


    return (
        <div className="md:flex">
            <div className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            {data.map((item, index) => (
                   
                   <>
                   <div 
                        key={index}
                        className=" items-center px-4 py-3 rounded-lg w-full text-blue-800 bg-gray-50 text-black-800 hover:bg-gray-100  hover:text-gray-900 "
                        
                    >
                       <div key={item.id} className="accordion-title" onClick={() => handleToggle()}>
                            {item.title}
                        { toggleIndex ? (<div key={item.id} className="mt-5 text-left font-serif">
                                            {item.content}
                                        </div>) : null
                        }

                        </div>
                    </div>
                    

                   </>
                    
                                      
            ))}
            </div>

        </div>
    )
}