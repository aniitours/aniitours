import { useState } from 'react';
import { DatePicker } from 'antd';
import { useForm, ValidationError } from '@formspree/react';

const formFieldsConfig = [
  [
    { name: 'Name', placeholder: 'Your Name', type: 'text', required: true, label: 'Name' },
    { name: 'EmailID', placeholder: 'Email Address', type: 'email', required: true, label: 'Email' }
  ],
  [
    { name: 'Mobile No', placeholder: 'Phone Number', type: 'tel', required: true, label: 'Phone' },
    { name: 'Vacation Date', placeholder: 'Vacation Date', type: 'date', required: true, label: 'Vacation Date' }
  ],
  [
    { name: 'Adults', placeholder: 'No. of Adults', type: 'number', required: true, label: 'Adults' },
    { name: 'Kids', placeholder: 'No. of Kids', type: 'number', required: true, label: 'Kids' }
  ],
  [
    { name: 'Message', placeholder: 'Your Message', type: 'textarea', required: true, label: 'Message' }
  ]
];

const inputStyles = "w-full text-gray-500 h-12 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwpbnjoa");
  const [dateValue, setDateValue] = useState('');

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
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="Vacation Date" value={dateValue} />
        <div className="space-y-4">
          {formFieldsConfig.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-1 ${row.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {row.map((field) => (
                <div key={field.name}>
                  {field.type === 'date' ? (
                    <DatePicker
                      onChange={(_, dateString) => setDateValue(dateString as string)}
                      className={inputStyles}
                      placeholder={field.placeholder}
                    />
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`${inputStyles} resize-none h-auto`}
                      rows={4}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={inputStyles}
                      min={field.type === 'number' ? 0 : undefined}
                    />
                  )}
                  <ValidationError
                    prefix={field.label}
                    field={field.name}
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
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