import React, { useEffect, useState } from "react";
import "./App.css";
// import DatePicker from "./components/DatePicker";
// import InputField from "./components/InputField";
// import TodoList from "./components/TodoList";
import Home from "./Home";
// import { useStorage } from "./hooks/useStorage";
// import { Todo } from "./model";
// import moment from "moment";
import { Button } from "@mui/material";
// import { Input } from "./components/Input";
// import LoginForm from "./components/LoginForm";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginForm from "./components/LoginForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "./components/modal/Modal";
import { useNotificationContext } from "./contexts/Notification";
import { Table } from "./components/table/Table";
import { jsPDF } from "jspdf";
import PdfTemplate from "./components/pdf/PdfTemplate";
import { Stack } from "@mui/system";
import DemoPdf from "./components/slip/DemoPdf";
// import MobileCalendar from "react-scroll-calendar";
import DatePicker from "react-multi-date-picker";
import Calendar from "react-multi-date-picker";
import moment from "moment";
import "react-scroll-calendar/build/react-scroll-calendar.css";
// import html2canvas from "html2canvas";
const html2pdf = require("html2pdf.js");
const App: React.FC = () => {
  // const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [value, setValue] = useStorage("todos", "");
  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (todo) {
  //     setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
  //     setTodo("");
  //   }
  // };
  // console.log(moment().format("MM-DD-YYYY"));
  const columns = [
    {
      label: "Sr. No.",
      isIndex: true,
    },
    {
      label: "name",
      renderRow: (row: any) => {
        return row.name;
      },
    },
    {
      label: "salary",
      renderRow: (row: any) => {
        return row.salary;
      },
    },
  ];
  const data = [
    {
      name: "tikam",
      salary: 90909,
    },
  ];
  const [page, setPage] = useState(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const { notify } = useNotificationContext();
  const Login = () => {
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: "anotherexample@gmail.com",
        password: "anotherpassword",
      }),
    }).then((data) => {
      console.log(data);
    });
  };
  useEffect(() => {
    Login();
  }, []);
  type FormValues = {
    email: string;
  };

  // const { register, handleSubmit } = useForm<FormValues>();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    notify({ message: "this is message", type: "error" });
  };

  const { ...formHook } = useForm({
    resolver: yupResolver(schema),
  });

  async function generate() {
    // const doc = new jsPDF({ format: "a4", unit: "px" });
    // doc.text("Hello world!", 10, 10);
    // doc.html(
    //   `<h5 style="color:blue; width:300px ; border:2px solid red" >this is in h5 tag</h5>`,
    //   {
    //     async callback(doc) {
    //       await doc.save("document");
    //     },
    //   }
    // );
    // doc.save("a4.pdf");
    const input = document.getElementById("divToPrint") as HTMLElement;
    // var opt = {
    //   margin: 10,
    //   filename: "myfile.pdf",
    //   image: { type: "jpeg", quality: 0.98 },
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: "px", format: "letter", orientation: "portrait" },
    // };
    // html2pdf().from(input).set(opt).save();
    html2pdf().from(input).save();
  }
  const [value, setValue] = useState(new Date());
  return (
    <>
      {/* <Home />
      <h1>Heading for app</h1> */}
      {/* <h1>{value}</h1> */}
      {/* <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} /> */}
      {/* <DatePicker
          formHook={formHook}
          name="active_year"
          views={["year"]}
          type="datetime-local"
        />
        <DatePicker
          formHook={formHook}
          name="de_active_year"
          views={["year"]}
          type="datetime-local"
          /> 
          <Button type="submit">onSubmit</Button>
        */}
      {/* <LoginForm onSubmit={onSubmit} formHook={formHook} />
      <div id="divToPrint">
        <h1>this is a heading </h1>
        <p>paragraph</p>
        <Table
          lastPage={4}
          currentPage={page}
          perPage={5}
          orderBy={"ASC"}
          columns={columns}
          rows={data}
          loading={true}
          onPageChange={handleChange}
          total={20}
        />
      </div> */}
      {/* <Button onClick={generate} variant="contained" sx={{ mt: 2 }}>
        genereate pdf
      </Button> */}
      {/* Pdf using React pdf renderer */}
      {/* <Stack
        sx={{ border: "2px solid red", height: "100%" }}
        alignItems={"center"}
      >
        <PdfTemplate />
        <DemoPdf/>
      </Stack> */}
      <Stack alignItems="center" display={"flex"}>
        {/* <Stack sx={{ width: "50%" }}>
          <MobileCalendar
            minDate={moment("2019-01-14", "YYYY-MM-DD")}
            selectedDate={moment()}
            maxDate={moment("2050-12-31", "YYYY-MM-DD")}
          />
        </Stack> */}
        <DatePicker
          multiple={true}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <Calendar
          multiple={true}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
      </Stack>
    </>
  );
};

export default App;
