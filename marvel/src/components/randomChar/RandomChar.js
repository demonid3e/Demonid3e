import {Component} from "react";

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from "../../services/MarvelService.js"

class RandomChar extends Component {
    constructor (props) {
        super(props);
        this.updateCHar();
    }
    state = {
        char: {
        }
    }
        // using component creating a new class to test and passing responce into console
     marvelService = new MarvelService();

     onCharLoaded = (char) => {
        this.setState({char});

         if(char.description === ""){
            this.setState({char});

            ////// need to rework this bit 
            //maybe use a function that will be called after fetch
             const charCopy = {char};
             charCopy.char.description = "this is test text";
            this.setState({charCopy});
            console.log(charCopy);

         } else {
            this.setState({char});
            const anotherCopy = {char};
            const descrCopy = anotherCopy.char.description.slice(0, 100) + "...";
            this.setState({descrCopy});


         }
     }


    updateCHar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
        .getCharacter(id)
        .then(this.onCharLoaded)
        
    }


    render () {
        const {char: {name, description, thumbnail, homepage, wiki}} = this.state;
        return (
            <div className="randomchar">
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">{description}</p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    
    }
}

export default RandomChar;