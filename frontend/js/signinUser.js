const validateLogin = () => {
  let email = document.getElementById("typeEmailX").value;
  let pass = document.getElementById("typePasswordX").value;

  if (email === null || email === "") {
    alert("Please enter the username.");
    return false;
  }
  if (pass === null || pass === "") {
    alert("Please enter the password.");
    return false;
  }
  loginSigningUser(email, pass);
};

const loginSigningUser = async (email, pass) => {
  console.log(email, pass);
  let dataInsert = {
    email: email,
    userPasword: pass,
  };
  let url = await fetch("http://localhost:3000/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataInsert),
  }).catch(function (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });
  try {
    const data = await url.json();
    console.log(data);
    localStorage.setItem("myData", data.data);
    sessionStorage.setItem("emailUser", email);
    alert("Iniciando cession");
    window.location = "./ti.html";
  } catch (error) {
    localStorage.removeItem("myData");
    sessionStorage.removeItem("emailUser");
    alert("Error usuarios y contraseñas incorrectos o problemas de conexion");
    location.reload();
  }

  //Regreso del token
  // const data = await url.json();
  // console.log(data.token);
  // if (data.token != "Usuario no autenticado.") {
  //   //localStorage.setItem('Mondav_token',JSON.stringify(data.token)) //Manda el token al local storage
  //   //alert('token again', await JSON.parse(localStorage.getItem('Mondav_token')))//Obtiene el token desde el local storage

  //   let cookie = JSON.stringify(data.token); //Manda el token como una cookie
  //   document.cookie = "Mondav_token = "+cookie+"; max-age = 3600; path = /";
  //   //alert('token again', await JSON.parse(document.cookie)) //Obtiene el token desde la cookie
  //   window.location="./index.html"; //Redirigir a la pagina
  // } else {
  //   alert("Usuario o contraseña incorrectos.")
  // }
};
