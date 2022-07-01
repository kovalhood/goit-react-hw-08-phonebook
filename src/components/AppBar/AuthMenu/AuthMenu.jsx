import Navigation from '../Navigation';
import s from './AuthMenu.module.css';

export default function AuthMenu() {
    return <>
        <Navigation link={'/register'} title={'Register'} />
        <Navigation link={'/login'} title={'Login'} />
    </>
}