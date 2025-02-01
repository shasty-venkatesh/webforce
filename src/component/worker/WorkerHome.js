import Workercard from "./Workercard";
import WorkerHeader from "./WorkerHeader";
import "../../style/worker.css";
import WorkerImg from "../../image/worker.png";

function WorkerHome() {
  const scrapData = [
    {
      name: "John Doe",
      address: "123 Elm Street, Springfield",
      date: "2025-01-28",
      slot: "10:00 AM - 12:00 PM",
      cost_of_scrap: 120.5,
      weight_of_scrap: 50.0,
      phone_number: "123-456-7890",
      category_of_waste: "Metal",
    },
    {
      name: "Jane Smith",
      address: "456 Oak Avenue, Metropolis",
      date: "2025-01-28",
      slot: "02:00 PM - 04:00 PM",
      cost_of_scrap: 80.0,
      weight_of_scrap: 30.0,
      phone_number: "987-654-3210",
      category_of_waste: "Plastic",
    },
    {
      name: "Alice Johnson",
      address: "789 Pine Lane, Gotham",
      date: "2025-01-28",
      slot: "04:00 PM - 06:00 PM",
      cost_of_scrap: 150.0,
      weight_of_scrap: 60.0,
      phone_number: "555-123-4567",
      category_of_waste: "Electronics",
    },
    {
      name: "Bob Brown",
      address: "321 Cedar Road, Star City",
      date: "2025-01-28",
      slot: "08:00 AM - 10:00 AM",
      cost_of_scrap: 95.5,
      weight_of_scrap: 40.0,
      phone_number: "555-987-6543",
      category_of_waste: "Paper",
    },
    {
      name: "Clara Evans",
      address: "654 Birch Boulevard, Central City",
      date: "2025-01-28",
      slot: "12:00 PM - 02:00 PM",
      cost_of_scrap: 110.0,
      weight_of_scrap: 45.0,
      phone_number: "222-333-4444",
      category_of_waste: "Glass",
    },
    {
      name: "David Green",
      address: "987 Maple Drive, Starling City",
      date: "2025-01-28",
      slot: "06:00 PM - 08:00 PM",
      cost_of_scrap: 130.0,
      weight_of_scrap: 55.0,
      phone_number: "666-777-8888",
      category_of_waste: "Organic",
    },
  ];

  return (
    <div>
      <WorkerHeader />
      <div className="workersection">
        <img src={WorkerImg} alt="worker" className="workerimg" />
        <div className="workercardlist">
          {scrapData.map((item, index) => (
            <Workercard
              key={index}
              name={item.name}
              address={item.address}
              cost={item.cost_of_scrap}
              phoneNumber={item.phone_number}
              slot={item.slot}
              time={item.date}
              weight={item.weight_of_scrap}
              category={item.category_of_waste}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkerHome;
