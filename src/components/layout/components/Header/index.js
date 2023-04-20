import clsx from 'clsx';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <h2>Header</h2>
            </div>
        </div>
    );
}

export default Header;
