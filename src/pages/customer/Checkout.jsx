import { useState } from "react";
import TimeSlotPicker from "../../components/TimeSlotPicker";

export default function Checkout() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = [
    "9AM - 11AM",
    "11AM - 1PM",
    "2PM - 4PM",
    "4PM - 6PM",
    "6PM - 8PM"
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Select Delivery Time Slot</h2>

      <TimeSlotPicker
        slots={slots}
        selected={selectedSlot}
        setSelected={setSelectedSlot}
      />

      <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded">
        Confirm Order
      </button>
    </div>
  );
}