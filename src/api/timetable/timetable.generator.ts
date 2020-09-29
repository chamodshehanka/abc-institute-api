import { MongoHelper } from "../../config/mongodb.config";
import { INotAvailableTime } from "../notAvailableTime/notAvailableTime.interface";
import { ISession } from "../sessions/session.interface";

const getNotAvailableTime = () => {
  return MongoHelper.client.db("Cluster0").collection("notAvailableTimes");
};

const getSessions = () => {
  return MongoHelper.client.db("Cluster0").collection("sessions");
};

export async function generateTimetableByLecturer(lecturerName: string) {
  const notAvailableCollection: any = getNotAvailableTime();
  const sessionsCollection: any = getSessions();

  let sessionsList: ISession[];
  let notAvailableTimeList: INotAvailableTime[];

  let selectedSession: ISession[] = new Array();
  let selectedNotAvailableTimeList: INotAvailableTime[] = new Array();

  try {
    sessionsList = await sessionsCollection.find({}).toArray();
    sessionsList.forEach((session) => {
      session.lecturers.forEach((lecturer) => {
        if (lecturerName === lecturer) {
          selectedSession.push(session);
        }
      });
    });

    notAvailableTimeList = await notAvailableCollection.find({}).toArray();
    notAvailableTimeList.forEach((notAvailableTime) => {
      if (
        notAvailableTime.type === "Lecturer" &&
        notAvailableTime.name === lecturerName
      ) {
        selectedNotAvailableTimeList.push(notAvailableTime);
      }
    });

    console.log(selectedNotAvailableTimeList, selectedSession);
  } catch (e) {
    console.error(e);
  }
}

export async function generateTimetableByStudentGroup(groupId: string) {
  const notAvailableCollection: any = getNotAvailableTime();
  const sessionsCollection: any = getSessions();

  let notAvailableTimeList: INotAvailableTime[];
  let sessionsList: ISession[];

  let notAvailableTimeListByLecturer: INotAvailableTime[] = new Array();
  let notAvailableTimeListByRoom: INotAvailableTime[] = new Array();
  let notAvailableTimeListByGroup: INotAvailableTime[] = new Array();
  let notAvailableTimeListBySubGroup: INotAvailableTime[] = new Array();

  let selectedSessionList: ISession[] = new Array();

  try {
    notAvailableTimeList = await notAvailableCollection.find({}).toArray();
    notAvailableTimeList.forEach((notAvailableTime) => {
      switch (notAvailableTime.type) {
        case "Lecturer":
          notAvailableTimeListByLecturer.push(notAvailableTime);
          break;
        case "Group":
          notAvailableTimeListByGroup.push(notAvailableTime);
          break;
        case "SubGroup":
          notAvailableTimeListBySubGroup.push(notAvailableTime);
          break;
        case "Room":
          notAvailableTimeListByRoom.push(notAvailableTime);
          break;
        default:
          console.log("Invalid type");
      }
    });

    sessionsList = await sessionsCollection.find({}).toArray();
    sessionsList.forEach((session) => {
      if (groupId === session.studentGroup) {
        selectedSessionList.push(session);
      }
    });

    selectedSessionList.forEach((session) => {
      //loop to get time slots
      //  add room prop later
      const { lecturers, studentGroup } = session;

      let count = 0;
      let startTime = "";
      let endTime = "";
      let day = "Monday";
      let lecturerCount = 0;

      lecturers.forEach(() => {
        let lecturerNotAvailableTime: INotAvailableTime;

        notAvailableTimeListByLecturer.forEach((l) => {
          if (l.day === day && l.stime === startTime && l.ltime === endTime) {
            lecturerNotAvailableTime = l;
          }

          if (lecturerNotAvailableTime === undefined) {
            lecturerCount++;
          }

          if (lecturers.length === lecturerCount) count++;
        });
      });

      if (count === 1) {
        // Next conditions
      } else {
        // break
      }
    });
  } catch (e) {
    console.error(e);
  }
}

export function generateTimetableByRoom(roomName: string) {
  const notAvailableCollection: any = getNotAvailableTime();
}
