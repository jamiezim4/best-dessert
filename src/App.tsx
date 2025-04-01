import './App.css'
import Section from "./components/Section.tsx";
import Spread from "./components/Spread.tsx";
import {useState} from "react";
import CollectUser from "./components/CollectUser.tsx";

function App() {
    const [username, setUsername] = useState<string | null>(null);

    const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
            setUsername(e.target.value);
        }
    };

    return (
        <>
            {username == null ? (
                <CollectUser
                    submit={handleChange}
                >
                </CollectUser>
            ) : (
                <>
                    <Section
                        title={"What's the Best Dessert?"}
                    >
                        Submit your votes, {username}
                    </Section>
                    <Spread
                        user={username}
                    />
                </>
            )
            }
        </>
    )
};

export default App;
