let idButget;
let token;
const showButget = async () => {
  token = localStorage.getItem("myData");
  console.log("El token ", token);
  const HTMLResponse = document.querySelector(".viewButget");
  const sendEmail = sessionStorage.getItem("emailUser");
  if (sendEmail == null) {
    alert("Debes logearte");
    window.location = "./index.html";
  }
  let data = {
    email: sendEmail,
  };
  console.log("My email", sendEmail);
  let url = await fetch("http://localhost:3000/ti", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
  const date = await url.json(url);
  console.log(date);
  for (let i = 0; i < date.showButgets.length; i++) {
    tpl = `
    <tr>
             <td>
                    ${date.showButgets[i].idBudget}
                            </td>
                            <td>
                            ${date.showButgets[i].CreationDate}
                            </td>
                            <td>
                            ${date.showButgets[i].project}
                            </td>
                            <td>
                            ${date.showButgets[i].versions}
                            </td>
                            <td>
                                <a type="button" onclick="valueId(${date.showButgets[i].idBudget})"  class="btn btn-primary "
                                    data-bs-toggle="modal" data-bs-target="#modalForm">
                                    Editar
                                </a>
                                
                                <button type="button" onclick="valueId(${date.showButgets[i].idBudget})" class="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal3">
                                    Eliminar
                                </button>

                            </td>
                        </tr>
     `;
    HTMLResponse.innerHTML += `${tpl}`;
  }
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
showButget();
const valueId = async (valor) => {
  idButget = valor;
  console.log("valor del id: ", idButget);
};
const updateButgets = async () => {
  let mydate = document.getElementById("startDate").value;
  let butgetsProyect = document.getElementById("proyect").value;
  let versionsBut = document.getElementById("versions").value;

  let dataUpdate = {
    idBudget: idButget,
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
const deleteButgets = async () => {
  let searching = await fetch("http://localhost:3000/delete/" + idButget, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  location.reload(); //cargar la paginba
};

const stopSesion = () => {
  token = "";
  localStorage.removeItem("myData");
  sessionStorage.removeItem("emailUser");

  window.location = "./index.html";
};
