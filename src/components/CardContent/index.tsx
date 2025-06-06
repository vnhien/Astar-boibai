import { Box, Button, Dialog, Grid, Typography } from "@mui/material";
import { cardConfig } from "../../constant";
import { useAppContext } from "../../Context/AppContext";
import { IconGift } from "../../assets/icons/IconGift";
import { useMemo, useState } from "react";
import gifThinh from "../../assets/images/gifThinh.png";
import gifHuy from "../../assets/images/gifHuy.png";
import gifThinhDoan from "../../assets/images/gifThinhDoan.png";
import { getZodiacNameFromDate } from "../../utils";

export default function CardContent() {
  const { selectedCard, team, usetname, birthday, setStep, setSelectedCard } = useAppContext();
  const [open, setOpen] = useState(false);
  const isDoanThinh = useMemo(() => {
    return ["đoàn trần thịnh", "doan tran thinh", "đoan tran thinh"].includes(
      usetname?.toLowerCase()
    );
  }, [usetname]);

  const gifImage = useMemo(() => {
    if (
      ["đoàn trần thịnh", "doan tran thinh", "đoan tran thinh"].includes(usetname?.toLowerCase())
    ) {
      return gifThinhDoan;
    }

    if (
      ["Nguyễn Đức Thịnh", "nguyen duc thinh", "nguyễn đức thịnh"].includes(usetname?.toLowerCase())
    ) {
      return gifThinh;
    }

    return gifHuy;
  }, [usetname]);

  const cardContent = cardConfig[team || "Tech"].find((item) => item.cardName === selectedCard);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: "100%", height: "100%", minHeight: "520px" }}>
      <Box
        sx={{
          background:
            "linear-gradient(90.17deg, rgba(7, 1, 88, 0.4) 0.13%, rgba(53, 0, 98, 0.4) 99.84%)",
          border: "1px solid",
          borderImageSource: "linear-gradient(101.7deg, #5F56CA 0.33%, #CC6AF1 100%)",
          p: 2,
          borderRadius: 3,
          overflow: "hidden",
          color: "#FFFFFF",
          "& .content": {
            fontWeight: 300,
          },
          "& .label": {
            fontWeight: 700,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" fontWeight={700} sx={{ color: "#E0C7FF" }} mb={4}>
            {`Tên Lá Bài: ${cardContent?.cardName}`}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              backgroundColor: "#38B58C",
              display: "inline-flex",
              alignItems: "center",
              px: 2,
              borderRadius: 3,
              height: "25px",
            }}
            fontWeight={500}
          >{`${Math.floor(Math.random() * 4) + 6} điểm`}</Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography className="label">
              Họ và tên:{" "}
              <Typography component={"span"} className="content">
                {usetname}
              </Typography>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography className="label">
              Ngày Sinh:{" "}
              <Typography component={"span"} className="content">
                {birthday?.toDate()?.toLocaleDateString("en-US")}
              </Typography>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography className="label">
              Phòng Ban:{" "}
              <Typography component={"span"} className="content">
                {team}
              </Typography>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography className="label">
              Cung Hoàng Đạo:{" "}
              <Typography component={"span"} className="content">
                {getZodiacNameFromDate(String(birthday?.toDate()?.getTime()))}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Typography className="label" mt={4}>
          Thông điệp hôm nay:{" "}
          <Typography component={"span"} className="content">
            {isDoanThinh
              ? "Linh hồn bạn đã check-out, chỉ còn cơ thể đang giả vờ bấm chuột. Hãy để nó nghỉ ngơi."
              : cardContent?.content}
          </Typography>
        </Typography>
        <Typography className="label" mt={4}>
          Lời khuyên:{" "}
          <Typography component={"span"} className="content">
            {isDoanThinh
              ? "Lá bài 'Tự Thưởng' đã được rút. Hôm nay bạn được thiên hà cấp phép để… tự yêu lấy mình bằng một buổi nghỉ. Đón nhận thông điệp tuyệt vời bằng cách nhận thêm món quà từ sếp nhé!"
              : cardContent?.suggestion}
          </Typography>
        </Typography>
        <Box sx={{ py: 1, display: "flex", gap: 1, alignContent: "center", mt: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              setStep(0);
            }}
          >
            Trở về trang chủ
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              setSelectedCard("");
              setStep(2);
            }}
          >
            Thay đổi vận mệnh lần nữa
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          background:
            "linear-gradient(90.17deg, rgba(7, 1, 88, 0.4) 0.13%, rgba(53, 0, 98, 0.4) 99.84%)",
          border: "1px solid",
          borderImageSource: "linear-gradient(101.7deg, #5F56CA 0.33%, #CC6AF1 100%)",
          p: 2,
          borderRadius: 3,
          overflow: "hidden",
          color: "#FFFFFF",
          "& .content": {
            fontWeight: 300,
          },
          "& .label": {
            fontWeight: 700,
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex", alignItems: "center" }}>
            <Typography color="#FFFFFF" fontWeight={600}>
              Tặng bạn một món quà từ CEO Nguyễn Đức Thắng. Đừng quên đánh giá 5 sao cho chúng tôi
              nhé!
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                "& .gif": {
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.1s linear",
                  cursor: "pointer",
                },
              }}
            >
              <Box className="gif" onClick={handleOpen}>
                <IconGift sx={{ fontSize: "6rem" }} />
              </Box>
              <Box className="gif" onClick={handleOpen}>
                <IconGift sx={{ fontSize: "6rem" }} />
              </Box>
              <Box className="gif" onClick={handleOpen}>
                <IconGift sx={{ fontSize: "6rem" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{ position: "relative" }}>
            <img src={gifImage} style={{ width: "100%", height: "auto" }} />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                color="#FFFFFF"
                fontWeight={600}
                textAlign={"center"}
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Chúc mừng bạn đã nhận 1 cú lừa!!!
              </Typography>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
}
