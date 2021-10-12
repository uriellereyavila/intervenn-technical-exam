<template>
    <div>
        <h2>Users</h2>
        <v-row>
            <v-col cols="8" sm="12">
                <v-card class="pa-5">
                    <v-card-title>
                        <v-text-field
                            v-model="userSearch"
                            append-icon="mdi-magnify"
                            label="Type to Search..."
                            single-line
                            hide-details>
                        </v-text-field>
                        <v-dialog v-model="addUserDialog" persistent max-width="600px" >
                            <template v-slot:activator="{on, attrs}">
                                <v-btn color="success" small class="mt-5 ml-2" v-on="on" v-bind="attrs">
                                    Add
                                    <v-icon right dark>
                                        mdi-account-multiple-plus
                                    </v-icon>
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">Add User Details</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-form ref="form" v-model="formValid" lazy-validation >
                                            <v-row>
                                                <v-col cols="12"  >
                                                    <v-text-field label="Name*" :rules="nameRules" required v-model="userObj.name"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" >
                                                    <v-text-field label="Username*" :rules="nameRules" required v-model="userObj.username"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Email*" :rules="emailRules" required v-model="userObj.email" >
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <div class="d-block">
                                                        <h3>Address</h3>
                                                    </div>
                                                    <div class="d-flex">
                                                        <v-text-field label="Street*" required v-model="userObj.address.street" :rules="addressRules"></v-text-field>
                                                        <v-text-field label="City*" required class="px-2" v-model="userObj.address.city" :rules="addressRules"></v-text-field>
                                                        <v-text-field label="Zipcode*" required v-model="userObj.address.zipcode" :rules="addressRules"></v-text-field>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Phone*" required v-model="userObj.phone" :rules="phoneRules"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-container>
                                    <small>*indicates required field</small>
                                </v-card-text>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="addUserDialog = false" >
                                    Close
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="validate">
                                    Save
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-title>
                    <v-data-table 
                        :loading="!isDataLoaded"
                        loading-text="Loading Please Wait..."
                        :search="userSearch"
                        :headers="headers" 
                        :items="users"
                        :items-per-page="5">
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>
<script src="./Index.js"></script>