import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Hero = React.forwardRef<HTMLElement, {}>((props, ref) => {
  const validationSchema = Yup.object({
    meterNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Meter number must be exactly 11 digits")
      .required("Meter number is required"),
  });

  const initialValues = {
    meterNumber: "",
  };

  const handleSubmit = (values: { meterNumber: string }) => {
    console.log("Form values:", values);
  };

  return (
    <section ref={ref} className="relative">
      <div className="top-0 left-0 absolute inset-0 -z-10">
        <Image
          src="/img/hero-bg.jpg"
          alt="PowerLine Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="w-11/12 max-w-screen-xl mx-auto py-[70px] md:py-[100px] relative z-10 text-white flex flex-col md:flex-row gap-20 items-center justify-between">
        <div className="w-full md:w-1/2 flex flex-col gap-10 items-start justify-start">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
            Manage and Pay your{" "}
            <span className="text-[#E89D07]">Electricity</span> bills with Ease.
          </h1>
          <p className="text-white text-xl md:text-2xl text-center md:text-left">
            Our secure and effective platform simplifies your electricity bill
            payments, ensuring uninterrupted service while saving you time and
            effort.
          </p>
        </div>

        <div className="w-full md:w-1/2  lg:w-1/3 rounded-xl  px-[35px] py-[25px] bg-[#FFFFFF] opacity-80">
          <div className="text-[#131313] flex flex-col justify-center items-center gap-2 ">
            <Image
              src="/icons/token.svg"
              alt="Token SVG"
              width={85}
              height={85}
              className="w-[85px] h-[85px]"
            />
            <h4 className="text-xl font-semibold">Get Instant Token!</h4>
            <p className="text-sm text-center w-full md:w-3/4">
              Tokens will be promptly credited to your account upon successful
              payment.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                {/* Meter Number Field */}
                <div>
                  <label htmlFor="meterNumber" className="block text-lg mb-2">
                    Enter your Meter Number
                  </label>
                  <Field
                    type="text"
                    id="meterNumber"
                    name="meterNumber"
                    placeholder="Enter 11-digit Meter Number"
                    className="py-6 px-4 rounded-md w-full bg-[#F2F2F5] text-[#8A8A8A]"
                  />
                  <ErrorMessage
                    name="meterNumber"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#0752E8] text-white py-6 px-4 rounded-md mt-2"
                  disabled={isSubmitting}
                >
                  Get Token!
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
});

export default Hero;
