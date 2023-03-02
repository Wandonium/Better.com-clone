import { Box } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box sx={{ px: { xs: "27px", md: "52px" }, bgcolor: "rgb(255, 253, 250)" }}>
      <Navbar />
    </Box>
  );
}

export default App;
