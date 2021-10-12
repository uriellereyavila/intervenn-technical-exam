import { mapState } from "vuex";

export default {
    name: 'Post',
    props: {
        postData: []
    },
    methods: {
        showComments() {
            this.$store.dispatch('showComments');
        }
    },
    computed: {
        comment() {
            return this.post.comment
        },
        ...mapState(['post'])
    },
    beforeMount() {
        
    },
    mounted() {
        // console.log('tsetsetsetse', this.comment)
    }
}