import React, { useEffect, useState } from "react";
import axios from "axios";
import Work from "./Work";
import GetWorkFlow from "./GetWorkFlow";

const Card = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/events/get-approved-events"
        );
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="flex justify-center items-center pt-12 ">
      {cardData ? (
        <div>
          {cardData.map((event) => (
            <div
              className="card w-full bg-white shadow-xl mb-10"
              key={event.id}
            >
              <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event.description}</p>
                <div className="flex justify-center items-center">
                  <div className="card-actions justify-end m-4">
                    <button
                      className="flex bg-white text-black p-2 rounded-md hover:text-base-300 hover:bg-white text-white transform hover:scale-110 transition-transform"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Work Flow
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <GetWorkFlow />
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="flex bg-base-100 text-black p-2 rounded-md hover:text-base-300 hover:bg-white text-white transform hover:scale-110 transition-transform">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>

                  <div className="card-actions justify-end">
                    <button
                      className="flex bg-base-100 text-black p-2 rounded-md hover:text-base-300 hover:bg-white text-white transform hover:scale-110 transition-transform"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      Read more..
                    </button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-3xl"> {event.name}</h3>
                        <p className="py-1 text-lg">Title : {event.name}</p>
                        <p className="py-1 text-lg">Type : {event.type}</p>
                        <p className="py-1 text-lg">Date : {event.date}</p>
                        <p className="py-1 text-lg">Time : {event.time}</p>
                        <p className="py-1 text-lg">Venue : {event.venue}</p>
                        <p className="py-1 text-lg">
                          Team Size : {event.teamSize}
                        </p>
                        <p className="py-1 text-xl">
                          Prize Money : {event.prizeMoney}
                        </p>
                        <p className="py-1 text-xl">Year : {event.year}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="flex bg-base-100 text-black p-2 rounded-md hover:text-base-300 hover:bg-white text-white transform hover:scale-110 transition-transform">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
