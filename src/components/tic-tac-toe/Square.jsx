import PropTypes from 'prop-types'
import './tic-tac-toe.css'
const Square = ({children, index, updateBoard}) => {


    return (
    <div className="board-cell" onClick={() => updateBoard(index)}>
        {children}
    </div>
    )
}

export default Square;

Square.propTypes = {
    children: PropTypes.node,
    updateBoard: PropTypes.func,
    index: PropTypes.number
};
