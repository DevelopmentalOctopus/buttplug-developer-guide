import init, { ButtplugDeviceException, ButtplugException } from
  "https://cdn.jsdelivr.net/npm/buttplug-wasm@1.0.0-beta3/buttplug-wasm.web/buttplug_wasm.js";
const runErrorExample = async () => {

  async function ThrowError() {
    // All async functions in Buttplug are written to return exceptions as a
    // promise rejection, meaning they work as both promise chains and
    // async/await.
    throw new ButtplugDeviceException("This is an exception", 0);
  }


  async function ButtplugErrors() {
    // In javascript, there are 2 ways we can call functions and catch exceptions.
    await init();

    // First off, there's try/catch, which is handy for async.
    try {
      // Imagine some failing call here.
      await ThrowError();
    } catch (e) {
      // However, we don't have the type of the exception we get back, so it could
      // be a system exception or something else not buttplug related. If you're
      // interested in Buttplug related exceptions, it's best to check for them
      // here.
      if (e instanceof ButtplugException) {
        // This will make sure we're doing something specific to Buttplug.
        if (e instanceof ButtplugDeviceException) {
          // And possibly even more specific.
        }
      }
    }

    // However, as all async javascript functions also return promises, so we can
    // treat the call as a promise rejection.
    ThrowError().catch((e) => console.log("Got an exception back from our promise!"));
  }

  ButtplugErrors();
}
document
  .getElementById("errors-example-button")
  .addEventListener("click", async () => await runErrorExample);