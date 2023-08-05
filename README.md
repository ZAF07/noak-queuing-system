# Table of Contents

- [Section 1](#Background)
- [Section 2](#Question-1)
- [Section 3](#section-3)

> NOTE: This is the interactive version of the case study.
> For simplicity, assume all the patients in the queue have no preference for the doctors they want to consult and all the doctors are available and not seeing any patient initially

**You will find the answers to the case study included in this README doc as well.(Scroll down to view)**

> You can:
>
> 1.  Add/remove doctors from the clinic
> 2.  List all the doctors in the clinic
> 3.  Get a patient's average waiting time to consultation

To view the plain algorithm, checkout the **bonus branch**: `git checkout bonus`

**Starting the application locally**

1. Clone the repo into your local machime
2. Run `npm install` to install all the dependencies
3. Run `npm start` to start the CLI app

## Background

**You are working on an online queuing system for clinics that only accept walk-in patients. Through this system, walk-in patients can now queue online and receive real-time updates to their waiting time. Unlike appointments, patients who queue online cannot select their preferred time slots – the system helps them secure a spot in the queue and provides real-time updates to their waiting time based on their queue status.**
<br/>

**The patients’ waiting times largely depend on (1) the average consultation time of their doctors, and (2) the amount of persons ahead of them in the queue. The longer it takes for a doctor to consult each patient, the longer the remaining patients in the queue have to wait. Similarly, the greater the amount of persons ahead of a patient in the queue, the longer the patient has to wait.**
**There are many factors that can affect the consultation time. These include emergencies, additional treatments, etc. Moreover, the average consultation time differs from doctor to doctor. For the purpose of this case study, the average consultation time(s) will be given to you and you shall assume those value(s) when working on your answers.**
<br/>

### Case Study

**Please explain your answers and provide workings, where applicable.**

**Clinic X has 1 doctor. The doctor’s average consultation time is 3 minutes per patient. Currently, there are 5 patients in the queue and the doctor is not seeing any patient. John decides to queue online and he becomes the 6th patient in the queue, having 5 patients ahead of him. Since there are 5 patients ahead and each taking 3 minutes on average, the waiting time for John is estimated to be 15 minutes.**
<br/>

#### Question 1:

**When should the countdown in waiting time, i.e. from 15 minutes, start for John? The moment he queues online, or when the doctor starts seeing the first patient in the queue?**
<br/>

#### Answer:

<p>The countdown timer should start only when the doctor starts the consultation with the first patient. John may have joined the queue at 2pm. Based off the calculations given above (3(minutes) \* 5 (patients) = 15 minutes), if we start the countdown timer the moment John joins the queue, he would expect to consult the doctor at 215pm. However, if the doctor hasn’t provided consultation to the first patient, we cannot determine the expected consultation time for John or any other patients for that matter.</p>
<br/>

#### Solution:

<p>We could set up a feature for the doctors to send statuses to the system. This could include time to first consultation (they could be attending to an emergency or simply on a short break), whether or not they have started with the first patient in the queue and if there are any expected delays or if any patient has cancelled their consultation. 
That way, there is constant communication between the doctors -> servers -> patients, and with that, we could potentially provide accurate average waiting times.  Since it is real-time, we can perform recalculations instantly for patients to be notified with the updated  average waiting time.</p>

#### Question 2:

**Suppose the case has changed – at the time John queues online, there are 7 patients ahead of him and the doctor is currently seeing one of the 7 patients, Peter. Assuming that the doctor’s average consultation time per patient is 4 minutes, what will John’s estimated waiting time be given that, at the time John joins the queue, Peter has already gone to the consultation room for the following durations?**
**(a) 2 minutes (b) 5 minutes**
<br/>

#### Answers:

**A. 26 B. 24**
<br/>

**Part A:**

<p>John will have to wait a total of 26 minutes. Calculations are 4 minutes average doctor consultation time x 6 (full average duration for people who are ahead of John) + 2 (time remaining for Peter’s consultation)</P>

**Part B:**

<p>John will have to wait 24 mins on average (4 minutes per 6 people still in the queue),  (assuming that Peter will be done with his consultation anytime now given that the doctor has already gone over the average consultation time)</p>
<br/>

#### Case Study 2

**Clinic Y has 2 doctors, Doctor A and Doctor B. The average consultation times per patient are 3 minutes for Doctor A and 4 minutes for Doctor B. Currently, there are 14 patients in the queue and both doctors are not seeing any patient. John decides to queue online and he becomes the 15th patient in the queue, with 14 patients ahead of him.**

#### Question 1:

**Assuming that all the patients in the queue, including John, have no specific preferences for the doctors they want to consult, what will John’s estimated waiting time be when he joins the queue?**
<br/>

#### Answer:

<p>John's estimated waiting time could be either 24 or 21 minutes depending on which doctor was automatically assigned to him (since all patients had no preferences for the doctors they want to consult). </p>

#### Solution

<p>To achieve concsistency here, we should implement server-side logic to first check if patients have any preferences for the doctors they consult. If so, add them them to the list of patients assigned to each doctor and to automatically assign them to Doctors if they don't have preferences. We could implement the round-robin algorithm among many other load balancing algorithm for patients W/O any preferences.</p>

<p>Upon receiving the request from a user to check thier waiting time (now that we already know which doctor a patient is assigned to), we can simply calculate each patient's waiting time by multiplying the doctor's estimated consult time by the number of patients in that doctors list,</p>

#### Question 2:

**Suppose the case has changed – at the time John queues online, there are 14 patients ahead of him and while Doctor A is not seeing any patient (i.e. Doctor A is available), Doctor B is currently seeing the first patient, Lucas, who has been in the consultation room for the past 2 minutes. Assuming that the average consultation times per patient for both doctors remain as 3 minutes and 4 minutes respectively, what will John’s estimated waiting time be when he joins the queue?**

### Answer:

<p>John's estimated time would be either 21 or 22 minutes depending on which doctor was assigned to him considering that all patients here also has np preference on which doctor they would want to consult. The calculations remain the same as the above except that if John was assigned to Doctor B, and since Doctor B has already spent half his estimated consultation time, we could assume a deduction of total time by 2 minutes (half of Doctor B's average consultation time)</p>
