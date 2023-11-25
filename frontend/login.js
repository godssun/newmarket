const form = document.querySelector("#login-form");

let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  accessToken = data.access_token;
  console.log(accessToken);

  const infoDiv = document.querySelector("#info");
  infoDiv.innerText = "success login!!";
  window.localStorage.setItem("token", accessToken);
  alert("succes login");

  window.location.pathname = "/";

  //   const btn = document.createElement("button");
  //   btn.innerText = "get items";
  //   btn.addEventListener("click", async () => {
  //     const res = await fetch("/items", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   });
  infoDiv.appendChild(btn);

  //   if (res.status === 200) {
  //     alert("success login!!");
  //   } else if (res.status === 401) {
  //     alert("Wrong");
  //   } else {
  //     console.error(`Unexpected status code: ${res.status}`);
  //   }
};

form.addEventListener("submit", handleSubmit);
