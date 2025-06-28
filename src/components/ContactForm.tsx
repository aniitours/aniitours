import { useState } from 'react';
import { DatePicker } from 'antd';
import { useForm } from '@formspree/react';

const formFieldsConfig = [
  [
    { name: 'name', placeholder: 'Your Name', type: 'text', required: true, label: 'Name' },
    { name: 'email', placeholder: 'Email Address', type: 'email', required: true, label: 'Email' }
  ],
  [
    { name: 'mobileNo', placeholder: 'Phone Number', type: 'tel', required: true, label: 'Phone' },
    { name: 'vacationDate', placeholder: 'Vacation Date', type: 'date', required: true, label: 'Vacation Date' }
  ],
  [
    { name: 'adults', placeholder: 'No. of Adults', type: 'number', required: true, label: 'Adults' },
    { name: 'kids', placeholder: 'No. of Kids', type: 'number', required: false, label: 'Kids' }
  ],
  [
    { name: 'message', placeholder: 'Your Message', type: 'textarea', required: true, label: 'Message' }
  ]
];

const inputStyles = "w-full text-gray-500 h-12 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500";
const errorInputStyles = "ring-red-500 border-red-500 border-transparent";
const errorMessageStyles = "text-red-500 text-xs mt-1";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwpbnjoa");
  const [formData, setFormData] = useState<{[key: string]: any}>({});
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    formFieldsConfig.flat().forEach(field => {
      const value = formData[field.name];
      if (field.required) {
        if (value === undefined || value === null || value === '') {
          newErrors[field.name] = `${field.label} is required.`;
        } else if (field.name === 'adults' && parseInt(value, 10) <= 0) {
          newErrors.adults = 'At least one adult is required.';
        }
      }
      if (field.name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'Email address is invalid.';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLocalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      handleSubmit(formData);
    }
  };

  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (state.succeeded) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg w-full text-center">
        <h3 className="text-xl font-semibold mb-4 font-poppins text-green-600">Thank you for your query!</h3>
        <p className="text-gray-700">We have received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div id="contact-form" className="bg-white p-6 md:p-8 rounded-3xl shadow-lg w-full">
      <h3 className="text-xl font-semibold mb-6 font-poppins text-center">Send us your query</h3>
      <form onSubmit={handleLocalSubmit} className="space-y-6" noValidate>
        <div className="space-y-4">
          {formFieldsConfig.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-1 ${row.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {row.map((field) => (
                <div key={field.name}>
                  {field.type === 'date' ? (
                    <DatePicker
                      onChange={(_, dateString) => handleChange(field.name, dateString as string)}
                      className={`${inputStyles} ${errors[field.name] ? errorInputStyles : ''}`}
                      placeholder={field.placeholder}
                    />
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`${inputStyles} ${errors[field.name] ? errorInputStyles : ''} resize-none h-auto`}
                      rows={4}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      required={field.required}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`${inputStyles} ${errors[field.name] ? errorInputStyles : ''}`}
                      min={field.type === 'number' ? 0 : undefined}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      required={field.required}
                    />
                  )}
                  {errors[field.name] && <p className={errorMessageStyles}>{errors[field.name]}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button type="submit" disabled={state.submitting} className="w-full mt-6 bg-[#1E1D4C] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400">
          {state.submitting ? 'Sending...' : 'Send Query'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;