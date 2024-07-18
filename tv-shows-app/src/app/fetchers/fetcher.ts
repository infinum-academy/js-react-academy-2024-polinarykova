export async function fetcher<T>(
  input: string | URL | globalThis.Request
): Promise<T> {
  const headers =
    typeof localStorage === "undefined"
      ? undefined
      : localStorage.getItem("headers");
  const parsedHeaders = headers ? JSON.parse(headers) : {};

  const init: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "access-token": parsedHeaders["access-token"],
      client: parsedHeaders.client,
      uid: parsedHeaders.uid,
    },
  };

  try {
    const response = await fetch(input, init);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Response status: ${error}`);
  }
}
