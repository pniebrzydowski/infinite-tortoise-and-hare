import React from 'react';
import PropTypes from 'prop-types';

class SeriesList extends React.Component {
    render() {
        const { series } = this.props;
        return (
            <div>
                <h2>All Series</h2>
                {(!series || series.length == 0) && <p>No Series Found</p>}
            </div>
        );
    }
}

SeriesList.propTypes = {
    series: PropTypes.array
};

export default SeriesList;
