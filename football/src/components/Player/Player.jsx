import './Player.css';

const Player = (props) => {
    const {name, price, img, club} = props.player;

    return (
        <div className='player'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}M</p>
            <p>Club: {club}</p>
        </div>
    );
};

export default Player;