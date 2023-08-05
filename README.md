## Bonus Section Algorithm

This is simply the plain implementatioin of the bonus section given in the case study.

> Note: To view and interact with the interactive version of the section, checkout the **main branch**: `git checkout main`

## Background

<p>You are working on an online queuing system for clinics that only accept walk-in patients. Through this system, walk-in patients can now queue online and receive real-time updates to their waiting time. Unlike appointments, patients who queue online cannot select their preferred time slots – the system helps them secure a spot in the queue and provides real-time updates to their waiting time based on their queue status.</p> 
<br/>
<p>The patients’ waiting times largely depend on (1) the average consultation time of their doctors, and (2) the amount of persons ahead of them in the queue. The longer it takes for a doctor to consult each patient, the longer the remaining patients in the queue have to wait. Similarly, the greater the amount of persons ahead of a patient in the queue, the longer the patient has to wait. 
There are many factors that can affect the consultation time. These include emergencies, additional treatments, etc. Moreover, the average consultation time differs from doctor to doctor. For the purpose of this case study, the average consultation time(s) will be given to you and you shall assume those value(s) when working on your answers.</p>
<br/>

### Case Study

Please explain your answers and provide workings, where applicable.
Clinic X has 1 doctor. The doctor’s average consultation time is 3 minutes per patient. Currently, there are 5 patients in the queue and the doctor is not seeing any patient. John decides to queue online and he becomes the 6th patient in the queue, having 5 patients ahead of him. Since there are 5 patients ahead and each taking 3 minutes on average, the waiting time for John is estimated to be 15 minutes.
<br/>

#### Question 1:

When should the countdown in waiting time, i.e. from 15 minutes, start for John? The moment he queues online, or when the doctor starts seeing the first patient in the queue?
<br/>

#### Answer:

The countdown timer should start only when the doctor starts the consultation with the patient. John may have joined the queue at 2pm. Based off the calculations given above (3(minutes) \* 5 (patients) = 15 minutes), if we start the countdown timer the moment John joins the queue, he would expect to consult the doctor at 215pm. However, if the doctor hasn’t provided consultation to the first patient, we cannot determine the expected consultation time for John or any other patients for that matter.
<br/>

#### Solution:

<p>We could set up a feature for the doctors to send statuses to the system. This could include time to first consultation (they could be attending to an emergency or simply on a short break), whether or not they have started with the first patient in the queue and if there are any expected delays or if any patient has cancelled their consultation. 
That way, there is constant communication between the doctors -> servers -> patients, and with that, we could potentially provide accurate average waiting times.  Since it is real-time, we can perform recalculations instantly for patients to be notified with the updated  average waiting time.</p>

#### Question 2:

Suppose the case has changed – at the time John queues online, there are 7 patients ahead of him and the doctor is currently seeing one of the 7 patients, Peter. Assuming that the doctor’s average consultation time per patient is 4 minutes, what will John’s estimated waiting time be given that, at the time John joins the queue, Peter has already gone to the consultation room for the following durations?
(a) 2 minutes (b) 5 minutes
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

<p>Clinic Y has 2 doctors, Doctor A and Doctor B. The average consultation times per patient are 3 minutes for Doctor A and 4 minutes for Doctor B. Currently, there are 14 patients in the queue and both doctors are not seeing any patient. John decides to queue online and he becomes the 15th patient in the queue, with 14 patients ahead of him. </P>

#### Question 1:

<p>Assuming that all the patients in the queue, including John, have no specific preferences for the doctors they want to consult, what will John’s estimated waiting time be when he joins the queue? </p>
<br/>

#### Answer:

<p>24 minutes. With 15 patients in line, given that the doctors take 3 and 4 minutes individually to provide consultation, we see a pattern that at the 12th minute, each doctor would have been estimated to have done consulting a total of 7 patients. That makes one block. Given that John joins the queue at number 15, this would  place him as the first person in the 3rd block of patients. So that means he has to wait an estimated 24 minutes for his consultation. </P>

#### Question 2:

<p>Suppose the case has changed – at the time John queues online, there are 14 patients ahead of him and while Doctor A is not seeing any patient (i.e. Doctor A is available), Doctor B is currently seeing the first patient, Lucas, who has been in the consultation room for the past 2 minutes. Assuming that the average consultation times per patient for both doctors remain as 3 minutes and 4 minutes respectively, what will John’s estimated waiting time be when he joins the queue? </P>
