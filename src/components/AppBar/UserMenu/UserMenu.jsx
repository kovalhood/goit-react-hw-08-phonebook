import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import sprite from '../../../images/icons.svg';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return <div className={s.user_menu}>
        <svg className={s.icon} aria-label="user">
            <use href={`${sprite}#user1`}></use>
        </svg>
        <span className={s.user_name}> {name} </span>
        <button type='button' className={s.button} onClick={() => dispatch(authOperations.logOut())}>
            Log Out
        </button>
    </div>
}