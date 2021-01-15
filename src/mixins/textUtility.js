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
            if (word!==undefined && typeof word === 'string'){
                return word.charAt(0).toUpperCase() + word.slice(1)
            } else
            {
                return undefined
            }
        }
    }
}