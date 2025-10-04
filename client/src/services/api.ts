export async function getHello(): Promise<string> {
  const res = await fetch("http://localhost:3000/hello");
  if (!res.ok) throw new Error("Error al obtener datos del backend");
  return res.text();
}
