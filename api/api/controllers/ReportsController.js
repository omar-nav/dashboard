module.exports = {
  getReports: (req, res) => {
    console.log("Get reports!")
    console.log(req.body)
    ReportsService.getReportsFromDB(res)
  }
}
