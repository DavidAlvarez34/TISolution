let idButget;
const getValueInput = (value) => {
  if (value == undefined) {
    return false;
  }
  console.log(value);
  //updateButgets(value)
  return (idBudget = value);
};
const updateButgets = async () => {
  let mydate = document.getElementById("startDate").value;
  let butgetsProyect = document.getElementById("proyect").value;
  let versionsBut = document.getElementById("versions").value;

  let dataUpdate = {
    idBudget: idBudget,
    dateButget: mydate,
    proyectButgets: butgetsProyect,
    versions: versionsBut,
  };
  console.log(dataUpdate);
  let searching = await fetch("http://localhost:3000/updateButgets", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  });
  location.reload(); //cargar la paginba
};
const createButget = async () => {
  let dateCreated = document.getElementById("startDateCreated").value;
  let proyectName = document.getElementById("proyectCreated").value;
  let versionCreate = document.getElementById("versionsCreated").value;

  let dataCreate = {
    date: dateCreated,
    proyect: proyectName,
    versions: versionCreate,
  };
  console.log(dataCreate);
  let searching = await fetch("http://localhost:3000/createButgets", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataCreate),
  }).then((response) => {
    console.log("validacion");
    if (!response.ok) {
      alert("Hubo un error no se encuentra el id");
    }
  });
  location.reload();
};
