const validateLogin = async () => {
  let emailUserTi = document.getElementById("typeEmailX").value;
  let passwordUserTi = document.getElementById("typePasswordX").value;

  let dataUpdate = {
    emailUserTi,
    passwordUserTi,
  };
  console.log(dataUpdate);
  let searching = await fetch("http://localhost:3000/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  });
  //location.reload(); //cargar la paginba
  try {
    const data = await searching.json();
    console.log(data);
    localStorage.setItem("myData", data.token);
  } catch (error) {
    alert("Error usuario no encontrado");
  }
};
