import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScheduleImg from "../../image/schedule.png";
import "../../style/schedule.css";
import Header from "./Header";

function Schedule() {
  const navigate = useNavigate();

  // State variables for form inputs
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [weight, setWeight] = useState("");
  const [remarks, setRemarks] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send to API)
    console.log({
      date,
      time,
      address,
      landmark,
      pincode,
      weight,
      remarks,
    });
    // Clear form fields if needed
    setDate("");
    setTime("");
    setAddress("");
    setLandmark("");
    setPincode("");
    setWeight("");
    setRemarks("");
    alert("Pickup scheduled successfully!");
  };

  return (
    <div>
      <Header />
      <div className="scheduleform">
        <button className="backbutton" onClick={() => navigate("/home")}>
          ←
        </button>
        <form onSubmit={handleSubmit}>
          <div className="datetime">
            <div>
              <label>Enter Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Select the timing</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select Time</option>
                <option>11AM to 3PM</option>
                <option>3PM to 8PM</option>
              </select>
            </div>
            <br />
          </div>
          <label>Select an Address</label>
          <div>
            <input
              type="text"
              placeholder="Enter Full Address"
              className="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div>
              <input
                type="text"
                placeholder="Landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Pincode"
                className="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
          </div>
          <br />
          <div className="weight">
            <div>
              <label>Estimated Weight</label>
              <select
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              >
                <option value="">Select Weight</option>
                <option>Less than 20kg</option>
                <option>20-50kg</option>
                <option>50-100kg</option>
                <option>100-700kg</option>
                <option>More than 700kg</option>
              </select>
            </div>
            <br />
            <div className="remark">
              <label>
                Remarks<span>(Optional)</span>
              </label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
          </div>
          <br />
          <input type="submit" value="SCHEDULE A PICKUP" />
        </form>
        <img src={ScheduleImg} alt="scheduleimg" className="scheduleimg" />
        <p className="linkCheck">
          To view the scheduled pickups click{" "}
          <Link className="link" to="/checkstatus">
            Check My Pickups
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Schedule;
