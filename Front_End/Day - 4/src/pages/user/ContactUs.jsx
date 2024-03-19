import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  return (
    <div className="mt-40 justify-center items-center max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-6">
        <h1 className="text-gray-800 text-3xl text-center font-semibold">
          Contact Us
        </h1>
        <div className="flex items-center mt-5">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-3" />
          <p className="text-gray-600">+91-6380990616</p>
        </div>
        <div className="flex items-center mt-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-3" />
          <p className="text-gray-600">starryni8s@gmail.com</p>
        </div>
        <div className="flex items-center mt-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-3" />
          <p className="text-gray-600">No. 2026, TVK Nagar, Chennai, Tamilnadu, India - 600001</p>
        </div>
      </div>
    </div>
  );
}
