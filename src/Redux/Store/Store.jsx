import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "../BlogSlice";
import { ServicesSlice } from "../ServicesSlice";
import { TestimonialsSlice } from "../TestimonialsSlice";
import { AuthSlice } from "../AuthSlice";
import { CommentSlice } from "../CommentSlice";
import { CourseSlice } from "../CourseSlice";
import { UserSlice } from "../UserSlice.jsx";
import { BannerSlice } from "../BannerSlice";
import { TeamSlice } from "../TeamSlice";
import { ContactSlice } from "../ContactSlice";

const Store = configureStore({
    reducer: {
        Blog: BlogSlice.reducer,
        Services: ServicesSlice.reducer,
        Testimonials: TestimonialsSlice.reducer,
        Auth: AuthSlice.reducer,
        Comment: CommentSlice.reducer,
        Courses: CourseSlice.reducer,
        User: UserSlice.reducer,
        Banner: BannerSlice.reducer,
        Team: TeamSlice.reducer,
        Contact: ContactSlice.reducer,
    }
})

export default Store