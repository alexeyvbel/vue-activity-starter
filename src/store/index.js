import fakeAPI from "@/lib/fakeAPI";

const store = {
    state: {
        activities: {},
        categories: {}
    },
    generateUid () {return Math.floor(new Date() * Math.random())},

    fetchActivities () {
        return fakeAPI.get('activities',{force:1})
    },

    fetchCategories () {
        return fakeAPI.get('categories',{force:1})
    },

    createActivityAPI (activity) {
        activity.id = generateUid()
        activity.progress = 0
        activity.createdAt = new Date()
        activity.updatedAt = new Date()
        return fakeAPI.post('activities',activity)
    },

    deleteActivityAPI (activity) {
        return fakeAPI.delete('activities', activity)
    },

    fetchUser () {
        return {
            name: 'Filip Jerga',
            id: '-Aj34jknvncx98812',
        }
    }
}
export default store
