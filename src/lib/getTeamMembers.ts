import Airtable from 'airtable';

// get the Team table
const getTable = () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_BASE_ID);

  const table = base('Team');
  return table;
};

// gets the data we want and puts it into variables
const minifyRecord = record => ({
  id: record.id,
  fields: record.fields
});

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => records.map(record => minifyRecord(record));

export default async function getTeamMembers() {
  const table = getTable();
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  // console.log(minifiedRecords);

  return minifiedRecords;
}
