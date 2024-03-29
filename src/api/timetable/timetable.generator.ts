import { MongoHelper } from "../../config/mongodb.config";
import { INotAvailableTime } from "../notAvailableTime/notAvailableTime.interface";
import { IRooms } from "../rooms/rooms.interface";
import { ISession } from "../sessions/session.interface";
import { IWorkingDays } from "../working-days/working.days.interface";

const getNotAvailableTime = () => {
  return MongoHelper.client.db("Cluster0").collection("notAvailableTimes");
};

const getSessions = () => {
  return MongoHelper.client.db("Cluster0").collection("sessions");
};

const getRooms = () => {
  return MongoHelper.client.db("Cluster0").collection("rooms");
};

export async function generateTimetable(workingDay: IWorkingDays, groups: []) {
  const notAvailableCollection: any = getNotAvailableTime();
  const sessionsCollection: any = getSessions();
  const roomsCollection: any = getRooms();

  let notAvailableTimeList: INotAvailableTime[];
  let sessionsList: ISession[];
  let roomsList: IRooms[];

  let notAvailableTimeListByLecturer: INotAvailableTime[] = new Array();
  let notAvailableTimeListByRoom: INotAvailableTime[] = new Array();
  let notAvailableTimeListByGroup: INotAvailableTime[] = new Array();
  let notAvailableTimeListBySubGroup: INotAvailableTime[] = new Array();

  let selectedSessionList: ISession[] = new Array();

  try {
    notAvailableTimeList = await notAvailableCollection.find({}).toArray();
    sessionsList = await sessionsCollection.find({}).toArray();
    roomsList = await roomsCollection.find({}).toArray();

    // Load not available time list to arrays
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

    sessionsList.forEach((session) => {
      groups.forEach((group) => {
        if (group === session.studentGroup) selectedSessionList.push(session);
      });
    });

    roomsList.forEach((room) => {
      // split session according to room
      let sLits: ISession[] = new Array();

      selectedSessionList.forEach((s) => {
        if (s.rooms[0] === room.name) {
        }
      });
    });

    let isSixtyPreffered: boolean = false;
    if (workingDay?.prefferedTimeSlots?.sixty) {
      isSixtyPreffered = true;
    }

    if (isSixtyPreffered) {
    } else {
    }

    return { success: true, message: "Success" };
  } catch (e) {
    console.error(e);
    return { success: false, message: e };
  }
}
