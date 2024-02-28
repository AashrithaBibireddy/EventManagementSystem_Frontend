import React from "react";
import { useNavigate } from "react-router-dom";

const VolunteerInfoCard = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/dashboard/user/team");
  };
  return (
    <div className="p-5">
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl pb-3">Volunteer info</h2>
          <p className="tracking-wider leading-normal text-s">
            ACM is not about an individual, it is a family of 820+ members. Our
            members are as important to us as the people who lead us. Anyone who
            is driven by the zeal to learn something, to make their place in
            this tech world can come and join us. All the ACM members are
            entitled to all the events ACM conducts like coding contests,
            trainings on trending technologies, hackathons, quiz contests and
            many more. All the members also get the latest tech news to their
            mails so that they are up to date on the recent technological
            advancements.
          </p>
          <div className="card-actions justify-end">
            <button onClick={handleButton} className="btn btn-primary">
              Volunteer list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerInfoCard;
