import { Box, Typography, TextField, MenuItem, Button, Paper, Grid, Divider } from "@mui/material";
import { useAppContext } from "../../Context/AppContext";
import { ListTeam, type Team } from "../../constant";
import { DatePicker } from "@mui/x-date-pickers";

export default function Form() {
  const { setStep, setUsetname, setBirthday, setTeam, usetname, birthday, team, setSelectedCard } =
    useAppContext();

  const handleBack = () => {
    setStep(0);
    // Handle back navigation logic here
  };

  const isButtonDisabled = !usetname || !team || !birthday;
  const handleSubmit = () => {
    setStep(2);
    setSelectedCard("");
  };
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "1500px",
        animation: "fadeIn 0.5s linear",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
            transform: "scale(0.2)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1500px",
          background:
            "linear-gradient(90.17deg, rgba(7, 1, 88, 0.4) 0.13%, rgba(53, 0, 98, 0.4) 99.84%)",
          p: 3,
          backdropFilter: "blur(4px)",
          borderRadius: "14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <Typography variant="h2" color="text.primary" textAlign={"center"} width={"100%"} mb={3}>
            Vui lòng điền đầy đủ thông tin
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            mb: 3,
            "& .label": {
              fontWeight: 400,
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h4" color="text.primary" mb={1} className="label">
              Họ và tên của bạn
            </Typography>
            <TextField
              fullWidth
              value={usetname}
              onChange={(e) => setUsetname(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h4" color="text.primary" mb={1} className="label">
              Phòng ban
            </Typography>
            <TextField
              select
              fullWidth
              value={team}
              onChange={(e) => setTeam(e.target.value as Team)}
              variant="outlined"
            >
              {ListTeam.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h4" color="text.primary" mb={1} className="label">
              Ngày tháng năm sinh
            </Typography>
            {/* <TextField
              fullWidth
              value={new Date(birthday).toLocaleDateString("en-US")}
              onChange={(e) => {
                console.log(e.target.value);
                setBirthday(new Date(e.target.value).getTime());
              }}
              variant="outlined"
              type="date"
            /> */}
            <DatePicker
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
              value={birthday}
              onChange={(value) => setBirthday(value)}
            />
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            py: 1,
          }}
        >
          <Button fullWidth variant="outlined" onClick={handleBack}>
            Thồiiii
          </Button>
          <Button disabled={isButtonDisabled} fullWidth variant="contained" onClick={handleSubmit}>
            Bốc bài
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
