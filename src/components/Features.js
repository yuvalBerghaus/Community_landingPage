// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import Chip from "@mui/material/Chip";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
// import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
// import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
// import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

// const items = [
//   {
//     icon: <ViewQuiltRoundedIcon />,
//     title: "Health Profile",
//     description:
//       "Organize your family's allergies, vaccines, emergency contacts, and other critical info for easy access, display, or sharing with healthcare providers.",
//     imageLight: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
//     imageDark: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
//   },
//   {
//     icon: <EdgesensorHighRoundedIcon />,
//     title: "Safe Sharing",
//     description:
//       "Have full control over what you share and determine the access level for each recipient, while maintaining a high level of security at all times.",
//     imageLight: 'url("../assets/fatal.jpeg")',
//     imageDark: 'url("../assets/fatal.jpeg")',
//   },
//   {
//     icon: <DevicesRoundedIcon />,
//     title: "Available on all platforms",
//     description:
//       "Community is available on iOS, Android, and web, our product ensures you can access and share critical information anytime, anywhere.",
//     imageLight: 'url("../assets/fatal.jpeg")',
//     imageDark: 'url("../assets/fatal.jpeg")',
//   },
// ];

// export default function Features() {
//   const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

//   const handleItemClick = (index) => {
//     setSelectedItemIndex(index);
//   };

//   const selectedFeature = items[selectedItemIndex];

//   return (
//     <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
//       <Grid container spacing={6}>
//         <Grid item xs={12} md={6}>
//           <div>
//             <Typography component="h2" variant="h4" color="text.primary">
//               The right&nbsp;
//               <Typography
//                 component="span"
//                 // variant="h1"
//                 sx={{
//                   fontSize: "clamp(2.5rem, 1vw, 1rem)",
//                   color: (theme) =>
//                     theme.palette.mode === "light"
//                       ? "primary.main"
//                       : "primary.light",
//                 }}
//               >
//                 information&nbsp;
//               </Typography>
//               at the right time
//             </Typography>
//             <Typography
//               variant="body1"
//               color="text.secondary"
//               sx={{ mb: { xs: 2, sm: 4 } }}
//             >
//               In emergencies, quick access to vital information can save lives.
//               Share and display critical details like allergies, vaccines,
//               emergency contacts, and medical history, so health practitioners
//               can make optimal decisions swiftly.
//             </Typography>
//           </div>
//           <Grid
//             container
//             item
//             gap={1}
//             sx={{ display: { xs: "auto", sm: "none" } }}
//           >
//             {items.map(({ title }, index) => (
//               <Chip
//                 key={index}
//                 label={title}
//                 onClick={() => handleItemClick(index)}
//                 sx={{
//                   borderColor: (theme) => {
//                     if (theme.palette.mode === "light") {
//                       return selectedItemIndex === index ? "primary.light" : "";
//                     }
//                     return selectedItemIndex === index ? "primary.light" : "";
//                   },
//                   background: (theme) => {
//                     if (theme.palette.mode === "light") {
//                       return selectedItemIndex === index ? "none" : "";
//                     }
//                     return selectedItemIndex === index ? "none" : "";
//                   },
//                   backgroundColor:
//                     selectedItemIndex === index ? "primary.main" : "",
//                   "& .MuiChip-label": {
//                     color: selectedItemIndex === index ? "#fff" : "",
//                   },
//                 }}
//               />
//             ))}
//           </Grid>
//           <Box
//             component={Card}
//             variant="outlined"
//             sx={{
//               display: { xs: "auto", sm: "none" },
//               mt: 4,
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundImage: (theme) =>
//                   theme.palette.mode === "light"
//                     ? items[selectedItemIndex].imageLight
//                     : items[selectedItemIndex].imageDark,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 minHeight: 280,
//               }}
//             />
//             <Box sx={{ px: 2, pb: 2 }}>
//               <Typography
//                 color="text.primary"
//                 variant="body2"
//                 fontWeight="bold"
//               >
//                 {selectedFeature.title}
//               </Typography>
//               <Typography
//                 color="text.secondary"
//                 variant="body2"
//                 sx={{ my: 0.5 }}
//               >
//                 {selectedFeature.description}
//               </Typography>
//               {/* <Link
//                 color="primary"
//                 variant="body2"
//                 fontWeight="bold"
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   "& > svg": { transition: "0.2s" },
//                   "&:hover > svg": { transform: "translateX(2px)" },
//                 }}
//               >
//                 <span>Learn more</span>
//                 <ChevronRightRoundedIcon
//                   fontSize="small"
//                   sx={{ mt: "1px", ml: "2px" }}
//                 />
//               </Link> */}
//             </Box>
//           </Box>
//           <Stack
//             direction="column"
//             justifyContent="center"
//             alignItems="flex-start"
//             spacing={2}
//             useFlexGap
//             sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
//           >
//             {items.map(({ icon, title, description }, index) => (
//               <Card
//                 key={index}
//                 variant="outlined"
//                 component={Button}
//                 onClick={() => handleItemClick(index)}
//                 sx={{
//                   p: 3,
//                   height: "fit-content",
//                   width: "100%",
//                   background: "none",
//                   backgroundColor:
//                     selectedItemIndex === index ? "action.selected" : undefined,
//                   borderColor: (theme) => {
//                     if (theme.palette.mode === "light") {
//                       return selectedItemIndex === index
//                         ? "primary.light"
//                         : "grey.200";
//                     }
//                     return selectedItemIndex === index
//                       ? "primary.dark"
//                       : "grey.800";
//                   },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: "100%",
//                     display: "flex",
//                     textAlign: "left",
//                     flexDirection: { xs: "column", md: "row" },
//                     alignItems: { md: "center" },
//                     gap: 2.5,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       color: (theme) => {
//                         if (theme.palette.mode === "light") {
//                           return selectedItemIndex === index
//                             ? "primary.main"
//                             : "grey.300";
//                         }
//                         return selectedItemIndex === index
//                           ? "primary.main"
//                           : "grey.700";
//                       },
//                     }}
//                   >
//                     {icon}
//                   </Box>
//                   <Box sx={{ textTransform: "none" }}>
//                     <Typography
//                       color="text.primary"
//                       variant="body2"
//                       fontWeight="bold"
//                     >
//                       {title}
//                     </Typography>
//                     <Typography
//                       color="text.secondary"
//                       variant="body2"
//                       sx={{ my: 0.5 }}
//                     >
//                       {description}
//                     </Typography>
//                     {/* <Link
//                       color="primary"
//                       variant="body2"
//                       fontWeight="bold"
//                       sx={{
//                         display: "inline-flex",
//                         alignItems: "center",
//                         "& > svg": { transition: "0.2s" },
//                         "&:hover > svg": { transform: "translateX(2px)" },
//                       }}
//                       onClick={(event) => {
//                         event.stopPropagation();
//                       }}
//                     >
//                       <span>Learn more</span>
//                       <ChevronRightRoundedIcon
//                         fontSize="small"
//                         sx={{ mt: "1px", ml: "2px" }}
//                       />
//                     </Link> */}
//                   </Box>
//                 </Box>
//               </Card>
//             ))}
//           </Stack>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
//         >
//           <Card
//             variant="outlined"
//             sx={{
//               height: "100%",
//               width: "100%",
//               display: { xs: "none", sm: "flex" },
//               pointerEvents: "none",
//             }}
//           >
//             <Box
//               sx={{
//                 m: "auto",
//                 width: 420,
//                 height: 500,
//                 backgroundSize: "contain",
//                 backgroundImage: (theme) =>
//                   theme.palette.mode === "light"
//                     ? items[selectedItemIndex].imageLight
//                     : items[selectedItemIndex].imageDark,
//               }}
//             />
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";

