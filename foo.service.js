var employees=require('./employees.json')

module.exports.getEmployees=async(req,res,next)=>{
    console.log("testing..");
    res.send(employees);
};


module.exports.getEmployeeById=async(req,res,next)=>{
    var role=req.params.role;
    var e=employees.find(x=>x.role==role);
    res.send(e);
}


