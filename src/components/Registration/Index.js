export default {
    data: () => ({
        valid: true,
        currentUser: {
            id: "999",
            name: "",
            username: "",
        },
        nameRules: [
            v => !!v || 'Name is required',
        ],
        userNameRules: [
            v => !!v || 'Username is required',
        ]
    }),

    methods: {
        validate() {
            if(this.$refs.form.validate()) {
                var sCurrentUser = JSON.stringify(this.currentUser);

                localStorage.setItem('currentUser', sCurrentUser);
                console.log(localStorage.getItem('currentUser'))
                window.location.reload();
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}