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
        clicks: { active: [], resolved: [] },
        modalStatus: false,
        annotations: { active: [], resolved: [] },
      });
    },
    addClickPositions: (state, action) => {
      // console.log(action.payload);

      const post = state.find((e) => String(e.id) === action.payload.id);
      if (post) {
        post.clicks.active.push(action.payload.position);
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
        if (!post.annotations.active.includes(action.payload.annotation)) {
          post.annotations.active.push(action.payload.annotation);
        }
      }
    },
    handleResolved: (state, action) => {
      const post = state.find((e) => String(e.id) === action.payload.id);
      if (post && action.payload.activeTab === "active") {
        if (post.annotations.active.includes(action.payload.annotation)) {
          post.annotations.active.splice(
            post.annotations.active.indexOf(action.payload.annotation),
            1
          );
          if (!post.annotations.resolved.includes(action.payload.annotation)) {
            post.annotations.resolved.push(action.payload.annotation);
          }
        }
      }

      if (post && action.payload.activeTab === "resolved") {
        if (post.annotations.resolved.includes(action.payload.annotation)) {
          post.annotations.resolved.splice(
            post.annotations.resolved.indexOf(action.payload.annotation),
            1
          );
          if (!post.annotations.active.includes(action.payload.annotation)) {
            post.annotations.active.push(action.payload.annotation);
          }
        }
      }
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
