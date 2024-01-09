import { ChangeEvent, FormEvent, useState } from 'react';
import { FormData, FormErrors } from '../types/intex';

interface PostFunction {
  (data: FormData): void;
}

const useLoginForm = (post: PostFunction) => {
  const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({ username: false, password: false });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((field) => field.trim().length > 0);
    setFormErrors({
      username: formData.username.trim().length === 0,
      password: formData.password.trim().length === 0,
    });
    if (isFormValid) {
      post(formData);
    }
  };

  return { formData, formErrors, handleInputChange, handleSubmit };
};

export default useLoginForm;