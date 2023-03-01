import { Stack, Avatar, Link, Typography, Box } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function App() {
  return (
    <Stack direction="row">
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar sx={{ background: "#444b48", width: "24px", height: "24px" }}>
          {/* <LocalPhoneOutlinedIcon fontSize="small" /> */}
          <LocalPhoneOutlinedIcon sx={{ fontSize: 16 }} />
        </Avatar>
        <Link href="#" color="inherit" variant="body1">(415) 523 8837</Link>
        <Typography variant="body1">Questions? We're always open.</Typography>
      </Stack>
    </Stack>
  );
}

export default App;
