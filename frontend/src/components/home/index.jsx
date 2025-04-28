import { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux'
import { homeLoadMore } from "../../store/actions/articles";
import ArticleCard from "../../utils/articleCard";

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
            <Grid container spacing={2} className="article_card">
                { articles && articles.articles ?
                    articles.articles.map(item=>(
                        <Grid key={item._id} item size={{xs:12,sm:4,md:6,lg:3}}>
                            <ArticleCard article={item}/>
                        </Grid>
                    ))
                :null}
            </Grid>
            <hr/>
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