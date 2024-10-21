import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aisha M.",
    location: "Abuja",
    comment:
      '"I love how secure the payment process is. With multiple payment options, I can choose what works best for me, and I always receive confirmation immediately."',
    rating: 5,
  },
  {
    id: 2,
    name: "Olushola",
    location: "Lagos",
    comment:
      '"The platform is incredibly easy to use. I can pay my electricity bill in just a few clicks, and the payment is processed instantly. I highly recommend it!"',
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima",
    location: "Lagos",
    comment:
      '"This website makes it so convenient to pay my bills. I no longer have to worry about late payments, and the real-time updates are a great feature!"',
    rating: 5,
  },
  {
    id: 4,
    name: "Chinedu",
    location: "Port Harcourt",
    comment:
      '"The multiple payment options make it so simple to manage my bills on the go. I trust the platform\'s security every time."',
    rating: 5,
  },
  {
    id: 5,
    name: "Chisi",
    location: "Lagos",
    comment:
      '"I appreciate how fast and efficient this platform is. It saves me time and effort, and I can pay my bills without any hassle."',
    rating: 5,
  },
  {
    id: 6,
    name: "Godwin",
    location: "Benin City",
    comment:
      '"A reliable and user-friendly platform. The seamless process and the ability to pay anytime make it a top choice for me. Customer support is also very responsive."',
    rating: 5,
  },
  {
    id: 7,
    name: "Emeka",
    location: "Enugu",
    comment:
      '"It’s so easy to keep track of my payments with this service. The reminders ensure I never miss a due date, and the payment process is smooth."',
    rating: 5,
  },
  {
    id: 8,
    name: "Grace A.",
    location: "Ibadan",
    comment:
      '"Great service! The user interface is clean and intuitive, making it super easy for me to navigate and pay my bills. I’m very satisfied with the experience."',
    rating: 5,
  },
];

const Testimonials = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="">
      <div className="w-11/12 max-w-screen-xl mx-auto pb-[70px]">
        <h2 className="text-black font-semibold text-[25px] sm:text-[30px] lg:text-[40px] leading-none mb-[45px] text-center">
          Hear What Our Customer Have To Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#FCFCFC] p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  {testimonial.location && (
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-sm mb-2">{testimonial.comment}</p>
              <div className="flex"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
export default Testimonials;
