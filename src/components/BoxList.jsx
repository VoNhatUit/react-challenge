import PropTypes from 'prop-types';

function BoxList({number, color, onClick}){
          
      return (
        
           <li 
                className="box-list px-20 py-5 m-4 w-8 rounded-md"
                style={{ backgroundColor: `${color}` }}
                onClick={onClick}
            >
                box #{number}
            </li>

        

        )
}

BoxList.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
  
export default BoxList;