import clsx from 'clsx';
import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <div className={clsx(styles.wrapper)}>
            <h2>Sidebar</h2>
        </div>
    );
}

export default Sidebar;
