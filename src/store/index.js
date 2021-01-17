import fakeAPI from "@/lib/fakeAPI";
import Vue from 'vue'

const store = {
    state: {
        activities: {},
        categories: {}
    },
    generateUid () {return Math.floor(new Date() * Math.random())},

    fetchActivities () {
        return fakeAPI.get('activities',{force:1})
            .then(activities => {
                Object.keys(activities).forEach(key =>
                    this.setItem('activities', key, activities[key])
                )
                return activities
            })
    },

    fetchCategories () {
        return fakeAPI.get('categories',{force:1})
            .then(categories => {
                Object.keys(categories).forEach(key =>
                    this.setItem('categories', key, categories[key])
                )
                return categories
            })
    },

    createActivity(activity) {
        activity.id = this.generateUid()
        activity.progress = 0
        activity.createdAt = new Date()
        activity.updatedAt = new Date()
        return fakeAPI.post('activities',activity)
            .then(createdActivity => {
                this.setItem('activities', createdActivity.id, createdActivity)
                return createdActivity
            })
    },

    updateActivity (activity) {
        activity.updatedAt = new Date()

        return fakeAPI.post('activities', activity)
            .then(updatedActivity => {
                this.setItem('activities', updatedActivity.id, updatedActivity)
                return updatedActivity
            })
    },

    deleteActivity (activity) {
        return fakeAPI.delete('activities', activity)
            .then(deletedActivity => {
                Vue.delete(this.state.activities, activity.id)
                return deletedActivity
            })
    },

    setItem (resource, id, item) {
        Vue.set(this.state[resource], id, item)
    },

    fetchUser () {
        return {
            name: 'Filip Jerga',
            id: '-Aj34jknvncx98812',
        }
    }
}
export default store
