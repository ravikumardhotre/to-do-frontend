import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {



  API = axios.create({
    baseURL: environment.baseUrl,
    withCredentials: true,
    headers: {
        'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
    }
  })
  showSuccess: any;
  

  constructor() { }

  async updateToken() {
    this.API = axios.create({
      baseURL: environment.baseUrl,
      headers: {
        Authorization: localStorage.getItem("token")
          ? `Bearer ${localStorage.getItem("token")}`
          : "",
        "Access-Control-Allow-Credentials": true,
      },
    });
  }


  // ToDoList Service route
async getToDoList(param:any){
  return await this.API.post('/getTask',param);
  }

  async addTask(param:any){
    return await this.API.post('/createTask', param);
  }

  async updateTask(param:any){
    return await this.API.put('/updateTask', param);
  }

  async deleteTask(param:any){
    return await this.API.post('/deleteTask', param);
  }


  async userLogin(param:any){
    return await this.API.post('/login', param);
  }

  async addUser(param:any) {
    return await this.API.post('/register', param);
  }

  async getUsers() {
    return await this.API.get('/getusers');
  }

  async getAllUsers(){
    return await this.API.get('/getusers');
  }


  async updateUsers(param:any,id:any) {
    return await this.API.put('/updateuser'+id, param);
  }

  async updateUsersPassword(param:any) {
    return await this.API.put('/updateuserPassword', param);
  }

  async updatePassword(param:any) {
    return await this.API.put('/api/users/updatePassword', param);
  }

  async addCandidate(param:any) {
    return await this.API.post('/api/candidate/addCandidate', param);
  }

   async addDepartment(param:any) {
    return await this.API.post('/api/users/createDepartment', param);
  }
  async addDesignation(param:any) {
    return await this.API.post('/api/users/createDesignation', param);
  }
  async getDesignation() {
    return await this.API.get('/api/users/getAllDesignation');
  }
  async updateDesignationDetails(param:any) {
    return await this.API.post('/api/users/updateDesignationDetails', param);
  }
  async updateDepartment(param:any) {
    return await this.API.post('/api/users/updateDepartmentDetails', param);
  }

  
  async getCandidate() {
    return await this.API.get('/api/candidate/getAllCandidate');
  }
  async getHrCandidate() {
    return await this.API.get('/api/users/HR/getCandidateList');
  }
  async getCallingData(param:any) {
    return await this.API.post('/api/users/HR/getCallingData',param);
  }
  async getCandidateCV() {
    return await this.API.get('/api/candidate/getCandidateCV');
  }

  async addCandidateFeedback(param:any) {
    return await this.API.post('/api/candidate/addCandidateFeedback', param);
  }

  async getCandidateFeedback(param:any) {
    return await this.API.get('/api/candidate/getCandidateFeedback/'+param);
  }


  async getCandidateInterviewLevel(param:any) {
    return await this.API.post('/api/candidate/getCandidateInterviewRounds',param);
  }
  
  

  /////////////////////////////////////////
  async updateCandidate(param:any) {
    return await this.API.put('/api/candidate/updateCandidate', param);
  }
  async updateCandidateDetails(param:any) {
    return await this.API.post('/api/users/HR/updateCandidateDetails', param);
  }
  async updateCandidateFeedback(param:any) {
    return await this.API.put('', param);
  }

  async getAllDepartment() {
    return await this.API.get('/api/candidate/getAllDepartment');
  }
  async getDepartments() {
    return await this.API.get('/api/users/getAllDepartment');
  }
  
  async getAllDesignation(param:any) {
    return await this.API.post('/api/candidate/getAllDesignation',param);
  }
  async getDesignationFromId(param:any) {
    return await this.API.post('/api/users/getDesignationFromId',param);
  }

  async createPosition(param:any) {
    return await this.API.post('/api/users/HOD/createPosition',param);
  }
  async approvePositionById(param:any) {
    return await this.API.post('/api/users/superadmin/approvePosition',param);
  }
  async updateCandidateCVstatus(param:any) {
    return await this.API.post('/api/candidate/updateCandidateCVstatus',param);
  }
  async updateCandidateBackOutStatus(param:any) {
    return await this.API.post('/api/candidate/updateCandidateBackOutStatus',param);
  }
  async getallPosition() {
    return await this.API.get('/api/users/HOD/getAllPosition');
  }
  async getallHODPosition() {
    return await this.API.get('/api/users/HOD/getAllCreatedPosition');
  }
  async getAssignedPositions() {
    return await this.API.get('/api/users/HR/getRecruiterRequirements');
  }
  async getApprovePositions() {
    return await this.API.get('/api/users/HR/getApprovePositions');
  }

  async getApproveAssignPositions() {
    return await this.API.get('/api/users/HR/getApproveAssignPositions');
  }

  async getAllApprovedCandidates() {
    return await this.API.get('/api/users/HR/getAllApprovedCandidates');
  }
  async getAllRejectedCandidates() {
    return await this.API.get('/api/users/HR/getAllRejectedCandidates');
  }
  async getAllOnboardCandidates() {
    return await this.API.get('/api/users/HR/getAllOnboardCandidates');
  }
  async getAllFinalCandidates() {
    return await this.API.get('/api/users/HR/getAllFinalCandidates');
  }
  async getCandidateForEval() {
    return await this.API.get('/api/users/HR/getCandidateForEval');
  }
  async getRecruiterData() {
    return await this.API.get('/api/users/HR/getRecruiterList');
  }
  async startEval(param:any) {
    return await this.API.post('/api/users/HR/startEval',param);
  }
  async getallQuestionsById(param:any) {
    return await this.API.post('/api/users/HOD/getAllPositionQuestion',param);
  }
  async getQueCount(param:any) {
    return await this.API.post('/api/users/HR/getQuestionCount',param);
  }
  async getCallingFeedback(param:any) {
    return await this.API.post('/api/users/HR/getCallingFeedback',param);
  }
  async getCandidateByPositionId(param:any) {
    return await this.API.post('/api/users/HR/getPositionData',param);
  }
  // async getallQuestions() {
  //   return await this.API.post('/api/users/HOD/getAllPositionQuestionpositionId',);
  // }
  async deleteQuestionsById(param:any) {
    return await this.API.post('/api/users/HOD/deleteQuestion',param);
  }

  async deleteHr(param:any) {
    return await this.API.post('/api/users/HR/deleteassginRecruiters',param);
  }

  async getAssignTo(param:any) {
    return await this.API.post('/api/users/HR/getassginRecruiters',param);
  }

  async createQuestion(param:any) {
    return await this.API.post('/api/users/HOD/insertQuestion',param);
  }

  async addEval(param:any) {
    return await this.API.post('/api/users/HR/submitEval',param);
  }

  async addCallingStatus(param:any) {
    return await this.API.post('/api/users/HR/submitCallingFeedback',param);
  }
  async updateCandidateOnboardStatus(param:any) {
    return await this.API.post('/api/users/HR/updateCandidateOnboardStatus',param);
  }
  async submitTrackingData(param:any) {
    return await this.API.post('/api/users/HR/submitTrackingData',param);
  }
  async getTrackingData(param:any) {
    return await this.API.post('/api/users/HR/getTrackingData',param);
  }
  async allCallingData(param:any) {
    return await this.API.post('/api/users/HR/getCallingFeedback',param);
  }
  async updateTrackingData(param:any) {
    return await this.API.post('/api/users/HR/updateTrackingData',param);
  }
  async assginRecruiter(param:any) {
    return await this.API.post('/api/users/HR/assginRecruiter',param);
  }
  async addHrFeedback(param:any) {
    return await this.API.post('/api/users/HR/submitHRFeedback',param);
  }

  async getHRFeedback(param:any) {
    return await this.API.post('/api/users/HR/getHRFeedback',param);
  }

  async createScript(param:any) {
    return await this.API.post('/api/users/HOD/updatePositionScript',param);
  }


  async getUsersData() {
    return await this.API.get('/api/users/allUser');
  }

  async addLevel(param:any) {
    return await this.API.post('/api/users/HR/submitInterviewLevel',param);
  }

  async isInterviewScheduled(param:any) {
    return await this.API.post('/api/users/HR/checkCandiateInterViewList',param);
  }

  async checkPositionQuantity(param:any) {
    return await this.API.post('/api/users/HR/checkPositionQuantity',param);
  }
  
  async getevalCandidates() {
    return await this.API.get('/api/candidate/getAllCandidateEvalList');
  }
  async getAllCandidateEvalResult(param:any) {
    return await this.API.post('/api/candidate/getAllCandidateEvalResult',param);
  }
 ////////////////////////////////////////////
//  dashboard
async positionStatus(param:any) {
  return await this.API.post('/api/users/dashboard/positionStatus',param);
}

async positionOverview(param:any) {
  return await this.API.post('/api/users/dashboard/positionOverview',param);
}

async dashboardHiringOverallView(param:any) {
  return await this.API.post('/api/users/dashboard/dashboardHiringOverallView',param);
}

async recruiterOverview(param:any) {
  return await this.API.post('/api/users/dashboard/recruiterOverview',param);
}

async getDashboardCandidateData() {
  return await this.API.get('/api/users/dashboard/getDashboardCandidateData');
}

//category api

async addCategory(param:any) {
  return await this.API.post('/createCategory', param);
}
async updateCategory(param:any) {
  return await this.API.put('/updateCategory', param);
}

async getAllCategory() {
  return await this.API.get('/getCategory');
}
async getCategory() {
  return await this.API.get('/getCategory');
}
async deleteCategory(param:any) {
  return await this.API.post('/deleteCategory', param);
}


//Book Api


async addBook(param:any) {
  return await this.API.post('/createbook', param);
}
async updateBook(param:any) {
  return await this.API.put('/updateBook', param);
}

async getAllBook() {
  return await this.API.get('/getBook');
}
async getBooks() {
  return await this.API.get('/getBooks');
}
async deleteBook(param:any) {
  return await this.API.post('/deleteBook', param);
}
//student api

async addStudent(params:any) {
  return await this.API.post('/createStudent', params);
  
}

async getStudent() {
  return await this.API.get('/getStudent');
}
async updateStudent(params:any){
  return await this.API.put('/updateStudent', params);
}

async deleteStudent(param:any) {
  return await this.API.post('/deleteStudent', param);
}






}
