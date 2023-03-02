import { Stack, Avatar, Link, Typography, Grid } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function App() {
  const bgColor = "rgb(255, 253, 250)";
  return (
    <Grid container columns={24}>
      <Grid item xs={1} sx={{ bgcolor: bgColor }}></Grid>
      <Grid item xs={22} sx={{ bgcolor: bgColor }}>
        <Stack direction="row" sx={{ height: "48px", padding: "12px 0px" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ background: "#444b48", width: "24px", height: "24px" }}>
              {/* <LocalPhoneOutlinedIcon fontSize="small" /> */}
              <LocalPhoneOutlinedIcon sx={{ fontSize: 16 }} />
            </Avatar>
            <Link href="#" 
              color="#444b48" 
              sx={{ 
                fontSize: 17, 
                fontWeight: "bold", 
                textDecoration: "underline",
                textUnderlineOffset: "3px"
              }}
            >
              (415) 523 8837
            </Link>
            <Typography color="#444b48" sx={{ fontSize: 15, fontWeight: "bold" }}>Questions? We're always open.</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" color="#444b48" >
            <Typography sx={{ fontWeight: "bold" }}>$100 billion</Typography>
            <Typography>in online home loans</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={1} sx={{ bgcolor: bgColor }}></Grid>
    </Grid>
  );
}

export default App;
