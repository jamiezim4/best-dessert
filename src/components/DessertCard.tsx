import Card from '@mui/material/Card';
import {CardContent, CardMedia} from "@mui/material";

interface DessertCardProps {
    name: string
}
const DessertCard = ({name}: DessertCardProps) => {
    const imagePath = `/src/assets/${name.replaceAll(" ", "-").toLowerCase()}.jpg`
    return (
        <Card
            className={"dessertCard"}
            raised={true}
            sx={{width: 250, height: 250}}
        >
            <CardContent>
                {name}
            </CardContent>
            <CardMedia
                component="img"
                sx={{ display: "block", marginLeft: "auto",
                    marginRight: "auto", maxWidth: 200 }}
                height="150"
                image={imagePath}
                alt="Ope"
            />
        </Card>
    );
}

export default DessertCard;