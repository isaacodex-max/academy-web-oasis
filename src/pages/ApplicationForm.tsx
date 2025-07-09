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
  const [relationship, setRelationship] = useState("");
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
  const [loading, setLoading] = useState(false);
 

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
        case "relationship": 
      setRelationship(value);
      break;
      default:
        break;
    }
  };

 
   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true); 
  const formData = {
    studentName,
    dob,
    gender,
    intendedClass,
    parentName,
    parentPhone,
    parentEmail,
    relationship,
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

  try {
    const response = await fetch('https://academy-web-oasis-ol25.onrender.com/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);

      // ✅ Clear the form fields
      setStudentName("");
      setDob("");
      setGender("");
      setIntendedClass("");
      setParentName("");
      setParentPhone("");
      setParentEmail("");
      setRelationship("");
      setPreviousSchool("");
      setLastClass("");
      setReasonForLeaving("");
      setBloodGroup("");
      setGenotype("");
      setAllergies("");
      setOnMedication("");
      setMedicationDetails("");
      setWhyJoin("");

    } else {
      alert(result.message || "Submission failed.");
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error("Submission error:", error);
  }
    setLoading(false);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Letterhead */}
        <div className="flex items-center justify-between mb-8 border-b pb-6 px-4 md:px-8 lg:px-16">
  <img
    src="/lovable-uploads/97f18681-df52-4541-94d7-c7f23019c06d.png"
    alt="Extensive Academy Logo"
    className="w-12 h-12 md:w-20 md:h-20 object-contain"
  />
  <div className="flex-1 flex flex-col justify-center max-w-xs md:max-w-none ml-4 text-center">
    <h1 className="text-lg md:text-2xl font-bold text-gray-900">Extensive Academy</h1>
    <div className="text-gray-700 text-xs md:text-base">
      PLOT 15, JESUS AVENUE, OLOGBUN, SIMAWA-LIKOSI ROAD, SHAGAMU, OGUN STATE. Phone: 09065065415, Email:extensiveacademy@gmail.com
      <span className="italic font-semibold block">Motto: Aspiring for Excellence</span>
    </div>
  </div>
</div>


        {/* Form Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 px-4 sm:px-6 md:px-0">Application Form for Admission</h2>
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
             <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Is the child on any medication?</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="onMedication"
                      value="Yes"
                      checked={onMedication === "Yes"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="onMedication"
                      value="No"
                      checked={onMedication === "No"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span>No</span>
                  </label>
                 </div>
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
                      name="relationship"
                      value={relationship}
                      onChange={handleChange}
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
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
       {success && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
              <h2 className="text-xl font-bold text-green-700 mb-4">Success!</h2>
              <p className="text-gray-700 mb-6">Application submitted successfully.</p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                OK
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ApplicationForm;