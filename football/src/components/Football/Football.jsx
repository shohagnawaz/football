import { useEffect, useState } from 'react';
import './Football.css';
import Player from '../Player/Player';

const Football = () => {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className='football-container'>
            <div className='player-container'>
                {
                    players.map(player => <Player
                        key = {player.id}
                        player = {player}
                    ></Player>)
                }
            </div>
            <div className='review-container'>
                <h4>Review</h4>
            </div>        
        </div>
    );
};

export default Football;