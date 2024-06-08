import BoxList from "../components/BoxList";
import React from "react";
function NhatHandleBox(){
    const [boxes, setBoxes] = React.useState([
        { id: 0, color: '#ff0000', active: false },
        { id: 1, color: '#ffff00', active: false },
        { id: 2, color: '#00ffff', active: false },
        { id: 3, color: '#800080', active: false },
      ]);
      const handleToggle = (id) => {
        setBoxes((prevState) =>
          prevState.map((box) => {
            if (box.id === id) {
              return {...box, active:!box.active };
            }
            return box;
          }));
      }; 
      const getColor = (id) => {
    const activeBox = boxes.find((box) => box.active);
    return activeBox && activeBox.id === id? activeBox.color : activeBox?.color;

  };


    return (
        <div className="m-1">
            <ul className="flex flex-row ">
                {boxes.map((box) => (
                    
                    <BoxList
                        key={box.id}
                        number={box.id}
                        color={getColor(box.color)}
                        onClick={()=> handleToggle(box.id)}  
                    />
                                   
             ))}
        </ul>
    
        </div>
        
       
    )
}
export default NhatHandleBox;