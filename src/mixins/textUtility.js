export default {
    data() {
        return {
            utilityName: 'text utility',
            creator: 'Alexey Belaynin'
        }
    },
    computed: {
        fullName () {
            return this.utilityName + ' ' + this.creator
        }

    },
    methods: {
        textUtility_capitalize(word) {
            if (word && typeof word === 'string'){
                return word.charAt(0).toUpperCase() + word.slice(1)
            }
        }
    }
}