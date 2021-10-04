const validateLoginChange = () => {
    let email = document.getElementById("typeEmailX").value;
    let pass = document.getElementById("typePasswordX").value;
    let passChange = document.getElementById("typePasswordUpdate").value;
    console.log(passChange);
    if (email == null || email == "" ) {
      alert("Please enter the username.");
      return false;
    }
    if (pass == null || pass == "" || passChange==null || passChange=="") {
      alert("Please enter the password.");
      return false;
    }
    loginChangeUser(email,pass,passChange);
  };
  
  const loginChangeUser = async (email,pass,passChange) => {
   
    let dataInsert = {
      email: email,
      paswordCurrent: pass,
      paswordChange: passChange
    };
    console.log(dataInsert);
    try {
      let url = await fetch("http://localhost:3000/changePassTi", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInsert),
    }).then(response =>{ 
    console.log(response.status);
      if(response.status===402){
        alert("Error usuario no encontardo")
      }else{
        return window.location="./index.html";
      }
  }).catch(error => console.error('Error:', error));
    } catch (error) {
      console.log(error);
    }
  }  