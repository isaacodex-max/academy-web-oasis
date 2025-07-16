import React, { useState } from "react";

const ApplicationForm: React.FC = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-10">
        {/* Letterhead */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between mb-10 border-b pb-6">
          <img
            src="/lovable-uploads/97f18681-df52-4541-94d7-c7f23019c06d.png"
            alt="Extensive Academy Logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Extensive Academy</h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              PLOT 15, JESUS AVENUE, OLOGBUN, SIMAWA-LIKOSI ROAD, SHAGAMU, OGUN STATE.<br />
              Phone: 09065065415, Email: extensiveacademy@gmail.com<br />
              <span className="italic font-semibold block">Motto: Aspiring for Excellence</span>
            </p>
          </div>
        </div>

        {/* Form Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Application Form for Admission</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Academic Session 2025/2026</p>
        </div>

        {/* Application Form */}
        <form
          action="https://formsubmit.co/extensiveacademy@gmail.com"
          method="POST"
          className="space-y-12"
        >
          <input type="hidden" name="_next" value="https://www.extensiveacademy.org/Thankyou" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Form Sections */}
          {[
            {
              title: "Student Information",
              fields: [
                "Full Name",
                "Date of Birth",
                "Gender",
                "Intended Class",
                "Nationality",
                "State of Origin"
              ]
            },
            {
              title: "Medical Information",
              fields: [
                "Blood Group",
                "Genotype",
                "Allergies",
                "On Medication",
                "Medication Details"
              ]
            },
            {
              title: "Parent/Guardian Information",
              fields: [
                "Parent Name",
                "Relationship",
                "Phone Number",
                "Email",
                "Home Address",
                "Occupation"
              ]
            },
            {
              title: "Previous School Information",
              fields: [
                "Previous School",
                "Last Class",
                "Reason for Leaving"
              ]
            },
            {
              title: "Emergency Contact",
              fields: [
                "Emergency Contact Name",
                "Emergency Phone",
                "Relationship to Student"
              ]
            }
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.fields.map((field, i) => (
                  field === "Gender" || field === "On Medication" ? (
                    <select key={i} name={field} required className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800">
                      <option value="">Select {field}</option>
                      {field === "Gender" ? (
                        <>
                          <option>Male</option>
                          <option>Female</option>
                        </>
                      ) : (
                        <>
                          <option>Yes</option>
                          <option>No</option>
                        </>
                      )}
                    </select>
                  ) : (
                    <input
                      key={i}
                      type={field === "Date of Birth" ? "date" : field.includes("Email") ? "email" : field.includes("Phone") ? "tel" : "text"}
                      name={field}
                      placeholder={field}
                      required={!field.toLowerCase().includes("optional")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800"
                    />
                  )
                ))}
              </div>
            </div>
          ))}

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Additional Information</h3>
            <textarea
              name="Why Join Extensive Academy"
              placeholder="Why do you want to join Extensive Academy?"
              rows={8}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-gray-800 md:min-h-[240px] text-sm md:text-base"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
