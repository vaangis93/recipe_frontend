import styled from "styled-components";

const BrainstormPngStyle = styled.img`
  width: 100%;
  height: 100%;
`;

function Brainstorm() {
  return (
    <>
      <h3>BrainStorm and vision for the project</h3>
      
      <br />
      <p>
      The documentation is inside the public/documentation directory in the repo
      <br />
        Click{" "}
        <a href="https://github.com/vaangis93/recipe_frontend" target="_blank">
          here
        </a>{" "}
        to get my git repo
      </p>
      <br />

      <h4>Brainstorm Frontend</h4>
      <BrainstormPngStyle src="pics\brainstorm_frontend.png" />

      
    </>
  );
}

export default Brainstorm;
