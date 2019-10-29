import React from 'react'
import { PropTypes } from 'prop-types'

const MoveList = (props) => {
    return (
        <div>
            <ul>{props.moveList}</ul>
            <ul>
                <li>Move Power: <strong>{!props.movePower ? <span>No Power</span> : props.movePower}</strong></li>
                <li>Move PP: <strong>{!props.movePP ? <span>No PP</span> : props.movePP}</strong></li>
                <li>Move Accuracy: <strong>{!props.moveAccuracy ? <span>No Accuracy</span> : props.moveAccuracy}</strong></li>
            </ul>
        </div>
    )
}

MoveList.propTypes = {
    moveList: PropTypes.array,
    movePower: PropTypes.number,
    moveAccuracy: PropTypes.number
}

export default MoveList