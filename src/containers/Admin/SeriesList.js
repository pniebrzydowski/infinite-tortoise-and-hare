import { connect } from 'react-redux';

import View from '../../components/modules/Admin/SeriesList';

const mapStateToProps = (state) => {
    return {
        series: state.series
    };
};

export default connect(mapStateToProps)(View);