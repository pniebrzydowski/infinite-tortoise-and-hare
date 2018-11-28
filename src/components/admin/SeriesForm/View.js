import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class SeriesForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    validate(values) {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        return errors;
    }

    submit(values, { setSubmitting }) {
        const { save } = this.props;
        save(values);
        setSubmitting(true);
    }

    render() {
        return (
            <Formik
                initialValues={{ name: '', startDate: '', endDate: ''}}
                validate={this.validate}
                onSubmit={this.submit}>
                {({ isSubmitting }) => (
                    <Form>
                        <h2>Add a new series</h2>
                        <Field type="string" name="name" />
                        <ErrorMessage name="name" component="div" />
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        );
    }
}

SeriesForm.propTypes = {
    save: PropTypes.func.isRequired
};

export default SeriesForm;