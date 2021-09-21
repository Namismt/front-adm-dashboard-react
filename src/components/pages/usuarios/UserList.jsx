import "./UserList.css"
import {DataGrid} from '@mui/x-data-grid';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'pNome', headerName: 'Primeiro Nome', width: 130 },
        { field: 'sobrenome', headerName: 'Sobrenome', width: 130 },
        {
          field: 'idade',
          headerName: 'Idade',
          type: 'number',
          width: 90,
        },
        {
          field: 'NomeC',
          headerName: 'Nome Completo',
          description: 'Coluna pode ser usada como getter do db depois.',
          sortable: false,
          width: 160,
        },
      ];
      
      const rows = [
        { id: 1, sobrenome: 'Snow', pNome: 'Jon', idade: 35 },
        { id: 2, sobrenome: 'Lannister', pNome: 'Cersei', idade: 42 },
        { id: 3, sobrenome: 'Lannister', pNome: 'Jaime', idade: 45 },
        { id: 4, sobrenome: 'Stark', pNome: 'Arya', idade: 16 },
        { id: 5, sobrenome: 'Targaryen', pNome: 'Daenerys', idade: null },
        { id: 6, sobrenome: 'Melisandre', pNome: null, idade: 150 },
        { id: 7, sobrenome: 'Clifford', pNome: 'Ferrara', idade: 44 },
        { id: 8, sobrenome: 'Frances', pNome: 'Rossini', idade: 36 },
        { id: 9, sobrenome: 'Roxie', pNome: 'Harvey', idade: 65 },
      ];
    
    return (
        <div className="userList">
             <DataGrid rows={rows} columns={columns} pidadeSize={5} rowsPerPidadeOptions={[5]} checkboxSelection/>
        </div>
    )
}
