import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import background from '../assets/virus-gab3ed1248_1920.jpg'

import { QUERY_All_PROJECTS } from "../utils/queries";

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_All_PROJECTS);

  const projects = data?.projects || [];

  function viewProject(project) {
    if (Auth.loggedIn()) {
      return (
        <Link style={styles.linkStyle} to={`/projectPage/${project._id}`}>
          View Project
        </Link>
      );
    } else {
      return (
        <Link style={styles.linkStyle} to="/login">
          Login to View Project
        </Link>
      );
    }
  }
  const styles = {
    mainContainerStyle: {
      // height: "85vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      textAlign: "center",
    },
    projectStyle: {
      height: "350px",
      width: "600px",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "1rem",
      border: ".1rem solid black",
      borderRadius: ".3rem",
      backgroundColor: "#FFFFFF",
      backgroundColor: "rgb(169,169,159, 0.9)"
    },
    imageStyle: {
      marginTop: "1.2rem",
      width: "35%",
      height: "35%",
      borderRadius: ".5rem",
    },
    linkStyle: {
      margin: ".5rem",
      padding: "3px 9px",
      borderRadius: "6px",
      fontSize: "16px",
      textTransform: "uppercase",
      fontWeight: "400",
    },
    header2: {
      padding: "12px",
    },
    paragraph: {
      padding: "2px",
      marginBottom: "2px",
    },
  };
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div style={styles.mainContainerStyle}>
        {projects &&
          projects.map((project) => (
            <div className="homepageBoxs" key={project._id} style={styles.projectStyle}>
              <h2>{project.name}</h2>
              <img className="imgMobile" style={styles.imageStyle} src={project.image} />
              <p className="projectDescription">{project.description}</p>
              {viewProject(project)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
