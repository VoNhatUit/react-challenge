import AccordionItems from "../components/AccordionItems";
import PropTypes from 'prop-types';

export default function NhatHandleAccordion(){
    const data = [
        {   id: 0,
            title: 'CONSTRUCTION',
            content: "CONSTRUCTION content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {   id: 1,
            title: 'INTERNAL GAIN',
            content: "INTERNAL GAIN content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {   id: 2,
            title: 'AIRFLOW',
            content: "AIRFLOW content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {   id: 3,
            title: 'HEATING & COOLING',
            content: "HEATING & COOLING content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {   id: 4,
            title: 'LOCATION, CLIMATE & WEATHER',
            content: "LOCATION, CLIMATE & WEATHER: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ];

    return (
        <div className="md:flex">
            <div className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            {data.map((item, index) => (

                        <AccordionItems
                            key={index}
                            item={item}                         
                        />
                                                    
            ))}
            </div>

        </div>
    )
   
}
NhatHandleAccordion.propTypes = {
    text: PropTypes.string,
    restProps: PropTypes.shape({
      disable: PropTypes.bool,
      className: PropTypes.string
    }),
  }