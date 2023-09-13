import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootballBall } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const {name, price, img, club} = props.player;
    const handleAddToPlayer = props.handleAddToPlayer;

    return (
        <div className='player'>
            <img src={img} alt="" />
            <div className='player-info'>
                <h4>Name: {name}</h4>
                <p>Price: ${price}M</p>
                <p>Club: {club}</p>
            </div>
            <button 
                onClick={() => handleAddToPlayer(props.player)} 
                className='btn-player'>
                Add to Player
                <FontAwesomeIcon icon={faFootballBall} />
            </button>
        </div>
    );
};

export default Player;