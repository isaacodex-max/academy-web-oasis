import React, { useState } from "react";

const ApplicationForm: React.FC = () => {
  // Define state for each field (example)
  const [studentName, setStudentName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [intendedClass, setIntendedClass] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [previousSchool, setPreviousSchool] = useState("");
  const [lastClass, setLastClass] = useState("");
  const [reasonForLeaving, setReasonForLeaving] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [genotype, setGenotype] = useState("");
  const [allergies, setAllergies] = useState("");
  const [onMedication, setOnMedication] = useState("");
  const [medicationDetails, setMedicationDetails] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // Update state based on input name and value
    const { name, value } = e.target;
    switch (name) {
      case "studentName":
        setStudentName(value);
        break;
      case "dob":
        setDob(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "intendedClass":
        setIntendedClass(value);
        break;
      case "parentName":
        setParentName(value);
        break;
      case "parentPhone":
        setParentPhone(value);
        break;
      case "parentEmail":
        setParentEmail(value);
        break;
      case "previousSchool":
        setPreviousSchool(value);
        break;
      case "lastClass":
        setLastClass(value);
        break;
      case "reasonForLeaving":
        setReasonForLeaving(value);
        break;
      case "bloodGroup":
        setBloodGroup(value);
        break;
      case "genotype":
        setGenotype(value);
        break;
      case "allergies":
        setAllergies(value);
        break;
      case "onMedication":
        setOnMedication(value);
        break;
      case "medicationDetails":
        setMedicationDetails(value);
        break;
      case "whyJoin":
        setWhyJoin(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      studentName,
      dob,
      gender,
      intendedClass,
      parentName,
      parentPhone,
      parentEmail,
      previousSchool,
      lastClass,
      reasonForLeaving,
      bloodGroup,
      genotype,
      allergies,
      onMedication,
      medicationDetails,
      whyJoin,
    };
    const response = await fetch('http://localhost:5000/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.success) {
      setSuccess(true);
      // Optionally clear form fields here
    } else {
      alert(result.message || "Submission failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Letterhead */}
        <div className="flex items-center gap-6 mb-8 border-b pb-6">
          <img
            src="/lovable-uploads/97f18681-df52-4541-94d7-c7f23019c06d.png"
            alt="Extensive Academy Logo"
            className="w-20 h-20 object-contain"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Extensive Academy</h1>
            <div className="text-gray-700">
              PLOT 15, JESUS AVENUE, OLOGBUN, SIMAWA-LIKOSI ROAD, SHAGAMU, OGUN STATE. Phone: 09065065415, Email:extensiveacademy@gmail.com
              <span className="italic font-semibold"> Motto: Aspiring for Excellence</span>
            </div>
          </div>
        </div>

        {/* Form Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Application Form for Admission</h2>
          <p className="text-gray-700 mt-2">Academic Session 2025/2026</p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white/80 rounded-xl shadow-lg p-8 space-y-10">
          {/* Section 1: Student Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Student Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={studentName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Intended Class</label>
                <input
                  type="text"
                  name="intendedClass"
                  value={intendedClass}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                />
              </div>
            </div>
          </div>
            {/* Section 2: Medical Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Medical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={bloodGroup}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Genotype</label>
                <input
                  type="text"
                  name="genotype"
                  value={genotype}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Allergies or Medical Conditions</label>
                <input
                  type="text"
                  name="allergies"
                  value={allergies}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                />
              </div>
              <div className="md:col-span-2 flex items-center gap-4 mt-2">
                <label className="block text-gray-700 font-medium">Is the child on any medication?</label>
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="onMedication"
                    value="Yes"
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="onMedication"
                    value="No"
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>No</span>
                </label>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">If yes, explain</label>
                <input
                  type="text"
                  name="medicationDetails"
                  value={medicationDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Parent/Guardian Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Parent/Guardian Name</label>
                <input
                  type="text"
                  name="parentName"
                  value={parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Relationship</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={parentPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="parentEmail"
                  value={parentEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 4: Previous School Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Previous School Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Previous School Name</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={previousSchool}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Last Class Attended</label>
                <input
                  type="text"
                  name="lastClass"
                  value={lastClass}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Reason for Leaving</label>
                <input
                  type="text"
                  name="reasonForLeaving"
                  value={reasonForLeaving}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Additional Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Additional Information</h3>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Why do you want to join Extensive Academy?</label>
              <textarea
                name="whyJoin"
                value={whyJoin}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/60"
                rows={3}
              />
            </div>
          </div>
            {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
            Application submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;