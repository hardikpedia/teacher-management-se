import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Link } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import { OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
);
const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};

const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ModalForm({
  open,
  setOpen,
  handleClose,
  handleOpen,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  lastSchool,
  setLastSchool,
  flag,
  id,
  setId,
}) {
  const postData = async () => {
    const res = await fetch("http://localhost:3000/api/teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        lastSchool,
      }),
    });
    const data = await res.json();
    console.log(data);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setLastSchool("");
    handleClose();
    window.location.reload();
  };

  const putData = async () => {
    const res = await fetch("http://localhost:3000/api/teacher", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id:id,
        name,
        email,
        phone,
        address,
        lastSchool,
      }),
    });
    const data = await res.json();
    console.log(data);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setLastSchool("");
    handleClose();
    window.location.reload();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            {flag ? "Update Teacher" : "Add Teacher"}
          </h2>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="email"
              id="email"
              value={phone}
              name="email"
              onChange={(e) => setPhone(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Address
            </label>
            <input
              type="email"
              id="email"
              value={address}
              name="email"
              onChange={(e) => setAddress(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Last School
            </label>
            <input
              type="email"
              id="email"
              value={lastSchool}
              name="email"
              onChange={(e) => setLastSchool(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            onClick={flag ? putData : postData}
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {flag ? "Update" : "Add"}
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default function DataTable({ data }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [lastSchool, setLastSchool] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const [id, setId] = React.useState("");
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 180,
    },
    {
      field: "lastSchool",
      headerName: "Last School",
      width: 180,
    },
    {
      field: "Print",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Print
          </Button>
        );
      },
    },
    {
      field: "Edit",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={(event) => {
              setFlag(true);
              handleOpen();
              console.log(cellValues.row);
              setId(cellValues.row.id);
              setName(cellValues.row.name);
              setEmail(cellValues.row.email);
              setPhone(cellValues.row.phone);
              setAddress(cellValues.row.address);
              setLastSchool(cellValues.row.lastSchool);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = React.useState([]);
  const temp = data.teachers.map((item, index) => {
    return {
      id: item._id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      address: item.address,
      lastSchool: item.lastSchool,
    };
  });
  useEffect(() => {
    setRows(temp);
  }, []);
  console.log(rows);
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filteredRows = temp.filter((row) => {
      return row.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setRows(filteredRows);
  };
  return (
    <>
      <div>
        <div className="text-6xl text-white font-bold  mb-10  font-sarang text-center bg-[#3F51B5] p-3">
          Teacher Database
        </div>
        <div className="flex justify-around items-center pb-6">
          <Search onChange={handleSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            variant="contained"
            onClick={() => {
              setFlag(false);
              setName("");
              setEmail("");
              setPhone("");
              setAddress("");
              setLastSchool("");
              handleOpen();
            }}
            color="primary"
            endIcon={<AddIcon />}
          >
            Add
          </Button>
        </div>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[100]}
            checkboxSelection
            //   onCellClick={handleCellClick}
            //   onRowClick={handleRowClick}
          />
        </div>
      </div>
      <ModalForm
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
        name={name}
        email={email}
        phone={phone}
        address={address}
        lastSchool={lastSchool}
        setAddress={setAddress}
        setEmail={setEmail}
        setName={setName}
        setPhone={setPhone}
        setLastSchool={setLastSchool}
        flag={flag}
        id={id}
        setId={setId}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/teacher");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
