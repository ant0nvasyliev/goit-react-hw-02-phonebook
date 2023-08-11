// import React from "react";
import { Formik, ErrorMessage } from 'formik';
import { StyledForm, StyledFild, AddButton } from './ContactForm.styled'
import * as Yup from 'yup';
import { nanoid } from 'nanoid'

const schema = Yup.object().shape({
   name: Yup.string()
   .min(4, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required'),
   number: Yup.string()
   .min(6, 'Too Short!')
   .max(500, 'Too Long!')
   .required('Required'), 
});

export const ContactForm = ({addContact}) => {
   return (
<Formik
   initialValues={{
      name: '',
      number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
         addContact({ ...values, id: nanoid()});
         actions.resetForm();
      }}
      >

      <StyledForm>
         <label>
         <StyledFild name="name" placeholder="entert name here" />
         <ErrorMessage name="name" />
         </label>
         <label >
         <StyledFild name="number" placeholder="entert number here" />
         <ErrorMessage name="number" />
         </label>
         <AddButton type="submit">add contact</AddButton>
      </StyledForm>
</Formik>
   )
}

