//Second view according to the task

import { StyledBody, Sidebar } from "./MainLayout.style";

const Aggregations = () => {
  return (
    <StyledBody>
      <Sidebar />
      <h1 style={{ color: "red" }}>Aggregations view</h1>
    </StyledBody>
  );
};

export default Aggregations;
