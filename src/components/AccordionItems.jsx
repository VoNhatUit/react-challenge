import React from 'react';
import PropTypes from 'prop-types';

function AccordionItems({ item}){
    const [isToggle, setIsToggle] = React.useState(false);
    function handleToggle() {
        setIsToggle(prevState => !prevState );
          }

    return (
        <>
                    <div 
                        className=" items-center px-4 py-3 rounded-lg w-full text-blue-800 bg-gray-50 text-black-800 hover:bg-gray-100  hover:text-gray-900 "
                        
                    >
                       <div key={item.id} className="accordion-title" onClick={() => handleToggle()}>
                            {item.title}
                        { isToggle ? (<div key={item.id} className="mt-5 text-base text-left font-serif">
                                            {item.content}
                                        </div>) : null
                        }
                        </div>
                    </div>    
        </>
    )
}


  AccordionItems.propTypes = {
    item: PropTypes.object,
  };
  
  export default AccordionItems;