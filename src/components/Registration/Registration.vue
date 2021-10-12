<template>
  <v-row>
    <v-col cols="12" sm="12">
        <v-card elevation="1" rounded class="pa-4">
            <h4>Fill up the Form to Proceed</h4>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="currentUser.name" :counter="10" :rules="nameRules" label="Name" required ></v-text-field>
                <v-text-field v-model="currentUser.username" :counter="10" :rules="nameRules" label="Username" required ></v-text-field>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
                    Next
                </v-btn>

                <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

                <v-btn color="warning" @click="resetValidation">
                Reset Validation
                </v-btn>
            </v-form>
        </v-card>
    </v-col>
  </v-row>
</template>
<script src="./Index.js"></script>