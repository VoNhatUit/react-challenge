import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
const TrafficLightContext = React.createContext();

export const TrafficLightProvider = ({ children }) => {
    const [light, setLight] =  React.useState('green');

    React.useEffect(() => {
     
      const intervals = {
        green: 3000,
        yellow: 500,
        red: 4000,
        };
      const checkLight = () => {
      setLight((prevLight) => {
        if (prevLight === 'green') return 'yellow';
        if (prevLight === 'yellow') return 'red';
        if (prevLight === 'red') return 'green';
      });
    };
    const timer = setTimeout(checkLight, intervals[light]);

      return () => clearTimeout(timer);
    }, [light]);


    return (
      <TrafficLightContext.Provider value={{ light, setLight }}>
        {children}
      </TrafficLightContext.Provider>
    );
  };
  export const TrafficLight = () => {
    const { light } = useContext(TrafficLightContext);

        return (
            <div className="traffic_container">
              <div className="traffic-light-container traffic-light-container--vertical">
                <div className="traffic-light" style={{
                  borderRadius: '50px',
                  height: '50px',
                  width: '50px',
                  backgroundColor: light === 'red' ? 'red' : 'grey',
                  marginBottom: '10px',
                }}></div>
                <div className="traffic-light" style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: light === 'yellow' ? 'yellow' : 'grey',
                  marginBottom: '10px',
                  borderRadius: '50px'
                }}></div>
                <div className="traffic-light" style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: light === 'green' ? 'green' : 'grey',
                  borderRadius: '50px'
                }}></div>
              </div>           
              
            </div>
                )
}
TrafficLightProvider.propTypes = {
  children: PropTypes.object,
};