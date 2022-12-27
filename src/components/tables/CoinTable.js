import "./styles.css";
import { Table } from "antd";
import { columns } from "./columns";
export default function CoinTable() {
  // const datasource = [
  //   {
  //     key: "1",
  //     num: "1",
  //     icon: "",
  //     address: "10232323",
  //     token: "",
  //     balance: "",
  //     usd: "",
  //     action: "",
  //   },
  //   {
  //     key: "2",
  //     num: "2",
  //     icon: "",
  //     address: "1324274",
  //     token: "",
  //     balance: "",
  //     usd: "",
  //     action: "",
  //   },
  //   {
  //     key: "3",
  //     num: "3",
  //     icon: "",
  //     address: "102342343",
  //     token: "",
  //     balance: "",
  //     usd: "",
  //     action: "",
  //   },
  // ];

  const [datasource, setDatasource] = useState([]);

  useEffect(() => {
    fetch("MOCK_DATA.json")
      .then((res) => res.json())
      .then((data) => (datasource = [...data]));

    return () => {
      cleanup;
    };
  }, [input]);

  setTimeout(() => {
    console.log("this is datasource: " + datasource);
  }, 3000);

  // function foo(src, target) {
  //   target = [...src];
  // }

  // function abs(handler) {
  //   fetch("MOCK_DATA.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let a = [];
  //       a.push(data);
  //       foo(a, datasource);
  //     });
  // }

  // console.log(datasource);
  // const columns = [
  //   {
  //     title: "#",
  //     dataIndex: "num",
  //     key: "num",
  //   },
  //   {
  //     title: "Icon",
  //     dataIndex: "icon",
  //     key: "icon",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Token",
  //     dataIndex: "token",
  //     key: "token",
  //   },
  //   {
  //     title: "Balance",
  //     dataIndex: "balance",
  //     key: "balance",
  //   },
  //   {
  //     title: "USD",
  //     dataIndex: "usd",
  //     key: "usd",
  //   },
  //   {
  //     title: "Action",
  //     dataIndex: "action",
  //     key: "action",
  //   },
  // ];

  return <Table dataSource={datasource} columns={columns} />;
}
