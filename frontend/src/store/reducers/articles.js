import { createSlice } from '@reduxjs/toolkit';
import {
    getCategories,
    addArticle,
    getPaginatedArticles,
    changeStatusArticle
} from '../actions/articles'

export const articlesSlice = createSlice({
    name:'articles',
    initialState:{
        homeSort:{
            sortby:"_id",
            order:"desc",
            limit:8,
            skip:0
        },
        loading:false,
        articles:[],
        current:null,
        categories:[]
    },
    reducers:{
        updateCategories:(state, action)=>{
            state.categories = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        /// ADD ARTICLE
        .addCase(addArticle.pending,(state)=>{state.loading = true})
        .addCase(addArticle.fulfilled,(state,action)=>{
          state.loading = false;
          state.lastAdded = action.payload
        })
        .addCase(addArticle.rejected,(state)=>{state.loading = false})
        /// GET PAGINATED ARTICLES
        .addCase(getPaginatedArticles.pending,(state)=>{state.loading= true;})
        .addCase(getPaginatedArticles.fulfilled,(state,action)=>{
            state.loading= false;
            state.adminArticles = action.payload
        })
        .addCase(getPaginatedArticles.rejected,(state)=>{state.loading = false})
        ///  CHANGE STATUS ARTICLE
        .addCase(changeStatusArticle.fulfilled,(state,action)=>{
            state.adminArticles.docs = action.payload
        })
        /// GET CATEGORY
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.categories = action.payload
        })
    }
})

export const {updateCategories} = articlesSlice.actions;
export default articlesSlice.reducer;