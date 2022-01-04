import {useState} from 'react';

import Input from '@mui/material/Input';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    icons:{
        fontSize: "15px",
        cursor:'pointer',
        marginRight:"10px"
    },
});

const Row = (props) => {
    const [editStatus,setEditStatus] = useState(false);
    
    const classes = useStyles();

    let ariaLabel = {item_name:"" ,item_description:"",item_price:0};
    const {row,deleteRow} = props

    const deleteOnClick = ()=>{
        deleteRow(row.item_id)
    }

    return( <TableRow
                key={row.item_id}
                id={row.item_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                <TableCell component="th" scope="row" align="center">
                    {row.item_id}</TableCell>
                {editStatus ? (<TableCell align="center"><Input placeholder="Enter Item Name" inputProps={ariaLabel.item_name} /></TableCell>) :(<TableCell align="center">{row.item_name}</TableCell>)}
                {editStatus ? (<TableCell align="center"><Input placeholder="Enter Item description" inputProps={ariaLabel.item_description} /></TableCell>) :(<TableCell align="center">{row.item_description}</TableCell>)}
                {editStatus ? (<TableCell align="center"><Input placeholder="Enter Item Price" inputProps={ariaLabel.item_price} /></TableCell>) :(<TableCell align="center">{row.item_price}</TableCell>)}
                <TableCell align="center">
                {editStatus ? 
                    (<>
                        <SaveIcon className={classes.icons}/>
                        <CancelIcon className={classes.icons} onClick={()=>(setEditStatus(false))}/>
                    </>):
                    (<>
                        <EditIcon  className={classes.icons} onClick={()=>(setEditStatus(true))}/>
                        <DeleteIcon  onClick={deleteOnClick} className={classes.icons}/>
                    </>)} 
                </TableCell>
            </TableRow>)
}
export default Row