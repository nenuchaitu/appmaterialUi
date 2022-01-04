import {Component} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

class Home extends Component{
    state = {rows:[]}
    
    componentDidMount(){
        this.setState({rows:this.props.items})
    }

    

    render(){
        const {rows} = this.state
        const columnsList = ["item_id","item_name","item_description","item_price","actions"]
    return(<>
            <div>
                <TableContainer  component={Paper}>
                    <Table sx={{minWidth:650}} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            {columnsList.map((column)=>(<TableCell key={column} align="center">{column}</TableCell>))}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                    {rows.map((row) => (
                    <TableRow
                    key={row.item_id}
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
            </TableRow>
          ))}
        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
    </>)
    }
}

export default Home
