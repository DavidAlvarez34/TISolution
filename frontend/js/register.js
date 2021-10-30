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
};
