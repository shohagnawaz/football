import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src="" alt="MSNS" />
            <div>
                <a href="/home">Home</a>
                <a href="/player">Player</a>
                <a href="/Details">Details</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;