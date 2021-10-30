let idStatedRes = 0;
let token;
const valueId = async (valor) => {
  idStatedRes = valor;
  console.log("valor del id: ", idStatedRes);
};
const showStatedsResult = async () => {
  const HTMLResponse = document.querySelector(".viewStatedResult");
  const sendEmail = sessionStorage.getItem("emailUser");
  token = localStorage.getItem("myData");
  if (sendEmail == null) {
    alert("Debes logearte");
    window.location = "./index.html";
  }
  let data = {
    email: sendEmail,
  };

  let url = await fetch("http://localhost:3000/newButgets", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
  const date = await url.json(url);
  console.log(date.viewStatedRes);
  for (let i = 0; i < date.viewStatedRes.length; i++) {
    tpl = `
    <tr>
                          <td>
                          ${date.viewStatedRes[i].idEstRes}
                      </td>
                      <td>
                      ${date.viewStatedRes[i].sales}
                      </td>
                      <td>
                      ${date.viewStatedRes[i].costs}
                      </td>
                      <td>
                      ${date.viewStatedRes[i].margin}
                      </td>
                      <td>
                      ${date.viewStatedRes[i].FinalBalnce}
                      </td>
                    
                            <td>
                                <a type="button" onclick="valueId(${date.viewStatedRes[i].idEstRes})"  class="btn btn-primary "
                                    data-bs-toggle="modal" data-bs-target="#modalForm">
                                    Editar
                                </a>

                                <button type="button" onclick="valueId(${date.viewStatedRes[i].idEstRes})" class="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal3">
                                    Eliminar
                                </button>

                            </td>
                        </tr>
     `;
    HTMLResponse.innerHTML += `${tpl}`;
  }
};
showStatedsResult();
const updateStates = async () => {
  let mydate = parseFloat(document.getElementById("startSales").value);
  let butgetsProyect = parseFloat(document.getElementById("proyectCost").value);
  let versionsBut = parseFloat(document.getElementById("marginStated").value);
  let finalBalnce = parseFloat(document.getElementById("balanceFinal").value);

  let dataUpdate = {
    idStatedRes,
    mydate,
    butgetsProyect,
    versionsBut,
    finalBalnce,
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
  let finalBalanceFinal = parseFloat(
    document.getElementById("balanceFinalCreated").value
  );
  let dataCreate = {
    dateCreated,
    proyectName,
    versionCreate,
    finalBalanceFinal,
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
  refrest();
};
const deleteStated = async () => {
  let searching = await fetch(
    "http://localhost:3000/deleteStated/" + idStatedRes,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  location.reload();
};
function refrest() {
  console.log("Hola que tal mexico df");
  window.location.reload();
}
const stopSesion = () => {
  localStorage.removeItem("myData");
  sessionStorage.removeItem("emailUser");
  window.location = "./index.html";
};
