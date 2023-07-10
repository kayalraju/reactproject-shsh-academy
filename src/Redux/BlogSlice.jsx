import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"
import { toast } from "react-toastify"

const initialState = {
    articles: [],
    categories: [],
    recentArticles: [],
    searchedArticles: [],
    article: {},
    lastArticle: null,
    status: 'idle',
    recentArticlesStatus: 'idle',
    searchedArticlesStatus: 'idle'
}

export const GetBlogAticles = createAsyncThunk('Blog/Articles', async () => {
    try {
        const response = await AxiosInstance.get('allBlog')
        return response?.data
    } catch (e) {
        return e?.response?.data
    }
})

export const GetBlogCategories = createAsyncThunk('Blog/Categories', async () => {
    try {
        const response = await AxiosInstance.get('showallcategory')
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const GetRecentBlogArticles = createAsyncThunk('Blog/Recent/Articles', async () => {
    try {
        const response = await AxiosInstance.get('letest-post')
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const GetBlogArticlesByCategory = createAsyncThunk('Blog/Category/Articles', async (id) => {
    try {
        const response = await AxiosInstance.get(`category/post/${id}`)
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const GetBlogArticle = createAsyncThunk('Blog/Article', async (id) => {
    try {
        const response = await AxiosInstance.get(`blogdetails/${id}`)
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const GetSearchedBlogArticles = createAsyncThunk('Blog/Search/Articles', async (txt) => {
    try {
        const response = await AxiosInstance.get(`search/${txt}`)
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: {
        [GetBlogAticles.pending]: (state) => {
            state.status = 'loading'
            state.articles = null
        },
        [GetBlogAticles.fulfilled]: (state, action) => {
            state.status = 'success'
            state.articles = action.payload?.data
        },
        [GetBlogAticles.rejected]: (state, action) => {
            toast.error(action.payload?.message, {
                position: toast.POSITION.TOP_CENTER
            })
            state.status = 'failed'
            state.articles = null
        },
        [GetBlogCategories.pending]: (state) => {
            state.status = 'loading'
            state.categories = null
        },
        [GetBlogCategories.fulfilled]: (state, action) => {
            state.status = 'success'
            state.categories = action.payload
        },
        [GetBlogCategories.rejected]: (state, action) => {
            toast.error(action.payload?.message, {
                position: toast.POSITION.TOP_CENTER
            })
            state.status = 'failed'
            state.categories = null
        },
        [GetRecentBlogArticles.pending]: (state) => {
            state.recentArticlesStatus = 'loading'
            state.recentArticles = null
        },
        [GetRecentBlogArticles.fulfilled]: (state, action) => {
            state.recentArticlesStatus = 'success'
            state.recentArticles = action.payload
        },
        [GetRecentBlogArticles.rejected]: (state, action) => {
            toast.error(action.payload?.message, {
                position: toast.POSITION.TOP_CENTER
            })
            state.recentArticlesStatus = 'failed'
            state.recentArticles = null
        },
        [GetBlogArticlesByCategory.pending]: (state) => {
            state.status = 'loading'
            state.articles = null
        },
        [GetBlogArticlesByCategory.fulfilled]: (state, action) => {
            state.status = 'success'
            state.articles = action.payload?.data           
        },
        [GetBlogArticlesByCategory.rejected]: (state, action) => {
            toast.error(action.payload?.message, {
                position: toast.POSITION.TOP_CENTER
            })
            state.status = 'failed'
            state.articles = null
        },
        [GetBlogArticle.pending]: (state) => {
            state.status = 'loading'
            state.article = null
            state.lastArticle = 'Loading...'
        },
        [GetBlogArticle.fulfilled]: (state, action) => {
            state.status = 'success'
            state.article = action.payload?.data
            state.lastArticle = action.payload?.data?.title
        },
        [GetBlogArticle.rejected]: (state, action) => {
            toast.error(action.payload?.message, {
                position: toast.POSITION.TOP_CENTER
            })
            state.status = 'failed'
            state.article = null
        },
        [GetSearchedBlogArticles.pending]: (state) => {
            state.searchedArticlesStatus = 'loading'
            state.searchedArticles = null
        },
        [GetSearchedBlogArticles.fulfilled]: (state, action) => {
            state.searchedArticlesStatus = 'success'
            console.log(action.payload);
            state.searchedArticles = action.payload
        },
        [GetSearchedBlogArticles.rejected]: (state, action) => {
            toast.error(action.payload?.message, {
                position: toast.POSITION.TOP_CENTER
            })
            state.searchedArticlesStatus = 'failed'
            state.searchedArticles = null
        }
    }
})