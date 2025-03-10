import dropDownValues from "../../../data/dropDownValues.json";

export async function GET() {
  const res = dropDownValues;
  const data = res;

  return Response.json({ data });
}
