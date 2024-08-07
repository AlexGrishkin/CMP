import * as React from "react";
import { TreeView, TreeItem } from "@mui/lab";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderIcon from "@mui/icons-material/Folder";

const data = [
  {
    id: "1",
    label: "Южная строительная площадка",
    salary: "20 348",
    equipment: "1 750",
    expenses: "108.07",
    children: [
      {
        id: "2",
        label: "Фундаментальные работы",
        salary: "20 348",
        equipment: "1 750",
        expenses: "108.07",
        children: [
          {
            id: "3",
            label: "Статья работы № 1",
            salary: "20 348",
            equipment: "1 750",
            expenses: "108.07",
          },
          {
            id: "4",
            label: "Статья работы № 2",
            salary: "38 200",
            equipment: "1 200",
            expenses: "850",
          },
        ],
      },
    ],
  },
];

const TreeTable = ({ nodes }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Уровень</TableCell>
            <TableCell>Наименование работ</TableCell>
            <TableCell>Основная з/п</TableCell>
            <TableCell>Оборудование</TableCell>
            <TableCell>Накладные расходы</TableCell>
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nodes.map((node) => (
            <React.Fragment key={node.id}>
              <TableRow>
                <TableCell>
                  <FolderIcon />
                </TableCell>
                <TableCell>{node.label}</TableCell>
                <TableCell>{node.salary}</TableCell>
                <TableCell>{node.equipment}</TableCell>
                <TableCell>{node.expenses}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              {node.children && <TreeTable nodes={node.children} />}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const App = () => {
  return <TreeTable nodes={data} />;
};

export default App;
