import { NavbarSimple } from './Components/Navbar'
import { Section } from './Components/Section'

import { Container, Grid } from '@mantine/core';

function App() {
  const data = [
    { "position": 6, "mass": 12.011, "id": "C", "name": "Carbon" },
    { "position": 7, "mass": 14.007, "id": "N", "name": "Nitrogen" },
    { "position": 39, "mass": 88.906, "id": "Y", "name": "Yttrium" },
    { "position": 56, "mass": 137.33, "id": "Ba", "name": "Barium" },
    { "position": 58, "mass": 140.12, "id": "Ce", "name": "Cerium" }
  ]
  return (
    <div className="App">
      <Grid>
        <Grid.Col span={3}>
          <NavbarSimple />
        </Grid.Col>
        <Grid.Col span={9} style={{background: "#f2f4fb"}}>
          <Container>
            <Section data={data} />
          </Container>
        </Grid.Col>
      </Grid>


    </div>
  );
}

export default App;
