import gql from 'graphql-tag';
import { ClientRequest } from '../../main';

export default {
    state: () => ({
        posts: [],
        skeletonLoaderIsShown: true,
        comment: {
            name: "Show Comments",
            isShown: false
        }
    }),
    mutations: {
        SET_POSTS: (state, posts) => {
            state.posts = posts
        },
        ADD_POST: (state, payload) => {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var postObj = {
            id: payload.post.id,
            title: payload.post.title,
            body: payload.post.body,
            comments: {
                data: []
            },
            user: {
                id: currentUser.id,
                name: currentUser.name,
                username: currentUser.username
            }
            }
    
            state.posts.unshift(postObj)
        },
        SKELETON_LOADER_TOGGLE: (state, isShown) => {
            state.skeletonLoaderIsShown = isShown;
        },
        SET_SHOW_COMMENTS: (state, post) => {
            state.comment.isShown = post.isShown;
            state.comment.name = post.name
        }
    },
    actions: {
        getPosts: async ({ commit }) => {
            await ClientRequest.query({
            query: gql`
                {
                    posts {
                        data {
                            user {
                                name
                                    username
                                }
                                title
                                body
                                comments {
                                data {
                                    id
                                    name
                                    body
                                }
                            }
                        }
                    }
                }
                `
            }).then(res => {
                commit('SET_POSTS', res.data.posts.data);
                commit('SKELETON_LOADER_TOGGLE', false);
            }).catch(err => {
                console.log('error', err)
            })
        },
        addPost: async ({ commit }, payload) => {
            await ClientRequest.mutate({
            mutation: gql`
                mutation {
                    createPost (input: {
                        title: "",
                        body: "${payload.post}"
                    }) {
                        id
                        title
                        body
                    }
                }
            `
            }).then(res => {
                commit('ADD_POST', { post: res.data.createPost });
            }).catch(err => {
                console.log('error', err)
            })
        },
        showComments: function ({ commit, state }) {
            console.log(state.comment.isShown)

            var post = {
                name: state.comment.isShown ? 'Show Comments' : 'Hide Comments',
                isShown: !state.comment.isShown
            }
            commit('SET_SHOW_COMMENTS', post)
        }
    }
}