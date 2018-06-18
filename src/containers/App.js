import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import App from '../components/App';

const mapStateToProps = () => {
    return {
    };
};

export default withRouter(connect(mapStateToProps)(App));