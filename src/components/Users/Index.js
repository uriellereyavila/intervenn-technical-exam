import { mapState } from "vuex";

export default {
    name: 'Users',
    data() {
        return {
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    value: 'name',
                },
                { text: 'Username', value: 'username', sortable: false, },
                { text: 'Email', value: 'email', sortable: false, },
                { text: 'Address', value: 'address', sortable: false, },
                { text: 'Phone', value: 'phone', sortable: false, },
                { text: 'Actions', value: 'phone', sortable: false, },
            ],
            userSearch: '',
            addUserDialog: false,
            nameRules: [
                v => !!v || 'This is required',
            ],
            addressRules: [
                v => !!v || 'This is required',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            phoneRules: [
                v => !!v || 'This is required',
                v => /^[0-9]+$/.test(v) || 'Invalid number format'
            ],
            formValid: true,
            userObj : {
                name: '',
                username: '',
                email: '',
                address: {
                    street: '',
                    city: '',
                    zipcode: '',
                    suite: '',
                    geo: {
                        lat: 0.0,
                        lng: 0.0
                    }
                },
                phone: '',
                website: '',
                company: {}
            }
        }
    },
    computed: {
        users() {
            return this.user.users;
        },
        isDataLoaded() {
            return this.user.isDataLoaded;
        },
        ...mapState(['user']),
    },
    methods: {
        getUsers() {
            this.$store.dispatch('getUsers');
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('addUser', { user: this.userObj })
                this.addUserDialog = false;
            }
        },
    },
    beforeMounted() {
        this.getUsers();
    }
}