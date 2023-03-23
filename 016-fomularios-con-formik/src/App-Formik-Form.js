import { Formik, Form, Field, ErrorMessage } from 'formik'
import CheckBox from './components/CheckBox/CheckBox'

const validate = (values) => {
  const errors = {}

  if (!values.nombre) {
    errors.nombre = 'Requerido'
  } else if (values.nombre.length < 5) {
    errors.nombre = 'El nombre es muy corto'
  }

  if (!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if (!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El nombre es muy corto'
  }

  if (!values.email) {
    errors.email = 'Requerido'
  } else if (values.email.length < 5) {
    errors.email = 'El nombre es muy corto'
  }

  return errors
}


function App() {
  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: '' }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <label>Nombre</label>
        <Field name='name' type='text' />
        <ErrorMessage name='name' />
        <br />

        <label>Apellido</label>
        <Field name='lastname' type='text' />
        <ErrorMessage name='lastname' />
        <br />

        <label>Email</label>
        <Field name='email' type='text' />
        <ErrorMessage name='email' />
        <br />

        <label>Otros Controles</label>
        <br />
        <Field name='textarea' as='textarea' className='input' />
        <br />
        <Field name='select' as='select' className='input'>
          <option value="opcion1">Chanchito feliz</option>
          <option value="opcion2">Chanchito feliz</option>
        </Field>
        <br />
        <CheckBox name='terminos'>
          Aceptar terminos y condiciones
        </CheckBox>
        <button type='submit'>Enviar</button>
      </Form>

    </Formik>
  );
}

export default App;
