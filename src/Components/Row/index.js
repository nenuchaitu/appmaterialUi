import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Row = (props) => {
    const {row} = props


    return( <TableRow
                    key={row.item_id}
                    id={row.item_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                <TableCell component="th" scope="row" align="center">
                    {row.item_id}</TableCell>
                <TableCell align="center">{row.item_name}</TableCell>
                <TableCell align="center">{row.item_description}</TableCell>
                <TableCell align="center">{row.item_price}</TableCell>
                <TableCell align="center">
                <EditIcon fontSize="small" sx={{marginRight:2}}/>
                <DeleteIcon fontSize="small"/> 
                </TableCell>
            </TableRow>)
}
export default Row