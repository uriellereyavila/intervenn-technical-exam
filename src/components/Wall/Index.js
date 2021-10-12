import { mapState } from 'vuex';
import Post from '../Post/Post';
import Registration from '../Registration/Registration'

export default {
    name: 'Wall',
    components: {
        Post,
        Registration
    },
    data: () => ({
        postInput: '',
        isUserRegistered: localStorage.getItem('currentUser') ? true : false
    }),
    computed: {
        posts() {
            return this.post.posts;
        },
        skeletonLoaderIsShown() {
            return this.post.skeletonLoaderIsShown;
        },
        ...mapState(['post'])
    },
    methods: {
        setUserRegistered: function() {
            return true;
        },
        addPost: function () {
            this.$store.dispatch('addPost', { post: this.postInput });
            this.postInput = '';
        },
        getPosts() {
            this.$store.dispatch('getPosts')
        },
    },
    mounted() {
        this.getPosts();
    }
}