import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  meterNumber: string;
}

const PowerAgain = () => {
  const validationSchema = Yup.object({
    meterNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Meter number must be exactly 11 digits")
      .required("Meter number is required"),
  });

  const initialValues: FormValues = {
    meterNumber: "",
  };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form values:", values);
    resetForm();
  };

  return (
    <section className="">
      <div className="w-11/12 max-w-screen-xl mx-auto px-[25px] sm:px-[56px] py-[25px] bg-[#F2F2F2] rounded-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="w-full sm:w-2/3  md:w-1/2 my-6 sm:my-0 md:mb-0">
            <h2 className="text-black font-semibold text-[25px] sm:text-[30px] lg:text-[40px] leading-none mb-[25px] text-center sm:text-left">
              Never run out of power again!
            </h2>

            <p className="mb-10 text-center sm:text-left">
              Stay connected with ease using our secure bill payment service.
              Pay your electricity bills and enjoy continuous service anytime,
              anywhere.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="w-full flex flex-row items-center gap-2">
                  <div className="w-full relative ">
                    <Field
                      type="text"
                      name="meterNumber"
                      placeholder="Enter 11-digit Meter Number"
                      className="border-none rounded-l-md py-6 px-4 w-full bg-white text-gray-700 focus:outline-none"
                    />
                    <ErrorMessage
                      name="meterNumber"
                      component="div"
                      className="text-red-500 mt-1 text-xs absolute -bottom-4"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 whitespace-nowrap text-white py-6 px-4 rounded-r-md hover:bg-blue-700 transition duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Get Token"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="hidden sm:flex w-1/3 justify-center">
            <Image
              src="/img/bulb.svg"
              alt="Light bulb"
              width={381}
              height={514}
              className="w-[381px] h-[514px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerAgain;
