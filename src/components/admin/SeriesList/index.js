import { connect } from 'react-redux';

import View from './View';
import { getAllSeries } from '../../../actions/series';

const mapStateToProps = (state) => {
    return {
        series: state.series.series
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => {
            dispatch(getAllSeries());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);