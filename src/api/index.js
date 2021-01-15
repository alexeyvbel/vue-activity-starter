import fakeAPI from "@/lib/fakeAPI";

const generateUid = () => Math.floor(new Date() * Math.random())

export const fetchActivities = () => {
    return fakeAPI.get('activities',{force:1})
}

export const fetchCategories = () => {
    return fakeAPI.get('categories',{force:1})
}

export const createActivityAPI = (activity) => {
    activity.id = generateUid()
    activity.progress = 0
    activity.createdAt = new Date()
    activity.updatedAt = new Date()

    return fakeAPI.post('activities',activity)

}

export const deleteActivityAPI = (activity) => {
    return fakeAPI.delete('activities', activity)
}

export const fetchUser = () => {
    return {
        name: 'Filip Jerga',
        id: '-Aj34jknvncx98812',
    }
}