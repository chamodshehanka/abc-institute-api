import { MongoHelper } from "../../config/mongodb.config";
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
  let selectedSession: ISession[];

  try {
    sessionsList = await sessionsCollection.find({}).toArray();
    sessionsList.forEach((session) => {
      session.lecturers.forEach((lecturer) => {
        if (lecturerName === lecturer) {
          selectedSession.push(session);
        }
      });
    });
  } catch (e) {
    console.error(e);
  }
}

export function generateTimetableByStudentGroup(groupId: string) {
  const notAvailableCollection: any = getNotAvailableTime();
}

export function generateTimetableByRoom(roomName: string) {
  const notAvailableCollection: any = getNotAvailableTime();
}
