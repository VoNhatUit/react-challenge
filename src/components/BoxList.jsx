import PropTypes from 'prop-types';

function BoxList({box, changeBgColor}){
          
      return (
        
                <div
                style={{ backgroundColor: box.bgColor }}
                onClick={() => changeBgColor(box.baseColor)}
                >
                  {box.title}
                </div>
        

        )
}

BoxList.propTypes = {
  box: PropTypes.object,
  changeBgColor: PropTypes.func,
};
  
export default BoxList;