const createNewUser = async () => {
  const sendEmail = document.getElementById("typeEmailX").value;
  const sendPassword = document.getElementById("typePasswordX").value;
  if (sendEmail == null || sendEmail == "") {
    alert("Debes llenar el campo email");
    return false;
  }
  if (sendPassword == null || sendPassword == "") {
    alert("Debes llenar el campo contraseña");
    return false;
  }
  let dataCreate = {
    sendEmail,
    sendPassword,
  };
  console.log(dataCreate);
  let searching = await fetch("http://localhost:3000/registerUser", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataCreate),
  });
  alert("Uuarios registrados");
};
