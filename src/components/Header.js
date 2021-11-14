import {Link} from 'react-router-dom'


const Header = (props) => {
    return (
        <nav className="nav is-flex is-justify-content-center 
">
                    <Link to ="/" id="textDec">
                        <h2 id="titleLink" >myMark</h2>
                    </Link>
        </nav>
    )
}

export default Header