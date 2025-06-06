import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../Context/AppContext";
// import { getCardZodiacFromDate } from "../../utils";
import CardContent from "../CardContent";
import { getCardZodiacFromDate } from "../../utils";
import bacTarrotCard from "../../assets/cards/tarrotBack.png";

const offset = 30;
export default function CardSelect() {
  const [show, setShow] = useState(false);
  const { selectedCard, setSelectedCard, cardResult } = useAppContext();
  const middleIndex = Math.floor(cardResult.length / 2);
  const ref = useRef<HTMLDivElement>(null);

  const scrollIntoView = () => {
    if (ref.current) {
      setTimeout(() => {
        ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <Box mt={3} sx={{ position: "relative", width: "100%" }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          fontWeight={700}
          sx={{ textAlign: "center", maxWidth: "1000px", opacity: selectedCard ? 0 : 1 }}
          mb={6}
        >
          {`Ở đây có ${cardResult.length} lá bài Hãy dùng giác quan thứ 6 bốc 1 lá cho ngày làm việc hôm nay nhé!`}
        </Typography>
      </Box>
      <Box ref={ref} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            position: "relative",
            height: "300px",
            width: `${250 + cardResult?.length * offset}px`,

            // backgroundColor: "red",
          }}
        >
          {cardResult?.map((card, index) => {
            const isCurrentCardSelected = selectedCard === card.cardName;
            return (
              <Box
                onClick={() => {
                  if (!selectedCard) {
                    setSelectedCard(card.cardName);
                  } else {
                    setSelectedCard("");
                  }
                  scrollIntoView();
                }}
                key={index}
                sx={{
                  width: !selectedCard ? "250px" : isCurrentCardSelected ? "250px" : "0",
                  opacity: !selectedCard ? 1 : isCurrentCardSelected ? 1 : 0,
                  zIndex: !selectedCard ? index + 1 : isCurrentCardSelected ? index + 1 : 0,
                  height: "365px",
                  transition: "all 0.5s ease-in-out",
                  transform: !selectedCard
                    ? show
                      ? `translateX(${(index - middleIndex) * offset}px) scale(1)`
                      : "translateX(0px) scale(1.2)"
                    : isCurrentCardSelected
                    ? `translateX(-400px) scale(1.5)`
                    : `none`,
                  position: "absolute",
                  ...(!selectedCard && {
                    "&:hover": {
                      cursor: "pointer",
                      "& .card": {
                        borderRadius: 5,
                        transform: "translateY(-20px)",
                        transition: "all 0.2s ease-in-out",
                      },
                    },
                  }),
                  animation: !selectedCard
                    ? "none"
                    : isCurrentCardSelected
                    ? "card-selected 0.5s ease-in-out"
                    : "none",
                  "@keyframes card-selected": {
                    from: {
                      transform: `translateX(${(index - middleIndex) * offset}px) scale(1.2)`,
                    },
                    to: {
                      transform: "translateX(-400px) scale(1.5)",
                    },
                  },
                }}
              >
                <Card flip={!!selectedCard} />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          opacity: selectedCard ? 1 : 0,
          position: "absolute",
          top: 60,
          right: 0,
          width: "calc(50% + 200px)",
          pb: 10,
        }}
      >
        <Box sx={{ width: "100%", minHeight: "520px" }}>
          <CardContent />
        </Box>
      </Box>
    </Box>
  );
}

function Card({ flip }: { flip?: boolean }) {
  const { birthday } = useAppContext();
  const imgSrc = getCardZodiacFromDate(String(birthday?.toDate()?.getTime()));

  return (
    <Box
      className="card"
      sx={{
        "& .front": {
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          position: "absolute",
          transform: "rotateY(180deg)",
        },
        "& .back": {
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          position: "absolute",

          // transform: "rotateY(0deg)",
        },
        "& .card-inner": {
          transition: "all 0.5s ease-in-out",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
        },
      }}
    >
      <Box className="card-inner" sx={{ width: "250px", height: "365px" }}>
        <img
          className="front"
          src={imgSrc}
          alt={"card"}
          style={{ width: "250px", height: "365px" }}
        />
        <img
          className="back"
          src={bacTarrotCard}
          alt={"card2"}
          style={{ width: "250px", height: "365px" }}
        />
      </Box>
    </Box>
  );
}
