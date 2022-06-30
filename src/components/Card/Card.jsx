import PropTypes from 'prop-types';
import s from './Card.module.css';

export default function Card({ title, children }) {
    return <div className={s.card}>
        <h2 className={s.title}> {title} </h2>
        {children}
    </div>
}

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}