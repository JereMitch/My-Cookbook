import { Grid2 as Grid, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { StyledSection, StyledSectionContainer, StyledTab } from "./LandingPageStyles";

const sections = [
    {
        index: 0,
        id: "discover",
        header: "Discover New Recipes",
        subHeader: "Discover subheader text",
        body: "Here is some basic body text",
        img: "I'm gonna be an image",
    },
    {
        index: 1,
        id: "cookbook",
        header: "Organize Your Cookbook",
        subHeader: "Cookbook subheader text",
        body: "Here is some basic body text",
        img: "I'm gonna be an image",
    },
    {
        index: 2,
        id: "meal-plan",
        header: "Your Recipes",
        subHeader: "Your Schedule",
        body: "Here is some basic body text",
        img: "I'm gonna be an image",
    },
    {
        index: 3,
        id: "shopping-list",
        header: "Grocery List Made Easy",
        subHeader: "Simply click to add",
        body: "Here is some basic body text",
        img: "I'm gonna be an image",
    },
]

const TabSection = ({ id, header, subheader, body, img }) => {
    return (
        <StyledSectionContainer id={`${id}-container`}>
                <StyledSection>
                    <Typography variant="h4">{header}</Typography>
                    <Typography variant="h5">{subheader}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </StyledSection>
                <StyledSection><p>{img}</p></StyledSection>
        </StyledSectionContainer>
    )
}

function TabPanel(props){
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    )
}

export default function PreviewSection() {
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

  return (
    <Grid container display="flex" flexDirection="column">
        <Grid sx={{ alignSelf: "center", padding: "2.5rem 0"}}>
            <Tabs value={value} onChange={handleChange}>
                <StyledTab label="Discover" />
                <StyledTab label="Cookbook" />
                <StyledTab label="Meal Plan" />
                <StyledTab label="Shopping List" />
            </Tabs>
        </Grid>
        <Grid display="inherit" justifyContent="center">
            {sections.map((section, i) => (
                <TabPanel key={i} value={value} index={section.index}>
                    <TabSection key={i} id={section.id} header={section.header} subheader={section.subHeader} body={section.body} img={section.img} />
                </TabPanel>
            ))}
        </Grid>   
    </Grid>
  )
}
