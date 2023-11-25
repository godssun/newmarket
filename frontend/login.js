const form = document.querySelector("#login-form");

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });

  const data = await res.json();

  console.log("토큰!!!", data);
  if (res.status === 200) {
    alert("로그인 성공!!");
    console.log(res.status);
  } else if (res.status === 401) alert("틀렸어 병시나");
}

form.addEventListener("submit", handleSubmit);
