export let login = (email, password) => {
  let error = { email: "", password: "" };
  if (!email || !validateEmail(email)) {
    error.email = "Not a valid email";
  }
  if (!password || password.length < 6) {
    error.password = "Not a valid password";
  }
  if (error.email || error.password) {
    return {
      hasError: true,
      error: error,
    };
  }
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
