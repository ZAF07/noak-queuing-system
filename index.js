/* 
This is the interactive version of the queuing system.

For simplicity, assume all the patients in the queue have no preference for the doctors they want to consult and all the doctors are available and not seeing any patient initially

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
      chalk.bgYellow.white("Enter average consultation time (in minutes): \t")
    )
  );
  const doctorName = question(chalk.bgYellow("Enter doctor name: \t"));

  const newDoctor = new Doctor(avgTime, doctorName);
  clinic.addDoctor(newDoctor);

  console.log(chalk.bgGreenBright("Doctor added successfully!\n"));
};

const removeDoctor = (clinic) => {
  console.log(chalk.bgYellowBright("\n--- Remove Doctor ---"));
  const docName = question(chalk.bgRedBright("Enter Doctor name: \t"));
  clinic.removeDoctor(docName);
};

const getWaitTime = (clinic) => {
  console.log(chalk.bgYellowBright("\n--- Get average wait time ---"));
  const qNum = parseInt(
    question(chalk.bgYellowBright("Enter your Q number: \t"))
  );
  clinic.getWaitTime(qNum);
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
        getWaitTime(clinic);
        break;
      case 0:
        console.log("Exiting...");
        process.exit(0);
      default:
        console.log(
          chalk.redBright(
            "Invalid choice. Read the options and enter a valid one."
          )
        );
    }
  }
};
main();
