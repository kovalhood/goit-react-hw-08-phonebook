import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Navigation from '../Navigation';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return <div className={s.user_menu}>
        <span className={s.user_name}> Welcome, {name} </span>
        <button type='button' className={s.button} onClick={() => dispatch(authOperations.logOut())}>
            Log Out
        </button>
    </div>
}