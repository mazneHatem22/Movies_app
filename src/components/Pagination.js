
import ReactPaginate from "react-paginate"
import { useDispatch} from 'react-redux';
import {getAllPages} from "../redux/actions/movieAction";


const PaginationCom = () => {

  const dispatch=useDispatch()

//   useEffect(() => {
//     dispatch(getAllMovie())
//   }, []);

// const pages=useSelector((state)=> state.movies)


const getAllPagemove = async (page) => {
  dispatch(getAllPages(page))

  // setMovie(res.data.data.movies);
}

  
    const handlePageClick=(data)=>{
      getAllPagemove(data.selected+1);
       
    }
const pageCount=20



  return (

    <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"

        containerClassName={"pagination justify-content-center p-3" }
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        
      />

  )
}

export default PaginationCom
