import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function useTitleValue(defaultValue = '') {
  const [Title, setTitle] = useState(defaultValue)

  return {
      bind: {
          Title,
          onChange: event=>setTitle(event.target.value)
      },
      clear: ()=>setTitle(''),
      Title: ()=>Title
  }
}
function useDetailsValue(defaultValue = '') {
  const [Details, setDetails] = useState(defaultValue)

  return {
      bind: {
          Details,
          onChange: event=>setDetails(event.target.value)
      },
      clear: ()=>setDetails(''),
      Details: ()=>Details
  }
}
function useCategoryValue(defaultValue = '') {
  const [Category, setCategory] = useState(defaultValue)

  return {
      bind: {
          Category,
          onChange: event=>setCategory(event.target.value)
      },
      clear: ()=>setCategory(''),
      Category: ()=>Category
  }
}

function AddNews({onCreate}) {

  const title = useTitleValue("");
  const details = useDetailsValue("");
  const category = useCategoryValue("");

  function submitHandler(event){
    event.preventDefault()

    
    onCreate(title.Title(),details.Details(),category.Category().toLowerCase())

    title.clear()
    details.clear()
    category.clear()
    
}


  return (
    <div className="container mt-lg-5 d-flex ">
      <form className="col-4 mx-auto" onSubmit={submitHandler}>
        <div className="form-group">
          <label for="exampleInputEmail1">News' Title</label>
          <input
            {...title.bind}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            required
          />
        </div>
        <div className="form-group">
        <label for="exampleInputEmail1">News' Category</label>
          <select {...category.bind} class="form-select" required aria-label="Default select example">
            <option value='politics'>Politics</option>
            <option value='sport'>Sport</option>
            <option value='tech'>Technology</option>
            <option value='bussiness'>Bussiness</option>
          </select>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Desciption</label>
          <textarea
            {...details.bind}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          style={{ backgroundColor: "#013799" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNews;
