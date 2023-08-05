// List of doctors ...
const doctors = [
  {
    docName: "Dr Jack",
    avgConsultTime: 3,
    roomNumber: 1,
  },
  {
    docName: "Dr Tim",
    avgConsultTime: 5,
    roomNumber: 2,
  },
];

/**
 * Calculates the estimated waiting time for a patient in a clinic queue.
 *
 * @param {number} qNum - The position of the patient in the queue.
 * @param {Doctor[]} doctors - An array of Doctor objects representing available doctors.
 * @returns {string} A formatted string with the patient's queue details, including wait time.
 *
 * @description
 * The `calcWaitTime` function calculates the estimated waiting time for a patient
 * based on their position in the queue and the average consultation time of the available doctors.
 * It uses the Round Robin algorithm to assign patients to doctors in a cyclic manner.
 *
 * **Time Complexity:** O(1) - The function performs a fixed number of operations,
 * regardless of the number of available doctors, resulting in constant time complexity.
 */
const calcWaitTime = (qNum, doctors) => {
  // Get the number of doctors available in the clinic
  const availDoctors = doctors.length;

  // Determine the patient's doctor
  const assignedDoc = doctors[qNum % availDoctors];

  // Get the assigned doctor's avg consult time
  const avgConsultTime = assignedDoc.avgConsultTime;

  // Calculate the wait time
  let estWaitTime = avgConsultTime * Math.floor((qNum - 1) / availDoctors);
  if (qNum === 1) {
    estWaitTime = 0;
  }

  //  Calculate the total number of patients ahead of current patient..
  const patientsAhead = Math.floor((qNum - 1) / availDoctors);
  const docName = assignedDoc.docName;
  const roomNumber = assignedDoc.roomNumber;
  console.log(
    `\nAt Q number ${5}, with ${availDoctors} available doctors with varying consult time, here are your Q details: \n`
  );
  return `\nDoctor assigned: ${docName}, Room number: ${roomNumber}, Average consult time: ${avgConsultTime}, Patients ahead of you: ${patientsAhead}, Estimated wait time: ${estWaitTime}\n`;
};

const result = calcWaitTime(5, doctors);
console.log("response: ", result);
