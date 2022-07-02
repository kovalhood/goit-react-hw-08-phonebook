import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { useState } from 'react';
import sprite from '../../../images/icons.svg';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const [dropdown, setDropdown] = useState(false);

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const email = useSelector(authSelectors.getUserEmail);

    const handleDropdown = () => {
        setDropdown(prevState => !prevState);
    }

    return <div className={s.user_menu}>
        <div className={s.user_info} onClick={handleDropdown}>
            <span className={s.user_name}> {name} </span>

            {dropdown ?
                <svg className={s.icon_up} aria-label="user">
                    <use href={`${sprite}#up`}></use>
                </svg>
                :
                <svg className={s.icon_down} aria-label="user">
                    <use href={`${sprite}#down`}></use>
                </svg>
            }
            
            <svg className={s.icon_user} aria-label="user">
                <use href={`${sprite}#user`}></use>
            </svg>
        </div>
        
        {dropdown &&
            <div className={s.dropdown}>
                <span className={s.user_mail}> {email} </span>

                <button type='button' className={s.button} onClick={() => dispatch(authOperations.logOut())}>
                    Log out
                </button>
            </div>
        }
    </div>
}