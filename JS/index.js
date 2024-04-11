function generate(){
    var name=document.getElementById("YourName").value
    var dob=document.getElementById("YourDOB").value
    var asciName=""
    
   
    
    for(let i = 0; i <name.length; i++)
    {
        asciName+=name.charCodeAt(i)
    }
    
    var firstpart=asciName+22092022
    var date=dob.replace(/-/g,"")
    var secondpart=date+25092022
    var result=firstpart+secondpart
    document.getElementById("LicenseCodeGenerator").textContent=result
} 

