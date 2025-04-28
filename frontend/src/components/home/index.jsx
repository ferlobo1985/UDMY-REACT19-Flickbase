import { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux'
import { homeLoadMore } from "../../store/actions/articles";

import { Grid, Button } from "@mui/material";


const Home = () => {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(articles.articles.length <= 0){
            dispatch(homeLoadMore(articles.homeSort))
        }
    },[]);

    const getNextArticles = () =>{
        let skip = articles.homeSort.skip + articles.homeSort.limit;
        dispatch(homeLoadMore({
            ...articles.homeSort,
            skip:skip
        }))
    }

    return(
        <>
            <Button
                variant="outlined"
                onClick={getNextArticles}
            >
                Load More
            </Button>
        </>
    )
}

export default Home;