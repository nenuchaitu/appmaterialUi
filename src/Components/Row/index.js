import {useState,useEffect} from 'react';

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
    const [itemName,setItemName] = useState("");
    const [itemDescription,setItemDescription] = useState("");
    const [itemCost,setItemCost] = useState(0);
    
    useEffect(()=>{
        if(row.item_name===""){
            setEditStatus(true)   
        }
    },[])

    const classes = useStyles();

    let ariaLabel = {item_name:{type:"text"} ,item_description:{type:"text"},item_price:{type:"numbers"}};
    const {row,deleteRow,saveChangesToList} = props

    const deleteOnClick = ()=>{
        deleteRow(row.item_id)
    }
    const saveItemChanges = () => {
        const item = {
            item_name:itemName,
            item_description:itemDescription,
            item_cost:itemCost
        }
        console.log("inrow")
        saveChangesToList(item,row.item_id)
        setEditStatus(false)
    }

    return( <TableRow
                key={row.item_id}
                id={row.item_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                <TableCell component="th" scope="row" align="center">
                    {row.item_id}</TableCell>
                {editStatus ? (<TableCell align="center"><Input onChange={(event)=>{setItemName(event.target.value)}} value = {itemName} placeholder="Enter Item Name" inputProps={ariaLabel.item_name} type="text"/></TableCell>) :(<TableCell align="center">{row.item_name}</TableCell>)}
                {editStatus ? (<TableCell align="center"><Input onChange={(event)=>{setItemDescription(event.target.value)}} value= {itemDescription} placeholder="Enter Item description" inputProps={ariaLabel.item_description} type="text"/></TableCell>) :(<TableCell align="center">{row.item_description}</TableCell>)}
                {editStatus ? (<TableCell align="center"><Input onChange={(event)=>{setItemCost(event.target.value)}} value= {itemCost} placeholder="Enter Item Price" inputProps={ariaLabel.item_price} type="number"/></TableCell>) :(<TableCell align="center">{row.item_price}</TableCell>)}
                <TableCell align="center">
                {editStatus ? 
                    (<>
                        <SaveIcon className={classes.icons} onClick={saveItemChanges}/>
                        <CancelIcon className={classes.icons} onClick={()=>{setEditStatus(false)}}/>
                    </>):
                    (<>
                        <EditIcon  className={classes.icons} onClick={()=>{setEditStatus(true)}}/>
                        <DeleteIcon  onClick={deleteOnClick} className={classes.icons}/>
                    </>)} 
                </TableCell>
            </TableRow>)
}
export default Row