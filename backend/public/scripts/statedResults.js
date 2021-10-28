let idButget = 0;
const getValueInput = (value) => {
  if (value == undefined) {
    return false;
  }
  console.log(value);
  //updateButgets(value)
  return (idBudget = value);
};
const updateStates = async () => {
  let mydate = parseFloat(document.getElementById("startDate").value);
  let butgetsProyect = parseFloat(document.getElementById("proyect").value);
  let versionsBut = parseFloat(document.getElementById("versions").value);

  let dataUpdate = {
    idBudget: idBudget,
    dateButget: mydate,
    proyectButgets: butgetsProyect,
    versions: versionsBut,
  };
  console.log(dataUpdate);
  let searching = await fetch("http://localhost:3000/updateStated", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  });
  location.reload(); //cargar la paginba
};
const createStated = async () => {
  let dateCreated = parseFloat(
    document.getElementById("startDateCreated").value
  );
  let proyectName = parseFloat(document.getElementById("proyectCreated").value);
  let versionCreate = parseFloat(
    document.getElementById("versionsCreated").value
  );

  let dataCreate = {
    date: dateCreated,
    proyect: proyectName,
    versions: versionCreate,
  };
  console.log(dataCreate);
  let searching = await fetch("http://localhost:3000/createStated", {
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
