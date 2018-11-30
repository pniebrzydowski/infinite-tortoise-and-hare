import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

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
                initialValues={{ name: '', startDate: new Date(), endDate: new Date()}}
                validate={this.validate}
                onSubmit={this.submit}>
                {({ isSubmitting }) => (
                    <Form>
                        <h2>Add a new series</h2>
                        <Field name="name" />
                        <ErrorMessage name="name" component="div" />
                        <Field name="startDate">
                        {({ field, form }) => (
                            <DatePicker
                                selected={field.value}
                                onChange={val => form.setFieldValue('startDate', val)}
                            />
                        )}
                        </Field>
                        <Field name="endDate">
                        {({ field, form }) => (
                            <DatePicker
                                selected={field.value}
                                onChange={val => form.setFieldValue('endDate', val)}
                            />
                        )}
                        </Field>
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