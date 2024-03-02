import profilePic from './assets/brook.webp'

function Card(){
    return(
        <div className="card">
            <img className="imahe" src={profilePic}></img>
            <h2 className='card-title'>Shannon Keanu A. Yase</h2>
            <p className='card-text'>shannonkeanu1@gmail.com</p>
        </div>
    );
}

export default Card