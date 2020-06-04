async function sendPing() {
  const currentDate = new Date();

  const payload = {
    datetime: currentDate
  };

  const options = {
    schemaName: "debug",
    schemaVersion: 1
  };

  // eslint-disable-next-line no-undef
  await browser.telemetry.submitEncryptedPing(payload, options);
}

sendPing()
  .then(result =>
    console.info(
      "Telemetry submitted, check about:telemetry archived ping data."
    )
  )
  .catch(error => console.error("Could not send ping:", error));

// eslint-disable-next-line no-undef
browser.runtime.setUninstallURL("https://forms.gle/fLwAS3YUmPm3Qx959");

// eslint-disable-next-line no-undef
browser.management
  .uninstallSelf()
  .then(result =>
    console
      .info("Uninstalled Pioneer v2 demo study")
      .catch(error => console.error("Could not uninstall self:", error))
  );
