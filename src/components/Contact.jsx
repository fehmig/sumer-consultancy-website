import Button from './Button';
import React from 'react';
import styles from '../../style';

const ContactForm = () => {
  return (
    <div className="p-6 w-full max-w-md mx-auto">
      <h2 className={styles.heading2}>Contact Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className={styles.input}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Mail:
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Message:
          </label>
          <textarea
            id="message"
            className={styles.input}
          ></textarea>
        </div>
        <Button buttonText="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
