import fakeAPI from "@/lib/fakeAPI";

const generateUid = () => Math.floor(new Date() * Math.random())

export const fetchActivities = () => {
    return fakeAPI.get('activities')
}

export const fetchCategories = () => {
    return fakeAPI.get('categories')
}

export const createActivityAPI = (activity) => {
    activity.id = generateUid()
    activity.progress = 0
    activity.createdAt = new Date()
    activity.updatedAt = new Date()

    return new Promise((resolve, reject) => {
        resolve(activity)
    })

}

export const fetchUser = () => {
    return {
        name: 'Filip Jerga',
        id: '-Aj34jknvncx98812',
    }
}