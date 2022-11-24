import { Formik, Form, Field, ErrorMessage } from 'formik'; //Form library
import * as yup from 'yup'; //Schema validation
import { useProducts } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

export function NewProduct() {
  const { createProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ name: '', description: '', price: '', stock: '' }}
        validationSchema={yup.object({
          name: yup.string().required('Campo requerido'),
          description: yup.string().required('Campo requerido'),
          price: yup.number().required('Campo requerido'),
          stock: yup.number().required('Campo requerido'),
        })}
        onSubmit={ async (values, actions) => {
          await createProduct(values);
          navigate('/');
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              placeholder="Nombre"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full m-5"
            />
            <Field
              name="description"
              placeholder="Descripción"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full m-5"
            />
            <Field
              name="price"
              placeholder="Precio"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full m-5"
            />
            <Field
              name="stock"
              placeholder="Cantidad"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full m-5"
            />
            <button type="submit">Save product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
