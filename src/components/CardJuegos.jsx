import PropTypes from 'prop-types';

const CardJuegos = ({nombre}) => {
    return (
    <article className='border border-4 rounded-3 p-3'>
        <h2 className="text-center fw-bold mb-2">{nombre}</h2>
        <p className="m-0 text-center fs-5">
            <a href={`/${nombre.toLowerCase()}`}>Jugar</a>
        </p>
    </article>
    )
}

export default CardJuegos;

CardJuegos.propTypes = {
    nombre: PropTypes.string
};