import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import App from './View';

const mapStateToProps = () => {
    return {
    };
};

export default withRouter(connect(mapStateToProps)(App));