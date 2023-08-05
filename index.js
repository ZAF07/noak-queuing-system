/* 
This is the interactive version of the queuing system.

1. You can add/remove doctors from the clinic
2. You can list all the doctors in the clinic
3. You can get a patient's average waiting time to consultation

*/
import chalk from "chalk";
import { question, questionInt } from "readline-sync";
import Clinic from "./clinic.js";
import Doctor from "./doctors.js";

// TODO: Implement seperation of concerns here. This goes to utils but utils cannot know anything regarding the domain of the application
// So we should initialise the Doctor class somewhere else
const addDoctorToClinic = (clinic) => {
  console.log(chalk.bgYellow("\n--- Add Doctor ---"));
  const avgTime = parseInt(
    question(
      chalk.bgYellow.white("Enter average consultation time (in minutes): ")
    )
  );
  const doctorName = question(chalk.bgYellow("Enter doctor name: "));

  const newDoctor = new Doctor(avgTime, doctorName);
  clinic.addDoctor(newDoctor);

  console.log(chalk.bgGreenBright("Doctor added successfully!\n"));
};

const removeDoctor = (clinic) => {
  console.log(chalk.bgYellowBright("\n--- Remove Doctor ---"));
  const docName = question(chalk.bgRedBright("Enter Doctor name: "));
  clinic.removeDoctor(docName);
};

const main = () => {
  const clinic = new Clinic();

  while (true) {
    console.log(chalk.bgGrey("\n--- Clinic Management Menu ---"));
    console.log("1. Add Doctor");
    console.log("2. List Doctors");
    console.log("3. Remove doctor");
    console.log("4. Get average waiting time");
    console.log("0. Exit");

    const choice = questionInt("Enter your choice: ");

    switch (choice) {
      case 1:
        addDoctorToClinic(clinic);
        break;
      case 2:
        clinic.listDoctors();
        break;
      case 3:
        removeDoctor(clinic);
        break;
      case 4:
        clinic.getWaitTime(clinic);
        break;
      case 0:
        console.log("Exiting...");
        process.exit(0);
      default:
        console.log("Invalid choice. Try again.");
    }
  }
};
main();

// const removeDoctor = (clinic) => {
//   console.log(chalk.bgYellowBright("\n--- Remove Doctor ---"));
//   const docName = question(chalk.bgRedBright("Enter Doctor name: "));

//   clinic.removeDoctor(docName);
// };
