import chalk from "chalk";
import { question, questionInt } from "readline-sync";

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
    // doctor.roomName = "Odd Room";
    doctor.roomName = this.doctors.length;
    // if (this.doctors.length % 2 == 0) {
    //   doctor.roomName = "Even Room";
    // }
    this.doctors.push(doctor);
  }

  /**
   * Logs the list of available doctors in the clinic.
   */
  listDoctors() {
    if (this.doctors.length < 1) {
      console.log(
        chalk.redBright(
          "There are currently no doctors. Go ahead and add doctors.."
        )
      );
      return;
    }

    console.log(chalk.green("\nList of available doctors:\n"));
    this.doctors.forEach((doctor) => {
      console.log(
        chalk.greenBright(
          `Doctor name: ${doctor.docName}, Average consult time: ${doctor.avgConsultTime}, Room name: ${doctor.roomName}`
        )
      );
    });
  }

  /**
   * Logs the estimated waiting time a user might expect to wait for consultation.
   */
  getWaitTime() {
    console.log(chalk.bgYellowBright("\n--- Get average wait time ---"));
    const qNum = parseInt(
      question(chalk.bgYellowBright("Enter your Q number: "))
    );
    // Get the number of doctors available in the clinic
    const availDoctors = this.doctors.length;

    // Determine the patient's doctor
    const assignedDoc = this.doctors[qNum % availDoctors];

    // Get the assigned doctor's avg consult time
    const avgConsultTime = assignedDoc.avgConsultTime;

    // Calculate the wait time
    let estWaitTime = avgConsultTime * Math.floor((qNum - 1) / availDoctors);
    if (qNum === 1) {
      estWaitTime = 0;
    }

    const docName = assignedDoc.docName;
    const roomName = assignedDoc.roomName;
    const patientsAhead = Math.floor((qNum - 1) / availDoctors);
    console.log(
      `\nDoctor assigned: ${chalk.greenBright(
        docName
      )}, Room name: ${chalk.greenBright(
        roomName
      )}, Average consult time: ${chalk.greenBright(
        avgConsultTime
      )}, Patients ahead of you: ${chalk.greenBright(
        patientsAhead
      )}, Estimated wait time: ${chalk.greenBright(estWaitTime)}\n`
    );
  }
}
