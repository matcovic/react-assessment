import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";

const sliders = [
  {
    id: "1",
    title: "A picture is worth a thousand words",
    body: "It clearly and beautifully captures your emotions- the joy, thelaughter, the tears, you name it. Our pride is in offering the bestshoots as we help you tell your story in photos.",
    image: "/bg-img.png",
    button: "View Gallery",
  },
  {
    id: "2",
    title: "Lorem Ipsum, sometimes referred to as 'lipsum'",
    body: "It clearly and beautifully captures your emotions- the joy, thelaughter, the tears, you name it. Our pride is in offering the bestshoots as we help you tell your story in photos. 2",
    image: "/bg-img.png",
    button: "View Gallery 2",
  },
];

const useStyles = makeStyles((theme) => ({
  sliderImage: {
    maxHeight: "650px",
  },
  carouselContent: {
    position: "absolute",
    textAlign: "left",
    bottom: "20px",
    padding: "1% 10%",
    [theme.breakpoints.up("sm")]: {
      bottom: "100px",
      padding: "10%",
    },
  },
}));

const CustomizedCarousel = () => {
  const classes = useStyles();

  return (
    <Carousel>
      {sliders.map((slider, index) => (
        <div key={slider.id}>
          <img alt="" src={slider.image} className={classes.sliderImage} />
          <div className={classes.carouselContent}>
            <Typography variant="h5">{slider.title}</Typography>
            <Typography variant="subtitle1">{slider.body}</Typography>
            <Button variant="outlined" color="secondary">
              {slider.button}
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomizedCarousel;
