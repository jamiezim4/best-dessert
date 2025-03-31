import { TextField } from "@mui/material";

interface CollectUserProps {
    submit: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
const CollectUser = ({submit}: CollectUserProps) => {
    return (
        <>
            <h1>What's your name?</h1>
            <TextField
                fullWidth
                label={"name"}
                variant="outlined"
                color="secondary"
                onKeyDown={submit}
            />
        </>
    );
}

export default CollectUser;