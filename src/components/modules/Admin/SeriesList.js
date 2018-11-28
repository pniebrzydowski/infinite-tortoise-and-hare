import React from 'react';
import PropTypes from 'prop-types';

class SeriesList extends React.Component {
    componentDidMount() {
        const { getAll, series } = this.props;
        if( series === null ) {
            getAll();
        }
    }
    render() {
        const { series } = this.props;
        return (
            <div>
                <h2>All Series ({series !== null && series.length})</h2>
                {series !== null && series.length === 0 && <p>No Series Found</p>}
            </div>
        );
    }
}

SeriesList.propTypes = {
    getAll: PropTypes.func.isRequired,
    series: PropTypes.array
};

export default SeriesList;
