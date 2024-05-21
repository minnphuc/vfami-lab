import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Icon,
  Button,
} from "@mui/material";

import SwordIcon from "../icons/swords.svg";
import HeartIcon from "../icons/heart.svg";

function PokeCard(props) {
  const cardData = props.card;

  return (
    <>
      <Card elevation={3} sx={{ pt: 1, px: 2, bgcolor: "#f2f2f2", cursor: "pointer" }}>
        <Typography variant="h5" fontWeight="700" textAlign="center">
          {cardData.name}
        </Typography>

        <CardMedia component="img" image={cardData.img} alt="pokemon" />

        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" gap={0.5}>
              <Icon>
                <img src={SwordIcon} alt="arena" />
              </Icon>
              <Typography variant="h5" component="span">
                {cardData.atk}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" gap={0.5}>
              <Typography variant="h5" component="span">
                {cardData.hp}
              </Typography>
              <Icon>
                <img src={HeartIcon} alt="arena" />
              </Icon>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#ffff00",
          color: "#3f3f3f",
          mt: 1,
          mb: 2,
          width: "90%",
          ml: "5%",
          "&:hover": { color: "white" },
        }}
      >
        <Typography variant="h6">${cardData.cost}</Typography>
      </Button>
    </>
  );
}

export default PokeCard;
