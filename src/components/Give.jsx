import React, { useState } from 'react';
import '../style/Give.css';

const Give = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    amount: '',
    giveTo: '',
    paymentMethod: '',
    bankAccount: '',
    routingNumber: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? value : '') : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      billingAddress: {
        street1: formData.street1,
        street2: formData.street2,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      },
      paymentDetails:
        formData.paymentMethod === 'ACH'
          ? {
              bankAccount: formData.bankAccount,
              routingNumber: formData.routingNumber,
            }
          : formData.paymentMethod === 'CreditCard'
          ? {
              creditCardNumber: formData.creditCardNumber,
              expirationDate: formData.expirationDate,
              cvv: formData.cvv,
            }
          : null,
    };
    console.log('Data to send:', dataToSend);
    // Add API call logic here
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="form-header">
          <h1>Thanks for Partnering with Us!</h1>
          <p>
            Enter your preferred donation method below along with all of your details, select the ministry or person(s) you would like to give to, and then press the donate button to process your payment.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="centered-form">
          <div className="label-container">
            <label htmlFor="firstName">Enter your first name:</label>
          </div>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div className="label-container">
            <label htmlFor="lastName">Enter your last name:</label>
          </div>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <div className="label-container">
            <label htmlFor="phoneNumber">Enter your phone number:</label>
          </div>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="1234567890"
            required
          />
          <div className="label-container">
            <label htmlFor="email">Enter your email address:</label>
          </div>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
            required
          />
          <div className="label-container">
            <label htmlFor="amount">Enter the amount to donate (in USD):</label>
          </div>
          <input
            id="amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min="1"
            step="0.01"
            required
          />
          <div className="label-container">
            <label htmlFor="giveTo">Select the recipient of your donation:</label>
          </div>
          <select
            id="giveTo"
            name="giveTo"
            value={formData.giveTo}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="charity1">Charity 1</option>
            <option value="charity2">Charity 2</option>
          </select>
          <div className="label-container">
            <label htmlFor="street1">Billing Address - Street 1:</label>
          </div>
          <input
            id="street1"
            type="text"
            name="street1"
            value={formData.street1}
            onChange={handleChange}
            required
          />
          <div className="label-container">
            <label htmlFor="street2">Billing Address - Street 2:</label>
          </div>
          <input
            id="street2"
            type="text"
            name="street2"
            value={formData.street2}
            onChange={handleChange}
          />
          <div className="label-container">
            <label htmlFor="city">City:</label>
          </div>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <div className="label-container">
            <label htmlFor="state">State:</label>
          </div>
          <input
            id="state"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <div className="label-container">
            <label htmlFor="zipCode">Zip Code:</label>
          </div>
          <input
            id="zipCode"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="paymentMethod"
                value="ACH"
                checked={formData.paymentMethod === 'ACH'}
                onChange={handleChange}
                className="checkbox-input"
              />
              ACH
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="paymentMethod"
                value="CreditCard"
                checked={formData.paymentMethod === 'CreditCard'}
                onChange={handleChange}
                className="checkbox-input"
              />
              Credit or Debit
            </label>
          </div>
          {formData.paymentMethod === 'ACH' && (
            <>
              <div className="label-container">
                <label htmlFor="bankAccount">Enter your bank account number:</label>
              </div>
              <input
                id="bankAccount"
                type="number"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                required
              />
              <div className="label-container">
                <label htmlFor="routingNumber">Enter your bank routing number:</label>
              </div>
              <input
                id="routingNumber"
                type="number"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                required
              />
            </>
          )}
          {formData.paymentMethod === 'CreditCard' && (
            <>
              <div className="label-container">
                <label htmlFor="creditCardNumber">Enter your credit card number:</label>
              </div>
              <input
                id="creditCardNumber"
                type="text"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleChange}
                required
              />
              <div className="label-container">
                <label htmlFor="expirationDate">Enter your card's expiration date (MM/YY):</label>
              </div>
              <input
                id="expirationDate"
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                pattern="\d{2}/\d{2}"
                placeholder="MM/YY"
                required
              />
              <div className="label-container">
                <label htmlFor="cvv">Enter your card's CVV:</label>
              </div>
              <input
                id="cvv"
                type="number"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                min="100"
                max="9999"
                required
              />
            </>
          )}
          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default Give;
