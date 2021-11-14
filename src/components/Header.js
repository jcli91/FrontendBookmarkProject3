import {Link} from 'react-router-dom'


const Header = (props) => {
    return (
        <nav className="nav">
                    <Link to ="/" id="textDec">
                        <h2 id="titleLink">myMark</h2>
                    </Link>
        </nav>
    )
}

export default Header