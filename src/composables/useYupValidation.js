// useYupValidation.js

import { ref } from "vue"
import * as Yup from "yup"

export default function useYupValidation(schema) {
  const errors = ref({})

  const validate = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false })
      errors.value = {}
    } catch (validationErrors) {
      errors.value = validationErrors.inner.reduce((acc, error) => {
        acc[error.path] = error.message
        return acc
      }, {})
    }
  }

  return {
    errors,
    validate
  }
}
