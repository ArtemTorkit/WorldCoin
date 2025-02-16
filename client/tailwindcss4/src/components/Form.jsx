import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { faArrowDown, faSend, faSuccess } from "../assets";

const FormComponent = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(2, "Full Name must be at least 2 characters")
      .max(50, "Full Name cannot exceed 50 characters"),

    email: Yup.string()
      .required("Email is required")
      .email()
      .matches(/@[^.]*\./),

    phoneNumber: Yup.string()
      .max(13, "Max symbols is 13")
      .matches(
        /^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d-.\s]{5,15}$/,
        "Invalid phone number format"
      ),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("values: ", values);
      const response = await fetch(
        "https://world-coin-referal.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("Success:", data);
      setIsSubmited(true);
      // resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" p-6 bg-white rounded-lg shadow-md">
      {!isSubmited ? (
        <>
          <h3 className="font-medium text-xl mb-[20px]">Referal form</h3>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ setFieldValue, values, isSubmitting }) => (
              <Form>
                {/* Full Name */}
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500 text-xl">*</span>
                  </label>
                  <Field
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500 text-xl">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Phone Number with Country Code */}
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="PL"
                    value={values.phoneNumber}
                    onChange={(value) => setFieldValue("phoneNumber", value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 flex gap-[5px] justify-center ">
                    <div className="">
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </div>
                    <img src={faSend} alt="" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <div className="flex gap-[10px] items-center">
          <img src={faSuccess} alt="" className="w-[30px] h-[30px]" />
          <p className="text-lg">
            Message sent successfully! Check your{" "}
            <a href="https://mail.google.com" className="underline">
              Email
            </a>{" "}
            to receive referal code.
          </p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
