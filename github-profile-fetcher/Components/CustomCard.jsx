import{
    Card,
    CardContent,
    Avatar,
    Box,
    Divider
} from "@mui/material"

// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Divider from "@mui/material/Divider";

const CustomCard = ({profile}) => {
  console.log(profile)
  const Github_Profile = profile

  return (
        <div id="container">  
            <Card 
              sx={{
              borderRadius: "48px",
              minWidth: 256,
              height: 250,
              width:350,
              textAlign: "center",
              boxShadow:
                "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
              }}
            >
            <CardContent>
              <Avatar
                src={Github_Profile.avatar_url}
                sx={{
                width: 70,
                height: 70,
                margin: "auto"
                }}
              />
              <Box
                component="h3"
                sx={{
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: "0.5px",
                marginTop: 1,
                marginBottom: 0,
                }}
              >
                  {Github_Profile.login}
              </Box>
              <Box
                component="span"
                sx={{
                fontSize: 14,
                color: "grey.500",
                marginBottom: "0.875em",
                }}
              >
                {Github_Profile.bio}
              </Box>
            </CardContent>
            <Divider  
                sx={{ 
                    opacity: 0.6 
                }} 
            />
            <Box display={"flex"}>
              <Box
                p={2}
                flex={"auto"}
                sx={{
                  position: "relative",
                  "&:not(:last-of-type)": {
                  "&:after": {
                    content: '" "',
                    display: "block",
                    position: "absolute",
                    height: "50%",
                    width: "1px",
                    backgroundColor: "rgba(0 0 0 / 0.08)",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    },
                  },
                }}
              >
              <Box
                sx={{
                  fontSize: 12,
                  color: "grey.500",
                  fontWeight: 500,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  margin: 0,
                }}
              >
                Followers
              </Box>
              <Box
                component="p"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 0.5,
                  letterSpacing: "1px",
                }}
              >
                 {Github_Profile.followers}
              </Box>
              </Box>
              <Box
                p={2}
                flex={"auto"}
                sx={{
                  position: "relative",
                  "&:not(:last-of-type)": {
                    "&:after": {
                      content: '" "',
                      display: "block",
                      position: "absolute",
                      height: "50%",
                      width: "1px",
                      backgroundColor: "rgba(0 0 0 / 0.08)",
                      top: "50%",
                      right: 0,
                      transform: "translateY(-50%)",
                    },
                  },
                }}
              >
              <Box
                sx={{
                  fontSize: 12,
                  color: "grey.500",
                  fontWeight: 500,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  margin: 0,
                }}
              >
                Following
              </Box>
              <Box
                component="p"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 0.5,
                  letterSpacing: "1px",
                }}
              >
                {Github_Profile.following}
              </Box>
            </Box>
          </Box>
        </Card>
        </div>
    )
}

export default CustomCard;