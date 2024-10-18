import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FooterProps {
  handleNavigation: (section: string) => void;
}

interface NewsletterFormValues {
  email: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ handleNavigation }, ref) => {
    const initialValues: NewsletterFormValues = { email: "" };

    const validationSchema = Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    });

    const handleSubmit = (
      values: NewsletterFormValues,
      { resetForm }: { resetForm: () => void }
    ) => {
      console.log("Newsletter Email:", values.email);
      resetForm();
    };

    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
      <footer
        ref={ref}
        className="bg-white text-black w-11/12 max-w-screen-xl mx-auto pt-[70px]"
      >
        <button onClick={() => handleNavigation("contactUsRef")}>
          Go to Contact Us
        </button>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Powerline</h3>
              <p className="text-sm">
                Powering your convenience with secure, seamless electricity bill
                payments anytime, anywhere.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Links</h3>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    How it works
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Contact us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Testimonial
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Legal</h3>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Terms of use
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Privacy policy
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Newsletter</h3>
              <p className="text-sm mb-2">
                The platform is incredibly easy to use. I can pay my electricity
                bill in just a few clicks!
              </p>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="flex">
                    <div className="flex-1">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="bg-gray-700 text-black px-4 py-2 rounded-l w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-black px-4 py-2 rounded-r hover:bg-blue-700 transition duration-200"
                      disabled={isSubmitting}
                    >
                      {/* Replace with icon or text */}
                      {isSubmitting ? "Submitting..." : "Subscribe"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="text-center text-sm border-t mt-5 py-6 flex flex-row justify-between items-center">
            <p className="font-medium hidden sm:block sm:text-sm">Privacy & Terms</p>
            <p className="font-medium text-xs sm:text-sm">Copyright @{currentYear} Powerline</p>
            <div className="flex flex-row gap-2 sm:gap-4 items-center">
              <Link href={"/"}>
                <Image
                  src="/icons/x.svg"
                  alt="Twitter (X) Logo"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook Logo"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram Logo"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;
