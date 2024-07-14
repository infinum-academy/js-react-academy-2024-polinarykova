export async function SignInMutator(url: string, { arg }: { arg: any }) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.errors || "Something went wrong";

    throw new Error(errorMessage);
  } else {
    const headers: { [key: string]: string } = {};
    response.headers.forEach((value, name) => {
      if (name == "client" || name == "access-token" || name == "uid") {
        headers[name] = value;
      }
    });

    localStorage.setItem("headers", JSON.stringify(headers));
  }

  return await response.json();
}
