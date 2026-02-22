export default function TimeSlotPicker({ slots, selected, setSelected }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => setSelected(slot)}
          className={`p-3 rounded border 
            ${selected === slot ? "bg-blue-500 text-white" : "bg-gray-100"}`}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}