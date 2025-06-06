export type ZodiacType =
  | "Bạch Dương"
  | "Kim Ngưu"
  | "Song Tử"
  | "Cự Giải"
  | "Sư Tử"
  | "Xử Nữ"
  | "Thiên Bình"
  | "Bọ Cạp"
  | "Nhân Mã"
  | "Ma Kết"
  | "Bảo Bình"
  | "Song Ngư";

// import Aries from "../../assets/images/zodiac/Aries.png";
// import Taurus from "../../assets/images/zodiac/Taurus.png";
// import Gemini from "../../assets/images/zodiac/Gemini.png";
// import Cancer from "../../assets/images/zodiac/Cancer.png";
// import Leo from "../../assets/images/zodiac/Leo.png";
// import Virgo from "../../assets/images/zodiac/Virgo.png";
// import Libra from "../../assets/images/zodiac/Libra.png";
// import Scorpio from "../../assets/images/zodiac/Scorpio.png";
// import Sagittarius from "../../assets/images/zodiac/Sagittarius.png";
// import Capricorn from "../../assets/images/zodiac/Capricorn.png";
// import Aquarius from "../../assets/images/zodiac/Aquarius.png";
// import Pisces from "../../assets/images/zodiac/Pisces.png";
import backCard from "../../assets/cards/tarrotBack.png";
import { Box } from "@mui/material";

type Props = {
  src: string;
  flip?: boolean;
};
export default function Card({ src }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        "& .flip-card:hover .flip-card-inner": {
          transform: "rotateY(180deg)",
        },
        "& .flip-card-front, & .flip-card-back": {
          position: "absolute",
          width: "100%",
          height: "100%",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        },
        "& .flip-card-front": {
          backgroundColor: "#bbb",
          color: "black",
        },
        "& .flip-card-back": {
          backgroundColor: "#2980b9",
          color: "white",
          transform: "rotateY(180deg)",
        },
      }}
    >
      <Box className="flip-card-inner">
        <Box className="flip-card-back">
          <img src={src} alt={"back"} style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box className="flip-card-front">
          <img src={backCard} alt={"back"} style={{ width: "100%", height: "auto" }} />
        </Box>
      </Box>
    </Box>
  );
}
