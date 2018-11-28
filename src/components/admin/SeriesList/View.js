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
                {series !== null && series.length > 0 && series.map(s => {
                    return <div key={s.name}>
                        {s.name} - {s.startDate} to {s.endDate}
                    </div>;
                })}
            </div>
        );
    }
}

SeriesList.propTypes = {
    getAll: PropTypes.func.isRequired,
    series: PropTypes.array
};

export default SeriesList;
