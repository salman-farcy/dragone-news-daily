
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

//img
import headingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
import DigitalWatch from "./DigitalWatch";

const Header = () => {
     const currentDate = getCurrentDate()
     return (
          <Box>
               <Container className="space-y-4 py-4" maxWidth="xl" >
                    <Image className=" mx-auto" src={headingImage} alt="heading logo" />
                    <Typography variant='body2' color='gray' textAlign='center' >
                         Journalism Without Fear or Favour
                    </Typography>
                    <Typography textAlign='center' >
                         {currentDate}
                    </Typography>
                    <Typography textAlign='center' >
                         {/* <DigitalWatch /> */}
                    </Typography>
               </Container>
          </Box>
     );
};

export default Header;