import React from "react";
function NhatHandleBox(){
    const defaultColor = [
      { id: 1, title: 'red', bgColor: 'red', baseColor: 'red' },
      { id: 2, title: 'yellow', bgColor: 'yellow', baseColor: 'yellow' },
      { id: 3, title: 'aqua', bgColor: 'aqua', baseColor: 'aqua' },
      { id: 4, title: 'purple', bgColor: 'purple', baseColor: 'purple' }
      ]
    const [currentColor, setCurrentColor] = React.useState('')
    const [colorBoxs, setColorBoxs] = React.useState(defaultColor)
   
    function changeColor(bgColor){
      // prevState = newBgColor
      setCurrentColor(prevState => prevState == bgColor ? '' : bgColor) 
    }

    React.useEffect(() =>{
      if(!currentColor) {
        setColorBoxs(defaultColor)
        return;
      }
      setColorBoxs(prevState => {
        return prevState.map(colorBox =>({
          ...colorBox,
          bgColor: currentColor
        }))
      })
          },[ currentColor])

    return (
        <div >
            <div className="boxColor ">
                {colorBoxs.map((box) => (
                    
                    <div
                        key={box.id}
                        style={{ backgroundColor: box.bgColor }}
                        onClick={() => changeColor(box.baseColor)}
                        >
                      {box.title}
                    </div>
                                   
             ))}
        </div>
    
        </div>
        
       
    )
}
export default NhatHandleBox;