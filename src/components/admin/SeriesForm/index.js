import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        save: (values) => {
            console.log(values);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);