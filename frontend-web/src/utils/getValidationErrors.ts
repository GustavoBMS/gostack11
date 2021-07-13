import { ValidationError } from "yup";

/**
 * Faz com que a funcao se torne dinamica para que todos os forms possam ser usados
 */
interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}