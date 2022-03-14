import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="www">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="www">Characters</a></li>
                    /
                    <li><a href="www">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;