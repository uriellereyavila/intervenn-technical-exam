<template>
    <div>
        <h2 class="mb-5">Posts</h2>
        <Registration transition="fade-transition" v-if="!isUserRegistered" />
        <v-row v-if="isUserRegistered">
            <v-col cols="12" sm="12" >
                <v-card class="pa-2" outlined elevation="1" >
                    <div class="d-flex">
                        <v-avatar color="accent" size="50">
                            <v-icon>
                                mdi-account
                            </v-icon>
                        </v-avatar>
                        <v-textarea v-model="postInput" class="mx-2" auto-grow label="Write Something..." rows="1" >
                        </v-textarea>
                    </div>
                    <v-btn color="primary" elevation="0" block :disabled="postInput === ''" v-on:click="addPost">Post</v-btn>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" :style="{ display: skeletonLoaderIsShown ? 'block' : 'none' }">
                <v-skeleton-loader  type="article, actions" ></v-skeleton-loader>
                <v-skeleton-loader  type="article, actions" ></v-skeleton-loader>
                <v-skeleton-loader  type="article, actions" ></v-skeleton-loader>
                <v-skeleton-loader  type="article, actions" ></v-skeleton-loader>
            </v-col>
            <v-col v-model="posts" cols="12" sm="12" v-for="post in posts" v-bind:key="post.id" transition="fade-transition">
                <Post :postData="post" />
            </v-col>
        </v-row>
    </div>
</template>

<script src="./Index.js"> </script>