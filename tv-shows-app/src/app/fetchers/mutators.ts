function getHeaders() {
  const headers = localStorage.getItem("headers");
  const parsedHeaders = headers ? JSON.parse(headers) : {};
  return {
    "Content-Type": "application/json",
    "access-token": parsedHeaders["access-token"],
    client: parsedHeaders.client,
    uid: parsedHeaders.uid,
  };
}

export async function postMutator(url: string, { arg }: { arg: any }) {
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

export async function mutator(
  url: string,
  { arg, method }: { arg: any; method: string }
) {
  const headers = getHeaders();
  const init: RequestInit = {
    method: method,
    body: JSON.stringify(arg),
    headers: headers,
  };

  const response = await fetch(url, init);

  if (method == "DELETE") {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return;
  } else {
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.errors || "Something went wrong";

      throw new Error(errorMessage);
    }
    return await response.json();
  }
}

export async function postAuthorizedMutator(
  url: string,
  { arg }: { arg: any }
) {
  return mutator(url, { arg: arg, method: "POST" });
}

export async function deleteAuthorizedMutator(
  url: string,
  { arg }: { arg: any }
) {
  return mutator(arg.url, { arg: arg.body, method: "DELETE" });
}

export async function patchMutator(url: string, { arg }: { arg: any }) {
  return mutator(arg.url, { arg: arg.body, method: "PATCH" });
}
