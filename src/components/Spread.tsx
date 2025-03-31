import DessertCard from "./DessertCard.tsx";
import {
    DessertPair,
    dessertRecords,
    generateAllPermutations,
} from "../data/dessertRecords.ts";
import {useState} from "react";
import StatsBoard from "./StatsBoard.tsx";

interface SpreadProps {
    user: string
}

const Spread = ({user}: SpreadProps) => {
    const permutations = generateAllPermutations();
    const initialPick = permutations.shift();
    const [proposedDesserts, setProposedDesserts] = useState<DessertPair | undefined>(initialPick);
    const [votedOnDessertPairs, setVotedOnDessertPairs] = useState<DessertPair[]>([]);
    const [remainingDessertPairs, setRemainingDessertPairs] = useState<DessertPair[]>(permutations);
    // console.log(`In component. votes cast for ${JSON.stringify(votedOnDessertPairs)}. \nproposed pick is ${JSON.stringify(proposedDesserts)}\nremaining pairs are ${JSON.stringify(remainingDessertPairs)}`)

    const voteDessert = (pairing: DessertPair, winner: string, loser: string) => {
        // cast vote
        dessertRecords[winner]["wins"] += 1;
        dessertRecords[winner]["rounds"] += 1;
        dessertRecords[loser]["rounds"] += 1;

        //mark the vote as casted
        setVotedOnDessertPairs([...votedOnDessertPairs, pairing]);

        //pick new pair from remaining
        const newPairPick = remainingDessertPairs.shift();

        //remove new pair from remaining
        setRemainingDessertPairs([...remainingDessertPairs]);

        //propose new option
        setProposedDesserts(newPairPick);
    }

    return (
        <>
            <div id="desserts">
                { proposedDesserts != null ? (
                    <>
                    <div
                        onClick={() => {
                            voteDessert((proposedDesserts as DessertPair), (proposedDesserts as DessertPair).seat1, (proposedDesserts as DessertPair).seat2)
                        }}
                    >
                        <DessertCard
                            name={proposedDesserts.seat1}
                        />
                    </div>
                    <div
                        onClick={() => {
                            voteDessert((proposedDesserts as DessertPair), (proposedDesserts as DessertPair).seat2, (proposedDesserts as DessertPair).seat1)
                        }}
                    >
                        <DessertCard
                            name={proposedDesserts.seat2}
                        />
                    </div>
                    </>
                    ) : (
                        <h2>All done! ✅ Thanks for voting, {user}.</h2>
                    )
                }
            </div>
            <StatsBoard></StatsBoard>
        </>
    );
};

export default Spread;
