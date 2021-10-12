<template>
    <v-card class="pa-2">
        <v-card-title class="pt-0">
            {{ postData.user.name }}
        </v-card-title>
        <v-card-subtitle>
            {{ '@' + postData.user.username }}
        </v-card-subtitle>
        <v-card-text>
            <p>
                {{ postData.body }}
            </p>
        </v-card-text>
        <v-divider></v-divider>
        <!-- <v-card-actions>
            <v-textarea class="mx-2" auto-grow label="Write a comment..." prepend-icon="mdi-comment-processing-outline" rows="1" >
            </v-textarea>
            <v-btn fab color="success" small elevation="0">
                <v-icon>
                    mdi-send
                </v-icon>
            </v-btn>
        </v-card-actions> -->
        <v-divider></v-divider>
        <v-btn color="primary" class="mt-2" x-small elevation="0" v-on:click="showComments">
            {{ comment.name + ' (' + postData.comments.data.length + ')'}}
        </v-btn>
        <div v-show="comment.isShown">
            <v-list three-line>
                <div v-if="postData.comments.data.length > 0">
                    <template  v-for="comment in postData.comments.data">
                        <v-list-item v-bind:key='comment.id'>
                            <v-list-item-avatar v-if="comment">
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-html="comment.name || 'No Comment(s)'"></v-list-item-title>
                                <v-list-item-subtitle v-html="comment.body || ''"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </div>
                <div v-else>
                    <v-list-item v-bind:key='comment.id'>
                        <v-list-item-content>
                            <v-list-item-title v-html="'No Comment(s)'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list>
        </div>
    </v-card>
</template>
<script src="./Index.js"></script>