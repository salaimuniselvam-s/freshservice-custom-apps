document.onreadystatechange = function () {
  if (document.readyState === "interactive") renderApp();

  function renderApp() {
    var onInit = app.initialized();

    onInit
      .then(function getClient(_client) {
        console.log({ _client, client: window.client, app, onInit });
        window.client = _client;
        client.events.on("app.activated", renderContactName);
      })
      .catch(handleErr);
  }
};

function renderContactName() {
  var textElement = document.getElementById("apptext");
  client.data
    .get("requester")
    .then(async function (payload) {
      //
      console.log(await client.iparams.get("userName"));

      // secure iparams
      const response = await client.request.invokeTemplate("secureIparamTest");
      console.log({ response });

      //
      client.iparams
        .get()
        .then((data) => console.log({ data }, "sms"))
        .catch((er) => console.error(er));
      textElement.innerHTML = `Data Method returned: ${payload.requester.name}`;
    })
    .catch(handleErr);
}

function handleErr(err = "None") {
  console.error(`Error occured. Details:`, err);
}
