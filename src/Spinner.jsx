import './Spinner.scss';

function Spinner () {
    const name = "Smogg";
    return (
        <div className="spinner">
            <button className="spinner__minus">-</button>
            <input type="number" className="spinner__input"/>
            <button className="spinner__sum">+</button>
        </div>
    )
}

export default Spinner;