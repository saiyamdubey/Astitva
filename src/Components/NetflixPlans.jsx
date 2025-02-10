import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      section: "Pet Shops Plans",
      plans: [
        { name: "Basic", price: "₹499", features: ["50 Products", "Basic Analytics", "Email Support"] },
        { name: "Premium", price: "₹999", features: ["200 Products", "Advanced Analytics", "24/7 Support", "Social Media Integration", "Ad Campaigns"] },
      ],
    },
    {
      section: "Vet Shops Plans",
      plans: [
        { name: "Basic", price: "₹699", features: ["50 Appointments", "Basic Reminders", "Email Support"] },
        { name: "Premium", price: "₹1299", features: ["Unlimited Appointments", "Advanced Reminders", "24/7 Support", "Medical Records", "Shop Integration"] },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center p-12  bg-gray">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:ml-[22rem] lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {plans.map((section, index) => (
          <div
            key={index}
            className="border border-teal-400 rounded-lg shadow-lg bg-black p-6"
          >
            <h2 className="text-teal-500 text-lg font-bold text-center py-4 border-b border-teal-300">
              {section.section}
            </h2>
            <div className="flex flex-col">
              {section.plans.map((plan, idx) => (
                <div
                  key={idx}
                  className="p-4 text-center border-b last:border-b-0 hover:bg-teal-100 transition"
                >
                  <h3 className="text-xl font-bold text-teal-600">{plan.name}</h3>
                  <p className="text-teal-500 text-lg font-semibold my-3">
                    {plan.price}
                  </p>
                  <ul className="text-teal-600 text-sm space-y-2">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
