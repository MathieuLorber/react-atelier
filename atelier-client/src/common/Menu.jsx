import * as React from 'react';
import {Link} from 'react-router';
import * as styles from './Menu.scss';
import {i18n} from '../i18n';

export default class Menu extends React.Component {

    render() {
        return <aside className={'main-sidebar ' + styles.menu}>
            <section className="sidebar">
                <div className={styles.titleBloc}>
                    <div className={styles.title}>{i18n('Menu.ApplicationTitle')}</div>
                    <ul className="sidebar-menu">
                        <li>
                            <Link to={'/home'} className={styles.homeLink} activeClassName={styles.active}>
                                <i className="fa fa-home" /> {i18n('Menu.Home')}
                                <i className={'fa fa-angle-right ' + styles.arrow} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to={'/histogram'} activeClassName={styles.active}>
                            <i className="fa fa-bar-chart icon-lg"/> <span>{i18n('Menu.Histo')}</span>
                            <i className={'fa fa-angle-right ' + styles.arrow}/>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    }
}
