import React from 'react';
import SeriesList from '../../../containers/Admin/SeriesList';
import SeriesAdd from '../../modules/Admin/SeriesAdd';

export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <SeriesList />
                <SeriesAdd />
            </div>
        );
    }
}
