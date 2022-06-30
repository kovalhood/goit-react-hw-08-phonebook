import Logo from './Logo';
import Navigation from 'components/AppBar/Navigation';
import s from './AppBar.module.css';

export default function AppBar() {
    return <header className={s.header}>
        <div className={s.navigation}>
            <Logo link={'/'} />
            <div className={s.menu}>
                <Navigation link={'/'} title={'Home'} />
                <Navigation link={'/register'} title={'Register'} />
                <Navigation link={'/login'} title={'Login'} />
                <Navigation link={'/contacts'} title={'Contacts'} />
            </div>
        </div>
    </header>
}