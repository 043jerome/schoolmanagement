/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN TeacherApiGenerated.js PLEASE EDIT ../TeacherApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class TeacherApiGenerated {

  static contextUrl = properties.endpoint + "/teacher";

  // CRUD METHODS

  /**
  * teacherService.create
  *   @description CRUD ACTION create
  *
  */
  static createTeacher(teacher) {
    return axios.post(TeacherApiGenerated.contextUrl, teacher )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * teacherService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteTeacher(id) {
    return axios.delete(TeacherApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * teacherService.findBy_courses
  *   @description CRUD ACTION findBy_courses
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_courses(id) {
    return axios.get(TeacherApiGenerated.contextUrl + "/findBy_courses/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * teacherService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneTeacher(id) {
    return axios.get(TeacherApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * teacherService.list
  *   @description CRUD ACTION list
  *
  */
  static getTeacherList() {
    return axios.get(TeacherApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * teacherService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveTeacher(teacher) {
    return axios.post(TeacherApiGenerated.contextUrl + "/" + teacher._id, teacher )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default TeacherApiGenerated;
