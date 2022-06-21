import './charInfo.scss';
import { useState, useEffect, useRef } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from "../skeleton/Skeleton";
import PropTypes from "prop-types";


const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar();
    },[props.charId]);



    const updateChar = () => {
        const {charId} = props;
        if(!charId){
            return;
        }
        onCharLoading();

        marvelService
            .getCharacter(charId)
            .then(onCharLoaded)
            .catch(onError);

    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const  onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);  
    } 
 
    const onError = () => {
        setLoading(false);
        setError(true);
    }
        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;
        
        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    
    
}


const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const isEmpty = ("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" === thumbnail);
    return(
        <>
            <div className="char__basics" >
            <img src={thumbnail} alt={name} style={isEmpty ? {objectFit: "contain"} : {objectFit: "cover"} }/>
            <div>
                <div className="char__info-name">{name}</div>
                <div className="char__btns">
                     <a href={homepage} className="button button__main">
                        <div className="inner">Homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
                </div>
             </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics" >Comics:</div>

            <ul className="char__comics-list" style={comics.length <= 0 ? {"height": 400} : {"height": "auto"}}>
            {
                    comics.length > 0 ? null :  <li>There is no Comics for this character {name} </li>
                }

                {
                
                    comics.map((item, i) => {
                        return(
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                            
                        )
                    }).slice(0, 10)
                }

            </ul>
    </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}



export default CharInfo;

