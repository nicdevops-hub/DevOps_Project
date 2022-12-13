const baseUrl = "http://localhost:8080/"


export const environment = {
  production: true,
  urls: {
    getEmpDetailsUrl: baseUrl + "springTestApi/getEmpNames",

    getStuDetailsUrl: baseUrl + "springTestApi/getStuNames",

    saveEmpDEtailsUrl: baseUrl + "springTestApi/getEmpNames",

    saveStuDetailosUrl: baseUrl + "springTestApi/saveStuDetails",

    updateStudentDetails: baseUrl + "springTestApi/updateBankDetails",
  },
};
