import React, { useState } from "react";
import doctor1 from '../doctors/male1.jpeg';
import doctor2 from '../doctors/female1.png';
import doctor3 from '../doctors/male2.jpg';
import Footer from "../components/Footer";
const doctors = [
  {
    name: "Dr Sahil Kiran Pethe",
    speciality: "Urology",
    designation: "Consultant - Urology",
    location: "Pune",
    image: doctor1,
  },
  {
    name: "Dr Abhijeet Benare",
    speciality: "Cardiology",
    designation: "Consultant - Cardiology",
    location: "Pune",
    image:doctor3,
  },
  {
    name: "Dr Sneha Sharma",
    speciality: "Neurology",
    designation: "Consultant - Neurology",
    location: "Pune",
    image:doctor2,
  },
];

const FindingDoctors = () => {
  const [selectedCity, setSelectedCity] = useState("Pune");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (!selectedSpeciality || doctor.speciality === selectedSpeciality) &&
      (!selectedDoctor || doctor.name === selectedDoctor)
  );

  const specialities = [...new Set(doctors.map((doctor) => doctor.speciality))];
  const doctorNames = [...new Set(doctors.map((doctor) => doctor.name))];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-500 text-black p-6 rounded-lg text-center">
        <h1 className="text-3xl font-bold">Find a Doctor</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <select
            className="p-2 border rounded-md"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="Pune">Pune</option>
          </select>
          <select
            className="p-2 border rounded-md"
            value={selectedSpeciality}
            onChange={(e) => setSelectedSpeciality(e.target.value)}
          >
            <option value="">Select Speciality</option>
            {specialities.map((speciality) => (
              <option key={speciality} value={speciality}>
                {speciality}
              </option>
            ))}
          </select>
          <select
            className="p-2 border rounded-md"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctorNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.name}
            className="flex items-center p-4 bg-white shadow rounded-lg"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p>Speciality: {doctor.speciality}</p>
              <p>Designation: {doctor.designation}</p>
              <p className="text-gray-500">{doctor.location}</p>
              <div className="mt-2 flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  View Profile
                </button>
                <button className="px-4 py-2 bg-blue-100 text-blue-500 rounded-md">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FindingDoctors;
