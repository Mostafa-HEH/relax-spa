import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CallIcon from "@mui/icons-material/Call";

// nave list items
export const navLinks = [
  {
    id: 1,
    name: "home",
    icon: () => <HomeIcon fontSize="small" />,
    linkUrl: "/",
    linkName: "Home",
  },
  {
    id: 2,
    name: "about",
    icon: () => <InfoIcon fontSize="small" />,
    linkUrl: "/about",
    linkName: "About us",
  },
  {
    id: 3,
    name: "services",
    icon: () => <MedicalServicesIcon fontSize="small" />,
    linkUrl: `/services`,
    linkName: "Our services",
  },
  {
    id: 4,
    name: "connect",
    icon: () => <CallIcon fontSize="small" />,
    linkUrl: `/connectus`,
    linkName: "Connect us",
  },
];
