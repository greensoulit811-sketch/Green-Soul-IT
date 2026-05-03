// PaymentInvoice.tsx
import React from "react";

// ==================== TYPES ====================
interface PaymentMethod {
  name: string;
  icon: string; // Image URL
  details: string[];
  link?: string; // Optional clickable
}

// ==================== DATA ====================
const paymentMethods: PaymentMethod[] = [
  {
    name: "bKash",
    icon: "https://download.logo.wine/logo/BKash/BKash-Logo.wine.png",
    details: ["01607183592", "Tap to Pay"],
    link: "tel:01607183592",
  },
  {
    name: "Nagad",
    icon: "https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg",
    details: ["01607183592", "Personal"],
    link: "tel:01607183592",
  },
  {
    name: "Bank Transfer",
    icon: "https://img.freepik.com/free-vector/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.jpg?semt=ais_user_personalization&w=740&q=80",
    details: ["Dutch Bangla Bank Ltd", "A/C: 3031100347730"],
  },
];

// ==================== COMPONENT ====================
const PaymentCard: React.FC<{ method: PaymentMethod }> = ({ method }) => {
  const Wrapper = method.link ? "a" : "div";

  return (
    <Wrapper
      {...(method.link ? { href: method.link } : {})}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
    >
      {/* Image Cover */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src={method.icon}
          alt={method.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Payment Info */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg mb-2">{method.name}</h3>
        {method.details.map((detail, idx) => (
          <p key={idx} className="text-gray-700 text-sm">
            {detail}
          </p>
        ))}
      </div>
    </Wrapper>
  );
};

// ==================== MAIN COMPONENT ====================
const PaymentInvoice: React.FC = () => {
  return (
    <div className=" flex bg-green-50 flex-col items-center py-36 px-4 bg-gray-50">
      <div className="max-w-5xl w-full">

        {/* Header */}
        <div className="bg-white text-gray-900 p-6 text-center rounded-lg mb-8 shadow-md">
          <h1 className="text-3xl font-bold">Payment Methods</h1>
          <p className="text-sm mt-1">Green Soul IT</p>
        </div>

        {/* Payment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paymentMethods.map((method, idx) => (
            <PaymentCard key={idx} method={method} />
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Please choose your preferred payment method to complete your transaction.
        </p>
      </div>
    </div>
  );
};

export default PaymentInvoice;
