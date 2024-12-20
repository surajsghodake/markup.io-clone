import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addInitialPosts: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img,
        clicks: [],
        modalStatus: false,
        annotations: [],
      });
    },
    addClickPositions: (state, action) => {
      // console.log(action.payload);

      const post = state.find((e) => String(e.id) === action.payload.id);
      if (post) {
        post.clicks.push(action.payload.position);
      }
    },
    changeModalStatus: (state, action) => {
      const post = state.find((e) => String(e.id) === action.payload.id);
      if (post) {
        post.modalStatus = action.payload.status;
      }
    },
    addAnnotation: (state, action) => {
      const post = state.find((e) => String(e.id) === action.payload.id);
      if (post) {
        if (!post.annotations.includes(action.payload.annotation)) {
          post.annotations.push(action.payload.annotation);
        }
      }
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
