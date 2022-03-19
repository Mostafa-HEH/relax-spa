import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const socialLinks = [
  {
    id: 1,
    link: "//www.instagram.com/",
    icon: (color) => <InstagramIcon className={color} />,
  },
  {
    id: 2,
    link: "//www.facebook.com/",
    icon: (color) => <FacebookIcon className={color} />,
  },
  {
    id: 3,
    link: "//www.twitter.com/",
    icon: (color) => <TwitterIcon className={color} />,
  },
];
