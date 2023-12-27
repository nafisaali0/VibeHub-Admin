import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "catagory",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getBlogState = useSelector((state) => state.blog.blogs);
 
  const data1 = [];
  for (let i = 0; i < getBlogState?.length; i++) {
    data1.push({
      key: i + 1,
      name: getBlogState[i].title,
      catagory: getBlogState[i].catagory,

      action: (
        <>
          <Link
            to={`/admin/blog/${getBlogState[i].id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button className="ms-3 fs-3 text-danger bg-transparent border-0">
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  return (
    <div className="mt-4">
      <h3 className="mb-5 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogList;
