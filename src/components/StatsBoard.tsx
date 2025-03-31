import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {dessertRecords, getDessertStats, getRatio} from "../data/dessertRecords.ts";
import TableCell from "@mui/material/TableCell";

const StatsBoard = () => {
    const dessertStats = getDessertStats();

    return (
        <div style={{ height: '400px', overflow: 'auto' }}>
        <TableContainer component={Paper} sx={{ minWidth: 600 }}>
            <Table size="small" sx={{ mt: 10 }} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ 'color': 'white', 'backgroundColor': '#e75480' }}>Dessert</TableCell>
                        <TableCell sx={{ 'color': 'white', 'backgroundColor': '#e75480' }} align="right">Wins</TableCell>
                        <TableCell sx={{ 'color': 'white', 'backgroundColor': '#e75480' }} align="right">Rounds</TableCell>
                        <TableCell sx={{ 'color': 'white', 'backgroundColor': '#e75480' }} align="right">Ratio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(dessertStats).map((row) => (
                        <TableRow
                            key={row}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ 'color': '#e75480' }} component="th" scope="row">{row}</TableCell>
                            <TableCell sx={{ 'color': '#e75480' }} align="right">{dessertRecords[row]["wins"]}</TableCell>
                            <TableCell sx={{ 'color': '#e75480' }} align="right">{dessertRecords[row]["rounds"]}</TableCell>
                            <TableCell sx={{ 'color': '#e75480' }} align="right">{getRatio(dessertRecords[row])}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export default StatsBoard;
