import gql from "graphql-tag";
import { ClientRequest } from "../../main";

export default {
    state: () => ({
        users: [],
        newId: 0,
        isDataLoaded: false
    }),
    mutations: {
        SET_USERS: function (state, users) {
            state.users = users;
            state.isDataLoaded = true;
        },
        ADD_USER: function (state, user) {
            user.address = `${user.address.street}, ${user.address.city} ${user.address.zipcode}`
            state.users.unshift(user);
        }
    },
    actions: {
        getUsers: async ({commit}) => {
            await ClientRequest.query({
                query: gql`
                {
                    users {
                        data {
                            id
                            name
                            username
                            email
                            address {
                                street
                                city
                                zipcode
                            }
                            phone
                        }
                    }
                }
                `
            }).then(res => {
                var users = res.data.users.data;
                var userWithFullAddress = []
                
                users.map((data) => {
                    data.address = `${data.address.street}, ${data.address.city} ${data.address.zipcode}`
                    data.actions
                    userWithFullAddress.push(data)
                })

                commit('SET_USERS', userWithFullAddress)
            })
        },
        addUser: async ({commit}, payload) => {
            await ClientRequest.mutate({
                mutation: gql`
                    mutation {
                        createUser(input: {
                                name: "${payload.user.name}",
                                username: "${payload.user.username}",
                                email: "${payload.user.email}",
                                address: {
                                    street: "${payload.user.address.street}",
                                    city: "${payload.user.address.city}",
                                    zipcode: "${payload.user.address.zipcode}",
                                    suite: "",
                                    geo: {
                                        lat: 0.00,
                                        lng: 0.00
                                    }
                                },
                                phone: "${payload.user.phone}",
                                website: "",
                                company: {}
                            }
                        ) {
                            name
                            username
                            email
                            address {
                                street
                                city
                                zipcode
                            }
                            phone
                        }
                    }
                `
            }).then(res => {
                commit('ADD_USER', res.data.createUser)
            }).catch(err => {
                console.log(err)
            })
        }

    }
}