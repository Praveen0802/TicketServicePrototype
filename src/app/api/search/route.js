import dropDownValues from "../../../data/dropDownValues.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search").toLowerCase();

  const filteredValues = dropDownValues?.dropDownValues?.filter((item) => {
    return (
      item.name.toLowerCase().includes(search) ||
      item.date.toLowerCase().includes(search) ||
      item.time.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search)
    );
  });

  return Response.json({ data: filteredValues });
}