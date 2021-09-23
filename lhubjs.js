    var submited = document.getElementById('Submit')
    var pickup = document.getElementById("pickup")
    var requests = document.getElementById("requests")
    var frm = document.getElementsByName("requestForm")[0]
    function addRequest(){
        //localStorage.clear()
        localStorage.setItem("firstName", JSON.stringify(document.getElementById("firstname").value))
        localStorage.setItem("lastName", JSON.stringify(document.getElementById("lastname").value))
        localStorage.setItem("number",JSON.stringify(document.getElementById("number").value))
        localStorage.setItem("building", JSON.stringify(document.getElementById("building").value))
        localStorage.setItem("room", JSON.stringify(document.getElementById("floor").value))
        localStorage.setItem("floor", JSON.stringify(document.getElementById("room").value))
        localStorage.setItem("time", JSON.stringify(document.getElementById("time").value)) 
        
        frm.reset()
        return false;
    }
    submited.addEventListener("click", addRequest);

