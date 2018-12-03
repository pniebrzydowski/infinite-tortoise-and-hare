import { connect } from 'react-redux';

import View from './View';
import { addSeries } from '../../../actions/series';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        save: (values) => {
            dispatch(addSeries({
                name: values.name,
                startDate: values.startDate.valueOf(),
                endDate: values.endDate.valueOf(),
            }))
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);