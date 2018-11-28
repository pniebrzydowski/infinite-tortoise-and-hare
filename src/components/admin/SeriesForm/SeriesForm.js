import React from 'react';
import PropTypes from 'prop-types';

class SeriesForm extends React.Component {
    render() {
        return (
            <form>
                <h2>Series Form</h2>
            </form>
        );
    }
}

SeriesForm.propTypes = {
    save: PropTypes.func.isRequired
};

export default SeriesForm;