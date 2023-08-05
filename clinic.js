import chalk from "chalk";

/**
 * Represents a Clinic that manages patient queues and doctors.
 */
export default class Clinic {
  constructor() {
    this.doctors = [];
  }

  /**
   * Removes a doctor from the clinic by name.
   * @param {string} name - The name of the doctor to be removed.
   */
  removeDoctor(docName) {
    // If there are no doctors currently in the clinic, return early
    if (this.doctors.length < 1) {
      console.log(
        chalk.redBright(
          "\nThere are no doctors to remove currently. Go ahead and add them..."
        )
      );
      return;
    }

    const index = this.doctors.findIndex(
      (doctor) => doctor.docName === docName
    );
    if (index !== -1) {
      this.doctors.splice(index, 1);
      console.log(
        chalk.greenBright(
          `Doctor "${docName}" has been removed from the clinic.`
        )
      );
    } else {
      console.log(
        chalk.redBright(`Doctor "${docName}" not found in the clinic.`)
      );
    }
  }

  /**
   * Adds a new doctor to the clinic.
   * @param {Doctor} doctor - The doctor to be added to the clinic.
   */
  addDoctor(doctor) {
    doctor.roomName = this.doctors.length;
    this.doctors.push(doctor);
  }

  /**
   * Logs the list of available doctors in the clinic.
   */
  listDoctors() {
    // If there are no doctors currently in the clinic, return early..
    if (this.doctors.length < 1) {
      console.log(
        chalk.redBright(
          "\nThere are currently no doctors. Go ahead and add them.."
        )
      );
      return;
    }

    console.log(chalk.green("\nList of available doctors:\n"));
    this.doctors.forEach((doctor) => {
      console.log(
        chalk.greenBright(
          `Doctor name: Dr ${doctor.docName}, Average consult time: ${doctor.avgConsultTime}, Room name: ${doctor.roomName}`
        )
      );
    });
  }

  /**
   * Logs the estimated waiting time a user might expect to wait for consultation.
   */
  getWaitTime(qNum) {
    // Make sure patients enter valid Q number
    if (qNum < 1) {
      console.log(
        chalk.redBright(
          '\nYou have entered an incorrect Q number. Please enter a valid Q number starting from "1"...'
        )
      );
      return;
    }

    // Get the number of doctors available in the clinic
    const availDoctors = this.doctors.length;

    // If there are no doctors, we cannot calculate a patient's estimated waiting time
    if (availDoctors < 1) {
      console.log(
        chalk.redBright(
          "\nSorry as there are no available doctors right now, we cannot calculate your estimated waiting time..."
        )
      );
      return;
    }

    // Determine the patient's default assigned doctor
    const assignedDoc = this.doctors[qNum % availDoctors];

    // Get the assigned doctor's avg consult time
    const avgConsultTime = assignedDoc.avgConsultTime;

    // Calculate the wait time
    let estWaitTime = avgConsultTime * Math.floor((qNum - 1) / availDoctors);
    if (qNum === 1) {
      estWaitTime = 0;
    }

    // Calculate the number of patients ahead of the current patient for informational purposes..
    const patientsAhead = Math.floor((qNum - 1) / availDoctors);
    const docName = assignedDoc.docName;
    const roomName = assignedDoc.roomName;
    console.log(
      `\n${chalk.greenBright(
        "Doctor assigned"
      )}: Dr ${docName}, ${chalk.greenBright(
        "Room Number:"
      )} ${roomName}, ${chalk.greenBright(
        "Average consult time: "
      )} ${avgConsultTime}, ${chalk.greenBright(
        "Patients ahead of you: "
      )} ${patientsAhead}, ${chalk.greenBright(
        "Estimated wait time: "
      )} ${estWaitTime}\n`
    );
  }
}
