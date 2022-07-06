import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inst, setInst] = useState([]);

  const getInstructor = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getInstructor();
  }, [getInstructor]);

  return (
    <div className="container text-center">
      <h3>{inst.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default InstructorDetail;