const content = {
  EN: [
    {
      icon: <ViewQuiltRoundedIcon />,
      title: "Health Profile",
      description:
        "Organize your family's allergies, vaccines, emergency contacts, and other critical info for easy access, display, or sharing with healthcare providers.",
      imageLight: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
      imageDark: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
    },
    {
      icon: <EdgesensorHighRoundedIcon />,
      title: "Safe Sharing",
      description:
        "Have full control over what you share and determine the access level for each recipient, while maintaining a high level of security at all times.",
      imageLight: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
      imageDark: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
    },
    {
      icon: <DevicesRoundedIcon />,
      title: "Available on all platforms",
      description:
        "Community is available on iOS, Android, and web, our product ensures you can access and share critical information anytime, anywhere.",
      imageLight: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
      imageDark: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
    },
  ],
  ES: [
    {
      icon: <ViewQuiltRoundedIcon />,
      title: "Perfil de Salud",
      description:
        "Organiza las alergias, vacunas, contactos de emergencia y otra información crítica de tu familia para un fácil acceso, visualización y compartir con el que usted decida.",
      imageLight: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
      imageDark: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
    },
    {
      icon: <EdgesensorHighRoundedIcon />,
      title: "Compartir con Seguridad",
      description:
        "Tenga control total sobre lo que comparte y determine el nivel de acceso para cada destinatario, mientras mantiene un alto nivel de seguridad en todo momento.",
      imageLight: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
      imageDark: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
    },
    {
      icon: <DevicesRoundedIcon />,
      title: "Acceso desde cualquier dispositivo",
      description:
        "Acceda a la información de salud de su familia desde cualquier dispositivo, en cualquier lugar y en cualquier momento, sin importar si usa Android, iPhone o Web.",
      imageLight: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
      imageDark: 'url("https://i.ibb.co/Bf5pbdJ/fatal-al.jpg")',
    },
  ],
};

export default function Features({ language }) {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const items = content[language] || content.EN;

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              {language === "ES" ? "La" : "The right"}&nbsp;
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(2.5rem, 1vw, 1rem)",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.light",
                }}
              >
                {language === "ES" ? "información" : "information"}&nbsp;
              </Typography>
              {language === "ES" ? "al Momento Correcto" : "at the right time"}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              {language === "ES"
                ? "URGENTE! el acceso rápido a información vital puede salvar vidas. Comparte y muestra detalles críticos como alergias, vacunas, contactos de emergencia e historial médico, para que los profesionales de la salud puedan tomar decisiones óptimas rápidamente."
                : "In emergencies, quick access to vital information can save lives. Share and display critical details like allergies, vaccines, emergency contacts, and medical history, so health practitioners can make optimal decisions swiftly."}
            </Typography>
          </div>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) =>
                    selectedItemIndex === index
                      ? theme.palette.mode === "light"
                        ? "primary.light"
                        : "primary.dark"
                      : theme.palette.mode === "light"
                      ? "grey.200"
                      : "grey.800",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box>{icon}</Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? selectedFeature.imageLight
                    : selectedFeature.imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
