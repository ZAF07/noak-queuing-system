/**
 * Represents a Doctor in the clinic.
 * @typedef {Object} Doctor
 * @property {string} docName - The name of the doctor.
 * @property {string} roomName - The name of the consultation room.
 * @property {number} avgConsultTime - The average consultation time of the doctor (in minutes).
 */
export default class Doctor {
  constructor(avgConsultTime, docName) {
    this.docName = docName;
    this.avgConsultTime = avgConsultTime;
    this.roomName = "";
  }
}

/*
  TODO:
  The doctor class should handle logic regarding which patients are they going to provode consultations to.
  Based on the patient's preferences, we should push that patient into the doctor's queue 
  
  */
