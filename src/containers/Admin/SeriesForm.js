import { connect } from 'react-redux';

import View from '../../components/modules/Admin/SeriesForm';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        save: () => {
            console.log('save');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);