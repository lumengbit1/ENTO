import React from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import './../../css/style.css';
import Loadable from 'react-loadable';

function Home({ rootStore }) {
    const LoadableBar = Loadable({
        loader: () => import('./../ShiftNote'),
        loading() {
            return <>Loading...</>;
        }
    });
    return (
        <div className="shift-note">
            {rootStore.formStore.localStorageValue.map(item => (
                <LoadableBar data={item} />
            ))}
        </div>
    );
}
export default inject('rootStore')(observer(Home));
