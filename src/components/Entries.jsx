import Entry from "./Entry";
const Entries = ({ entries, onDelete }) => {
  return (
    <>
      {entries.map((entry) => (
        <Entry entry={entry} key={entry.id} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Entries;
